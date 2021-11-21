import { Form, Input, Button, Row, Col, Switch } from "antd";
import { useHistory } from "react-router";

const Calc = ({ calcData, setCalcData, disabled }) => {
  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = (values) => {
    setCalcData(values);
    localStorage.setItem("calcData", JSON.stringify(values));
    history.push("/estimator/plot-details");
  };

  console.log(disabled);
  return (
    <Form
      form={form}
      name="control-hooks"
      layout="vertical"
      onFinish={onFinish}
      requiredMark={false}
    >
      <Row gutter={[30, 30]}>
        <Col span={12}>
          <Form.Item
            name="city"
            label="City"
            initialValue={calcData && calcData.city}
            rules={[
              {
                required: true,
                message: "Please input your City",
              },
            ]}
          >
            <Input value={calcData && calcData.city} size="large" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            name="plotArea"
            label="Plot Area (SQ. FT)"
            initialValue={calcData && calcData.plotArea}
            rules={[
              {
                required: true,
                message: "Please input your Plot Area (SQ. FT)",
              },
              {
                pattern: "^([-]?[1-9][0-9]*|0)$",
                message: "Please enter only number",
              },
            ]}
          >
            <Input readOnly={disabled && disabled} size="large" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            name="plotFrontage"
            label="Plot Frontage"
            initialValue={calcData && calcData.plotFrontage}
            rules={[
              {
                required: true,
                message: "Please input your Plot Frontage",
              },
              {
                pattern: "^([-]?[1-9][0-9]*|0)$",
                message: "Please enter only number",
              },
            ]}
          >
            <Input readOnly={disabled && disabled} size="large" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            name="noOfCar"
            label="No. of Car Parkings"
            initialValue={calcData && calcData.noOfCar}
            rules={[
              {
                required: true,
                message: "Please input your No. of Car Parkings",
              },
              {
                pattern: "^([-]?[1-9][0-9]*|0)$",
                message: "Please enter only number",
              },
            ]}
          >
            <Input readOnly={disabled && disabled} size="large" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item
            name="noOfFloor"
            label="No. of Floors"
            initialValue={calcData && calcData.noOfFloor}
            rules={[
              {
                required: true,
                message: "Please input your No. of Floors",
              },
              {
                pattern: "^([-]?[1-9][0-9]*|0)$",
                message: "Please enter only number",
              },
            ]}
          >
            <Input readOnly={disabled && disabled} size="large" />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item name="lift" label="Lift">
            <Switch
              disabled={disabled && disabled}
              size="large"
              checkedChildren="Yes"
              unCheckedChildren="No"
            />
          </Form.Item>
        </Col>
        {disabled && disabled ? (
          ""
        ) : (
          <Col span={24}>
            <Form.Item style={{ float: "right" }}>
              <Button
                style={{ backgroundColor: "#FFC000" }}
                shape="round"
                type="primary"
                size="large"
                htmlType="submit"
              >
                Calculate
              </Button>
            </Form.Item>
          </Col>
        )}
      </Row>
    </Form>
  );
};

export default Calc;
