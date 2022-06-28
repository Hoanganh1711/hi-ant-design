import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
} from 'antd';
import Map from './Map';

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

  const [value, setValue] = useState('');
  const [citysInput, setCitysInput] = useState([])
  const [districtsInput, setDistrictsInput] = useState([])
  const [wardsInput, setWardsInput] = useState([])

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
    // console.log(data)
    setCitysInput(data)
  }

  const districtsAPI = async (e: any) => {
    const response = await fetch(`https://provinces.open-api.vn/api/p/${e}?depth=2`)
    const data = await response.json()
    setDistrictsInput(data.districts)
  }

  const wardsAPI = async (e: any) => {
    const response = await fetch(`https://provinces.open-api.vn/api/d/${e}?depth=2`)
    const data = await response.json()
    // console.log(data)
    setWardsInput(data.wards)
  }
  
  const handleChangeCity = (e: any) => {
    districtsAPI(e)
  }

  const handleChangeDistricts = (e: any) => {
    wardsAPI(e)
  }

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };
  return (
    <>
      <h2 style={{ color: "blue" }}>I. Thông tin cơ bản</h2>

      <div style={{display: "flex"}}>
        <Form {...layout} form={form} onFinish={onFinish}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ width: "800px" }}
        >

          <Form.Item
            label="Tên dự án"
            name="Tên dự án"
            rules={[
              {
                required: true,
                message: "Nhập tên dự án"
              },
            ]}
          >
            <Input placeholder="Nhập tên dự án" />
          </Form.Item>
          <Form.Item label="Loại hình"
            name="Loại hình"
            rules={[
              {
                required: true,
                message: "Lựa chọn Loại hình"
              },
            ]}
          >
            <Radio.Group options={options} onChange={onChange} value={value} optionType="button" />
          </Form.Item>
          
          <Form.Item label="Loại BĐS"
            name="Loại BĐS"
            rules={[
              {
                required: true,
                message: "Lựa chọn loại BĐS"
              },
            ]}
          >
            <Select placeholder="--Loại BĐS--">
              <Select.Option value="demo1">Nhà ở</Select.Option>
              <Select.Option value="demo2">Chung cư</Select.Option>
              <Select.Option value="demo3">Đất thổ cư</Select.Option>
              <Select.Option value="demo4">Đất ruộng</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Tỉnh/Thành Phố"
            name="Thành phố"
            rules={[
              {
                required: true,
                message: "Chọn Thành phố"
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
            name="Quận/Huyện"
            rules={[
              {
                required: true,
                message: "Chọn Quận/Huyện"
              },
            ]}
          >
            <Select placeholder="Nhập tên Quận/Huyện" onChange={(e) => handleChangeDistricts(e)}>
              {districtsInput.map((item: any, index) => {
                return (
                  <Option key={index} value={item.code}>{item.name}</Option>
                )
              })}
            </Select>
          </Form.Item>

          <Form.Item label="Xã/Phường"
            name="Xã/Phường"
          >
            <Select placeholder="Nhập tên Xã/Phường">
              {wardsInput.map((item: any, index) => {
                return(
                  <Option key={index} value={item.name}>{item.name}</Option>
                )
              })}
            </Select>
          </Form.Item>

          <Form.Item label="Đường phố">
            <Input placeholder='Nhập tên Đường phố' />
          </Form.Item>

          <Form.Item label="Địa chỉ"
            name="Địa chỉ"
          >
            <Input placeholder='Địa chỉ' />
          </Form.Item>
    
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
        </Form>
        <Map/>
      </div>
    </>
  );
}

export default PostForm