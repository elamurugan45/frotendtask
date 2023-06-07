import { useMutation, useQuery } from "@apollo/client";
import { Button, Card, Collapse, Popconfirm, Radio, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined,CaretRightOutlined } from "@ant-design/icons";
import { DateTime } from "luxon";
import { EmployeeModel, IMutation, IQuery,  } from "../graphql";
import { DELETE_EMPLOYEE, GET_EMPLOYEE } from "./modify-employee/query";
import { GET_SKILLS } from "../skills/modify-skill/query";
import { Skills } from "../skills/modify-skill";
import { useState } from "react";
interface PropsType {
  onClickEdit: (editData: EmployeeModel) => void;
}
export const EmployeeListInfo: React.FC<PropsType> = ({ onClickEdit }) => {
  const [popConfirmVisible, setPopConfirmVisible] = useState<boolean>(false);
  const [selectSkills, setSelectSkills] = useState<string[]>([]);
  const [showDeleteButton, setShowDeleteButton] = useState<boolean>(false);
  const [Skills, setSkills] = useState<string>("");


  const { data: SkillsList} = useQuery<IQuery>(GET_SKILLS, {
    fetchPolicy: "network-only",
  });  
  const { data, loading } = useQuery<IQuery>(GET_EMPLOYEE, {
    variables:{
      filter:{
        skillId:Skills || null,
      }
    }
  });
  const SkillList = SkillsList?.getskills;
 console.log(data,'123s')
  const [deleteEmployee] = useMutation<IMutation>(DELETE_EMPLOYEE);

  const onClickDelete = async (record: any) => {
    console.log(record?.id, "adfadfadfadfasdf");

    await deleteEmployee({
      variables: {
        deleteemployeeId: record?.id,
      },
      refetchQueries: ["Getemployee"],
    });
  };
  const employeeList = data?.getemployee;
  console.log(employeeList)
  const tableColumns: ColumnsType<EmployeeModel> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (_, record) => (
        <div className="d-flex antd-data-table-text-primary">
          {record?.name as string}
        </div>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      render: (_, record) => (
        <div className="d-flex antd-data-table-text-primary">
          {(record?.phone as string) || "--"}
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (_, record) => (
        <div className="d-flex antd-data-table-text-primary">
          {(record?.email as string) || "--"}
        </div>
      ),
    },
    {
      title: "DOB",
      dataIndex: "DOB",
      render: (_, record) => (
        <div className="d-flex antd-data-table-text-primary">
          {DateTime.fromISO(record?.DOB).toFormat("dd-MM-yyyy") || "--"}
        </div>
      ),
    },
    {
      title: "DOJ",
      dataIndex: "DOJ",
      render: (_, record) => (
        <div className="d-flex antd-data-table-text-primary">
          {DateTime.fromISO(record?.DOJ).toFormat("dd-MM-yyyy") || "--"}
        </div>
      ),
    },
    {
      title: "Age",
      dataIndex: "age",
      render: (_, record) => (
        <div className="d-flex antd-data-table-text-primary">
          {record?.age as number}
        </div>
      ),
    },
    {
      title: "Edit",
      dataIndex: "operation",
      key: "operation",
      render: (_, record) => {
        return (
          <>
            <span
              className=""
              style={{ marginRight: "10px" }}
              onClick={() => onClickEdit(record)}
            >
              <EditOutlined />
            </span>
          </>
        );
      },
    },
    {
      title: "Delete",
      dataIndex: "operation",
      key: "operation",
      render: (_, record) => {
        return (
          <>
            <span
              className=""
              style={{ marginRight: "10px" }}
              onClick={() => onClickDelete(record)}
            >
              <DeleteOutlined />
            </span>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Popconfirm
        icon={null}
        visible={popConfirmVisible}
        placement="bottom"
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        title={
          <>
            <Collapse
              ghost={true}
              expandIconPosition="right"
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 270 : 90} />
              )}
              accordion={true}
              defaultActiveKey={["1"]}
            >
              <Collapse.Panel header={<b>By Skills</b>} key={1}>
                <Card>
                  <Radio.Group
                    onChange={(e) => setSelectSkills(e.target.value)}
                    value={selectSkills}
                  >
                    {SkillList?.map((data) => (
                      <Radio value={data?.id} key={data?.id}>
                        {data?.name}
                      </Radio>
                    ))}
                  </Radio.Group>
                </Card>
              </Collapse.Panel>
            </Collapse>

            <Button
              type="primary"
              onClick={() => {
                setPopConfirmVisible(false);
                setShowDeleteButton(false);
                setSkills(selectSkills as any);
              }}
              block
            >
              <span style={{ color: "white" }}>APPLY</span>
            </Button>
          </>
        }
        onCancel={() => {
          setShowDeleteButton(false);
        }}
        onOpenChange={(visible) => {
          if (visible) {
            setPopConfirmVisible(true);
            setShowDeleteButton(true);
          } else {
            setPopConfirmVisible(false);
            setShowDeleteButton(false);
          }
        }}
      >
        <Button
          type="primary"
          style={{ width: "100px", marginBottom: "10px" }}
          block
        >
          Filter
        </Button>
      </Popconfirm>
      <Card title={<b>Employee List</b>}>
        <Table
          columns={tableColumns}
          dataSource={employeeList}
          loading={loading}
          rowKey="id"
        />
      </Card>
    </>
  );
};