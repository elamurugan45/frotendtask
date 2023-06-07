import { useMutation, useQuery } from "@apollo/client";
import { Card, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { DELETE_TAG, GET_TAG } from "./modify-tag/query";
import { IMutation, IQuery, TagsModel,  } from "../graphql";
interface PropsType {
  onClickEdit: (editData: TagsModel) => void;
}
export const TagListInfo: React.FC<PropsType> = ({ onClickEdit }) => {
  const { data, loading } = useQuery<IQuery>(GET_TAG, {
    fetchPolicy: "network-only",
  });

  const [deleteTag] = useMutation<IMutation>(DELETE_TAG);

  const onClickDelete = async (record: any) => {
    console.log(record?.id, "adfadfadfadfasdf");

    await deleteTag({
      variables: {
        deletetagsId: record?.id,
      },
      refetchQueries: ["Gettags"],
    });
  };
  const tagList = data?.gettags;
  const tableColumns: ColumnsType<TagsModel> = [
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
    <Card title={<b>Tag List</b>}>
      <Table
        columns={tableColumns}
        dataSource={tagList}
        loading={loading}
        className="skill-table custom-table-header"
        rowKey="id"
      />
    </Card>
  );
};
