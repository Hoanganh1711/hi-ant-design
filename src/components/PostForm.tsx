import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  // DatePicker,
} from 'antd';

// const { RangePicker } = DatePicker;
// const { TextArea } = Input;
const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const options = [
  {
    label: 'Mua bán',
    value: 'Mua Bán',
  },
  {
    label: 'Cho thuê',
    value: 'Cho thuê',
  },
];

const PostForm = () => {
  // const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  // const onFormLayoutChange = ({ disabled }: { disabled: boolean }) => {
  //   setComponentDisabled(disabled);
  // };

  const [value, setValue] = useState('Apple');
  const [citysInput, setCitysInput] = useState([])
  const [districtsInput, setDistrictsInput] = useState([])
  const [wardInput, setWardInput] = useState([])

  const onChange = ({ target: { value } }: any) => {
    setValue(value);
  };

  //Xử lý lấy dữ liệu từ API thao tác Form
  useEffect(() => {
    cityAPI()
  }, [])

  const cityAPI = async () => {
    const response = await fetch(`https://provinces.open-api.vn/api/`)
    const data = await response.json()
    console.log(data)
    setCitysInput(data)
  }

  // const districtAPI = async () => {
  //   console.log(data)
  // }
  
  const handleChangeCity = async (e: any) => {
    // console.log(e, 'quang');
    const response = await fetch(`https://provinces.open-api.vn/api/p/${e}?depth=2`)
    const data = await response.json()
    setDistrictsInput(data)
  }

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };
  return (
    <Form {...layout} form={form} onFinish={onFinish}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ width: "50%" }}
    >
      <h3 style={{ color: "blue" }}>I. Thông tin cơ bản</h3>

      <Form.Item
        label="Tên dự án"
        name="note"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input placeholder="Nhập tên dự án" />
      </Form.Item>
      <Form.Item label="Loại hình"
        name="cellType"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Radio.Group options={options} onChange={onChange} value={value} optionType="button" />
      </Form.Item>
      <Form.Item label="Loại BĐS"
        name="type"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select placeholder="-Loại BĐS-">
          <Select.Option value="demo1">Nhà ở</Select.Option>
          <Select.Option value="demo2">Chung cư</Select.Option>
          <Select.Option value="demo3">Đất thổ cư</Select.Option>
          <Select.Option value="demo4">Đất ruộng</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Tỉnh/Thành Phố"
        name="city"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select placeholder="Nhập tên Thành phố" onChange={(e) => handleChangeCity(e)}>
          {citysInput.map((item: any, index) => {
            return (
              <Option key={index} value={item.code}>{item.name}</Option>
            )
          })}
        </Select>
      </Form.Item>

      <Form.Item label="Quận/Huyện"
        name="district"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select placeholder="Nhập tên Quận/Huyện">
          {districtsInput.map((item: any, index) => {
            return (
              <Option key={index} value={item.code}>{item.name}</Option>
            )
          })}
        </Select>
      </Form.Item>

      <Form.Item label="Xã/Phường">
        <Select placeholder="Nhập tên Xã/Phường">
          {/* {data.map((item: any, index) => {
            return(
              <Option key={index} value={item.name}>{item.name}</Option>
            )
          })} */}
        </Select>
      </Form.Item>

      <Form.Item label="Đường phố">
        <Select placeholder="Đường phố">
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Địa chỉ">
        <Input placeholder='Địa chỉ' />
      </Form.Item>
      {/* <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
          ]}
        />
      </Form.Item> */}
      {/* <Form.Item label="Cascader">
        <Cascader
          options={[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                },
              ],
            },
          ]}
        />
      </Form.Item> */}
      {/* <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="RangePicker">
        <RangePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="TextArea">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item> */}
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
}

export default PostForm