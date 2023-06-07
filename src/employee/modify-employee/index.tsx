import { useState } from "react";
import { Button, Card, Drawer } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { getDrawerWidth } from "../../lib/drawer-size";
import { EmployeeListInfo } from "..";
import { CreateEmployee } from "../employee";
import { SkillsModel } from "../../graphql";

export const Employee: React.FC = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const toggleDrawerVisible = () => setIsDrawerVisible((prev) => !prev);
  const [editData, setEditData] = useState<SkillsModel | null>();
  const onClickCreate = () => {
    setEditData(null);
    toggleDrawerVisible();
  };
  const onClickEdit = (editData: SkillsModel) => {
    setEditData(editData);
    toggleDrawerVisible();
  };
  const extraButton = (
    <div>
      <Button
        type="primary"
        icon={<PlusCircleOutlined />}
        onClick={onClickCreate}
        className="ml-3"
        block
      >
        Create
      </Button>
    </div>
  );

  return (
    <Card extra={extraButton}>
      <Drawer
        title={editData ? "Update Employee" : "Create a new Employee"}
        width={getDrawerWidth(400)}
        onClose={toggleDrawerVisible}
        visible={isDrawerVisible}
        bodyStyle={{ paddingBottom: 80 }}
        destroyOnClose={true}
      >
        <CreateEmployee
          toggleDrawerVisible={toggleDrawerVisible}
          editData={editData}
        />
      </Drawer>
      <EmployeeListInfo onClickEdit={onClickEdit} />
    </Card>
  );
};
