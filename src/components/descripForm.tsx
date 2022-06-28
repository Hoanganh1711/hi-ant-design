import React, { useState } from 'react';
import {
    Form,
    Input,
    // Button,
    Radio,
    // Select,
} from 'antd';
import 'antd/dist/antd.css';

const options1 = [
    {
        label: 'Khoảng giá',
        value: 'Khoảng giá',
    },
];

const options2 = [
    {
        label: 'Khoảng diện tích',
        value: 'Khoảng diện tích',
    }
];


const DescripForm = () => {
    const [value1, setValue1] = useState('Khoảng giá');
    const [value2, setValue2] = useState('Khoảng diện tích');

    const onChange1 = ({ target: { value } }: any) => {
        // console.log('radio1 checked', value);
        setValue1(value);
    };
    const onChange2 = ({ target: { value } }: any) => {
        // console.log('radio1 checked', value);
        setValue2(value);
    };

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
      console.log(values);
    };

    return (
        <div>
            <Form form={form} onFinish={onFinish}>
                <h3 style={{ color: "blue" }}>II. Thông tin mô tả</h3>

                <Form.Item label="Giá tiền (VNĐ)"
                    rules={[
                        {
                            required: true,
                        }
                    ]}
                >
                    <div>
                        <Input placeholder='Giá Min' />
                        <Radio value={value1}/><b>Giá thỏa thuận</b>
                    </div>

                    <Radio.Group options={options1} onChange={onChange1} value={value1} optionType="button" />
                </Form.Item>

                <Form.Item label="Diện tích (m2)">
                    <div>
                        <Input placeholder='Diện tích Min' />
                    </div>

                    <Radio.Group options={options2} onChange={onChange2} value={value2} optionType="button" />

                </Form.Item>
            </Form>
        </div>
    )
}

export default DescripForm