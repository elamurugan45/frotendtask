import { Card, Descriptions } from "antd";
import { useQuery } from "@apollo/client";
import { GET_EMPLOYEECOUNT, TOP_SKILLS_EMPLOYEE_COUNT, TOP_TAGS_EMPLOYEE_COUNT } from "./query";
import { IQuery } from "../graphql";
export const Dashboard = () => {
  const { loading, data } = useQuery<IQuery>(GET_EMPLOYEECOUNT);
  const { data: topSkillsWithCount } = useQuery<IQuery>(
    TOP_SKILLS_EMPLOYEE_COUNT
  );
  const { data: topTagsWithCount } = useQuery<IQuery>(
    TOP_TAGS_EMPLOYEE_COUNT
  );
  const employeeCount = data?.getemployeecount;
  const topSkillsEmployeeCount = topSkillsWithCount?.skillCount;
  const topTagsEmployeeCount = topTagsWithCount?.tagCount;
  return (
    <>
      <Card title="Dashboard" style={{ marginBottom: "10px" }}>
        <Descriptions bordered column={1}>
          <Descriptions.Item label="Employee Count">
            {employeeCount}
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <Card title="Top Skills With Employee Count">
        <Descriptions bordered column={1}>
          {topSkillsEmployeeCount?.map((skill) => (
            <>
              <Descriptions.Item label={skill?.name}>
                {skill?.employeeCount || "--"}
              </Descriptions.Item>
            </>
          ))}
        </Descriptions>
      </Card>
      <Card title="Top Tags With Employee Count">
        <Descriptions bordered column={1}>
          {topTagsEmployeeCount?.map((tag) => (
            <>
              <Descriptions.Item label={tag?.name}>
                {tag?.employeeCount || "--"}
              </Descriptions.Item>
            </>
          ))}
        </Descriptions>
      </Card>
    </>
  );
};

