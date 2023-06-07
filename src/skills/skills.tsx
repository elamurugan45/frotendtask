import { useMutation, useQuery } from "@apollo/client";
import { Button, Col, Form, Input, Row, Select, message } from "antd";
import { Rule } from "antd/es/form";
import { useEffect, useState } from "react";
import { IMutation, IQuery, SkillsModel,  } from "../graphql";
import { CREATE_SKILLS, UPDATE_SKILLS } from "./modify-skill/query";
import { GET_TAG } from "../tags/modify-tag/query";

interface PropsType {
  toggleDrawerVisible: () => void;
  editData: SkillsModel | null | undefined;
}
const { Option } = Select;
const rules: { [key: string]: Rule[] } = {
  name: [
    {
      max: 30,
      required: true,
      message: "Enter title",
    },
  ],
};
export const CreateSkill: React.FC<PropsType> = ({
  toggleDrawerVisible,
  editData,
}) => {
  const [form] = Form.useForm();
  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(false);

  const [createSkill, { loading }] = useMutation<IMutation>(CREATE_SKILLS);
  const [updateSkill, { loading: updateLoading }] =
    useMutation<IMutation>(UPDATE_SKILLS);

  const { loading: rolesDetailLoading, data } = useQuery<IQuery>(GET_TAG);
  const tagsInfo = data?.gettags;
  console.log(tagsInfo, "aasdadaassddasd");
  useEffect(() => {
    if (!editData) return;
    form.setFieldsValue({
      name: editData?.name,
      tagsId: editData?.tags?.map((tags:any) => tags?.name),
    });
  }, [form, editData]);
  const onFinish = async () => {
    setIsFormDisabled(true);
    setTimeout(() => {
      setIsFormDisabled(false);
    }, 2000);
    try {
      const values = await form.validateFields();
      const modifyCategoryDto = {
        name: values?.name,
        tagsId: values?.tagsId.map((tags: any) => tags.value),
      };
      if (editData?.id) {
        await updateSkill({
          variables: {
            updateskillsId: editData?.id,
            input: modifyCategoryDto,
          },
        })
          .then(() => toggleDrawerVisible())
          .catch((error) => message?.error(error.message));
      } else {
        await createSkill({
          variables: {
            data: modifyCategoryDto,
          },
          refetchQueries: ["Getskills"],
        })
          .then(() => toggleDrawerVisible())
          .catch((error) => message?.error(error.message));
      }
    } catch (error: any) {
      message.error(
        error?.["errorFields"]?.[0]?.["errors"]?.[0] ||
          error["message"] ||
          "Please enter all required field "
      );
    }
  };
  return (
    <Form layout="vertical" form={form}>
      <Row gutter={16}>
        <Col span={20}>
          <Form.Item name="name" rules={rules?.name} label="Title">
            <Input placeholder="Enter Skill Name" />
          </Form.Item>
        </Col>
        <Col span={20}>
          <Form.Item
            name="tagsId"
            rules={rules?.roleId}
            wrapperCol={{ span: 23 }}
            label="Select Tags"
          >
            <Select
              className="w-100 input-box-bg"
              placeholder="Select Tag"
              mode="multiple"
              labelInValue={true}
              showSearch
            >
              {tagsInfo?.map((tags) => (
                <Option value={tags?.id} key={tags?.id}>
                  {tags?.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <div className="organization-submit-btn-section">
        <Button
          type="primary"
          className="custom-submit-btn mr-2"
          onClick={onFinish}
          loading={loading || isFormDisabled}
        >
          {editData ? "Update" : "Create"}
        </Button>
        <Button>Cancel</Button>
      </div>
    </Form>
  );
};

