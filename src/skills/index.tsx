import { useMutation, useQuery } from "@apollo/client";
import { Card, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { IMutation, IQuery, skillsModel } from "../graphql";
import { DELETE_SKILLS, GET_SKILLS } from "./modify-skill/query";
interface PropsType {
  onClickEdit: (editData: skillsModel) => void;
}
export const SkillsListInfo: React.FC<PropsType> = ({ onClickEdit }) => {
  const { data, loading } = useQuery<IQuery>(GET_SKILLS, {
    fetchPolicy: "network-only",
  });

  const [deleteSkill] = useMutation<IMutation>(DELETE_SKILLS);

  const onClickDelete = async (record: any) => {
    console.log(record?.id, "adfadfadfadfasdf");

    await deleteSkill({
      variables: {
        deleteSkillId: record?.id,
      },
      refetchQueries: ["Getskills"],
    });
  };
  const skillsList = data?.getskills;
  const tableColumns: ColumnsType<skillsModel> = [
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
    <Card title={<b>Skills List</b>}>
      <Table
        columns={tableColumns}
        dataSource={skillsList}
        loading={loading}
        className="skill-table custom-table-header"
        rowKey="id"
      />
    </Card>
  );
};
