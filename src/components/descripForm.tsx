import React, { useState, useRef } from 'react';
import {
    Col,
    Form,
    Input,
    // Button,
    Radio,
    Select,
} from 'antd';
import 'antd/dist/antd.css';
import { Editor } from '@tinymce/tinymce-react';

const { Option } = Select;

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

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    // const editorRef = useRef(null);
    // const log = () => {
    //     if (editorRef.current) {
    //         // console.log(editorRef.current.getContent());
    //     }
    // };

    return (
        <>
            <h2 style={{ color: "blue" }}>II. Thông tin mô tả</h2>
            <div>
                <Form form={form} onFinishFailed={onFinishFailed} style={{ display: "flex" }}
                    // labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                >
                    <Col span={12}>
                        <Form.Item label="Giá tiền (VNĐ)"
                            style={{ marginBottom: 10 }}
                            name="Giá"
                            rules={[
                                {
                                    required: true,
                                }
                            ]}
                        >
                            <div style={{ display: "flex" }}>
                                <Col span={12} style={{ marginRight: 40 }}>
                                    <div>
                                        <Input placeholder='Giá Min' />
                                        <Radio value={value1} style={{ marginTop: 10 }} /><b>Giá thỏa thuận</b>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <Radio.Group options={options1} onChange={onChange1} value={value1} optionType="button" />
                                </Col>
                            </div>
                        </Form.Item>

                        <Form.Item label="Diện tích (m2)"
                            name="Diện tích"
                            rules={[
                                {
                                    required: true,
                                }
                            ]}>

                            <div style={{ display: "flex" }}>
                                <Col span={15} style={{ marginRight: 40 }}>
                                    <Input placeholder='Diện tích Min' />
                                </Col>

                                <Col span={12}>
                                    <Radio.Group options={options2} onChange={onChange2} value={value2} optionType="button" />
                                </Col>
                            </div>
                        </Form.Item>
                    </Col>

                    <Col span={6} >
                        <Form.Item label="Hướng nhà:">
                            <Select>
                                <Select.Option value="demo1">Đông</Select.Option>
                                <Select.Option value="demo2">Tây</Select.Option>
                                <Select.Option value="demo3">Nam</Select.Option>
                                <Select.Option value="demo4">Bắc</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="Tình trạng pháp lý:">
                            <Select>
                                <Select.Option value="demo1">Chính chủ</Select.Option>
                                <Select.Option value="demo2">Chưa có sổ đỏ</Select.Option>
                                <Select.Option value="demo3">Đang tranh chấp</Select.Option>
                                <Select.Option value="demo4">Vô chủ</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>

                </Form >

                <Form.Item label="Tiêu đề"
                    className='title'
                    name="Tiêu đề"
                    rules={[
                        {
                            required: true,
                        }
                    ]}>
                    <Input />
                </Form.Item>

                <Editor
                    // onInit={(evt, editor) => editorRef.current = editor}
                    initialValue=""
                    init={{
                        height: 500,
                        menubar: true,
                        // toolbar: 'media',
                        plugins: [
                            'media', 'image',
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
            </div>
        </>
    )
}

export default DescripForm