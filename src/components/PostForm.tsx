import { Button, Checkbox, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { Radio } from 'antd';
import { useState } from 'react';

const optionsWithDisabled = [
  {
    label: 'Mua bán',
    value: 'Mua bán',
  },
  {
    label: 'Cho thuê',
    value: 'Cho thuê',
  },
];

const PostForm = () => {

  const [value, setValue] = useState('Apple');

  const onChange: any = ({ target: {value} }: any) => {
    console.log('radio4 checked', value);
    setValue(value);
  };

    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
    
      return (
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Tên dự án"
            name="Tên dự án"
            // rules={[{ required: true, message: 'Xin hãy nhập tên dự án!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Loại hình"
            name="Loại hình"
            rules={[{ required: true, message: 'Lựa chọn loại hình dự án!' }]}
          >
          <Radio.Group
            options={optionsWithDisabled}
            onChange={onChange}
            value={value}
            optionType="button"
            buttonStyle="solid"
          />

          </Form.Item>
    
          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
    
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      );
}

export default PostForm