import React, { useState } from 'react';
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
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../index.tsx';


// const { Option } = Select;

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
            <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: 10 }}>
                <h2 style={{ color: "blue" }}>II. Thông tin mô tả</h2>
                <Form form={form} onFinishFailed={onFinishFailed}
                    wrapperCol={{ span: 24 }}
                    layout="horizontal"
                >
                    <div style={{ display: "flex" }} >
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

                        <Col span={10} >
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
                    </div>

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


                    <Form.Item label="Mô tả"
                        className='title'
                        name="Mô tả"
                        rules={[
                            {
                                required: true,
                            }
                        ]}>
                        <CKEditor
                            editor={ClassicEditor}
                            data="<p>Hello from CKEditor 5!</p>"
                            onReady={(editor: any) => {
                                // You can store the "editor" and use when it is needed.
                                console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event: any, editor: { getData: () => any; }) => {
                                const data = editor.getData();
                                console.log({ event, editor, data });
                            }}
                            onBlur={(event: any, editor: any) => {
                                console.log('Blur.', editor);
                            }}
                            onFocus={(event: any, editor: any) => {
                                console.log('Focus.', editor);
                            }}
                        />
                    </Form.Item>
                </Form >
            </div >
        </>
    )
}

export default DescripForm