import { useMutation, useQuery } from "@apollo/client";
import { Card, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { DateTime } from "luxon";
import { IMutation, IQuery, employeeModel } from "../graphql";
import { DELETE_EMPLOYEE, GET_EMPLOYEE } from "./modify-employee/query";
interface PropsType {
  onClickEdit: (editData: employeeModel) => void;
}
export const EmployeeListInfo: React.FC<PropsType> = ({ onClickEdit }) => {
  const { data, loading } = useQuery<IQuery>(GET_EMPLOYEE, {
    fetchPolicy: "network-only",
  });
 console.log(data)
  const [deleteEmployee] = useMutation<IMutation>(DELETE_EMPLOYEE);

  const onClickDelete = async (record: any) => {
    console.log(record?.id, "adfadfadfadfasdf");

    await deleteEmployee({
      variables: {
        deleteemployeeId: record?.id,
      },
      refetchQueries: ["GetAllEmployee"],
    });
  };
  const employeeList = data?.getemployee;
  console.log(employeeList)
  const tableColumns: ColumnsType<employeeModel> = [
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
      title: "Action",
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
            <span className="" onClick={() => onClickDelete(record)}>
              <DeleteOutlined />
            </span>
          </>
        );
      },
    },
  ];

  return (
    <Card title={<b>Employee List</b>}>
      <Table
        columns={tableColumns}
        dataSource={employeeList}
        loading={loading}
        className="skill-table custom-table-header"
        rowKey="id"
      />
    </Card>
  );
};
