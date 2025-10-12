import React, { useState, useRef, useEffect } from "react";
import { Input, Button, Row, Col, Space, Collapse, Form, Checkbox, Card, Typography, Spin, Alert } from "antd";
import useRequest from "../../hooks/useRequest";
import apiPath from "../../constants/apiPath";
import lang from "../../helper/langHelper";
import { Severty, ShowToast } from "../../helper/toast";
import { PhoneNumberField } from "../../components/InputField";

const SupportSection = () => {
  const [loading, setLoading] = useState(false);
  const [mobileNumber, setMobileNumber] = useState(null);
  const { request } = useRequest();
  const [form] = Form.useForm();

  const handleMobileNumberChange = (value, data, type) => {
    let country_code = data?.dialCode;
    setMobileNumber({
      country_code: country_code,
      mobile_number: value.slice(data?.dialCode?.length),
    });
  };

  const onSubmit = (values) => {
    setLoading(true);
    let payload = { ...values, ...mobileNumber };

    request({
      url: apiPath.support,
      method: "POST",
      data: { ...payload },
      onSuccess: (data) => {
        setLoading(false);
        if (data.status) {
          form.resetFields();
          ShowToast(data.message, Severty.SUCCESS);
        } else {
          setLoading(false);
          ShowToast(data.message, Severty.ERROR);
        }
      },
      onError: (error) => {
        setLoading(false);
        ShowToast(error?.response?.data?.message, Severty.ERROR);
      },
    });
  };

  return (
    <Form form={form} onFinish={(e) => onSubmit(e)} layout="vertical" className="row-col signup5-model">
      <Row gutter={24}>
        <Col span={24} md={12}>
          <Form.Item
            className="username"
            name="first_name"
            rules={[
              {
                max: 250,
                message: lang("Name should contain more then 250 characters!"),
              },
              {
                required: true,
                message: lang("Please Enter  Name"),
              },
            ]}
          >
            <Input placeholder={lang("Enter First Name")} />
          </Form.Item>
        </Col>
        <Col span={24} md={12}>
          <Form.Item
            className="username"
            name="last_name"
            rules={[
              {
                max: 250,
                message: lang("Name should contain more then 250 characters!"),
              },
              {
                required: true,
                message: lang("Please Enter  Name"),
              },
            ]}
          >
            <Input placeholder={lang("Enter Last Name")} />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        className="username"
        name="email"
        rules={[
          {
            type: "email",
            message: lang("Please enter a valid email address!"),
          },
          {
            max: 255,
            message: lang("Email address not more then 255 characters!"),
          },
          {
            required: true,
            message: lang("Please enter email!"),
          },
        ]}
      >
        <Input placeholder={lang("Enter Email address")} />
      </Form.Item>

      <PhoneNumberField
        label={""}
        name="mobile"
        placeholder={lang("Enter Phone Number")}
        cover={{ md: 24 }}
        colProps={{ sm: 24, span: 24 }}
        className="new-mobile-passwordnew username"
        onChange={handleMobileNumberChange}
        number={mobileNumber?.mobile_number}
      />

      <Col span={24} md={24}>
        <Form.Item
          className="username new-text-area-main"
          name="message"
          rules={[
            {
              max: 1000,
              message: lang("Message should contain more then 1000 characters!"),
            },
            {
              required: true,
              message: lang("Please Enter  Message"),
            },
          ]}
        >
          <Input.TextArea maxLength={10} minLength={5} placeholder={lang("Enter Your Message")} />
        </Form.Item>
      </Col>

      <Col md={24}>
        <Form.Item
          name="agree"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) => {
                if (value !== undefined && value === true) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(lang("Please confirm  agree to our friendly privacy policy.")));
              },
            },
          ]}
        >
          <Space align="baseline">
            <Checkbox>{lang("You agree to our friendly privacy policy.")}</Checkbox>
          </Space>
        </Form.Item>
      </Col>

      <Form.Item>
        <Button className="float-right float-right-main-new-send-button" type="primary" htmlType="submit">
          {lang("Send")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SupportSection;
