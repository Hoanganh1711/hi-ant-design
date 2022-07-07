import { Col, Form, Input, Row, Select } from 'antd'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CameraOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import '../index.css';

const PostNewForm = () => {

    return (
        <Col span={16} style={{ margin: "0 auto 0 auto" }}>
            <h2>Tạo bài viết</h2>
            <div style={{ backgroundColor: "#fff", padding: "40px 30px", borderRadius: 10 }}>
                <div>
                    <Form>
                        <Form.Item
                            name="topic"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input topic!',
                                },
                            ]}
                        >
                            <Select placeholder="Chọn chủ đề *">
                                <Select.Option key="topic1" value="demo1">Chủ đề 1</Select.Option>
                                <Select.Option key="topic2" value="demo2">Chủ đề 2</Select.Option>
                                <Select.Option key="topic3" value="demo3">Chủ đề 3</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input title!',
                                },
                            ]}
                        >
                            <Input placeholder='Nhập tiêu đề bài viết *' />
                        </Form.Item>
                        <Form.Item
                            name="content"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input content!',
                                },
                            ]}
                        >
                            <CKEditor
                                editor={ClassicEditor}
                                data=""
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

                        <Form.Item>
                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture"
                                className="upload-list-inline"
                            >
                                <Button icon={<CameraOutlined />}>Thêm ảnh</Button>
                                <p style={{ color: "red" }}>* Định dạng ảnh bằng đuôi .png</p>
                            </Upload>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Đăng tin
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Col>
    )
}

export default PostNewForm