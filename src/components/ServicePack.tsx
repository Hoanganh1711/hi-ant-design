import React, { useEffect, useState } from "react";
import {
    Form,
    Input,
    Select,
    Col,
    Row,
    DatePicker,
    // Radio,
    Divider,
    Table
} from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
const dateFormat = 'DD/MM/YYYY';
// const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const columns = [
    {
        title: 'TÊN',
        dataIndex: 'name',
    },
    {
        title: 'MÃ COUPON',
        dataIndex: 'couponCode',
    },
    {
        title: 'HẠN DÙNG',
        dataIndex: 'dueDate',
    },
    {
        title: 'TÌNH TRẠNG',
        dataIndex: 'status',
    },
    {
        title: 'SỐ LẦN SỬ DỤNG',
        dataIndex: 'useCount',
    },
];

const data = [
    {
        key: '1',
        name: '[TK mới] Coupon Tin đăng HDY Basic 4 tuần',
        couponCode: "DBHPR4OTIM",
        dueDate: '27/09/2022',
        status: "Hoạt động",
        useCount: "0/1"
    },
    {
        key: '2',
        name: '[TK mới] Coupon Tin đăng HDY Basic 4 tuần',
        couponCode: "CTP83RVQP1",
        dueDate: '27/09/2022',
        status: "Hoạt động",
        useCount: "0/1"
    },
    {
        key: '3',
        name: '[TK mới] Coupon Tin đăng HDY Basic 4 tuần',
        couponCode: "7DIKKTZG8Y",
        dueDate: '27/09/2022',
        status: "Hoạt động",
        useCount: "0/1"
    },
    {
        key: '4',
        name: '[TK mới] Coupon Tin đăng HDY Basic 4 tuần',
        couponCode: "9DP7OVBE5F",
        dueDate: '27/09/2022',
        status: "Hoạt động",
        useCount: "0/1"
    },
    {
        key: '5',
        name: '[TK mới] Coupon Tin đăng HDY Basic 4 tuần',
        couponCode: "VM5FTA5DRS",
        dueDate: '27/09/2022',
        status: "Hoạt động",
        useCount: "0/1"
    },
];

const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
};


const ServicePack = () => {

    const [inputDate, setInputDate] = useState("")

    const currentDate = new Date();

    const onChange = (dateString: any) => {
        const timestamp = new Date(dateString._d).getTime()
        const plus29Days = timestamp + 2505600000
        const resultDate = new Date(plus29Days)

        var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        // date part from the timestamp
        var date = resultDate.getDate();
        // month part from the timestamp
        var month = months[resultDate.getMonth()];
        // year part from the timestamp
        var year = resultDate.getFullYear();

        if (date < 10) {
            setInputDate("0" + date + '/' + month + '/' + year)
        } else {
            setInputDate(date + '/' + month + '/' + year)
        }
    };

    return (
        <div style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10 }}>
            <h2 style={{ color: "blue" }}>IV. Chọn gói tin - Thanh toán</h2>

            <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                <div>
                    * Quý khách nên chọn đăng tin VIP để có hiệu quả hơn.<br></br>
                    VD: Tin HDY Diamond có lượt xem trung bình cao hơn 20 lần so với tin thường.
                </div>
                <Row style={{ justifyContent: "space-between", paddingTop: 20 }}>
                    <Col span={4} >
                        <label><b>Loại tin</b></label>
                        <Form.Item>
                            <Select placeholder="Loại tin">
                                <Select.Option value="demo1">HDY Basic</Select.Option>
                                <Select.Option value="demo2">HDY Silver</Select.Option>
                                <Select.Option value="demo3">HDY Gold</Select.Option>
                                <Select.Option value="demo4">HDY Diamond</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={4}>
                        <label><b>Thời gian</b></label>
                        <Form.Item>
                            <Select placeholder="Thời gian">
                                <Select.Option value="demo1">4 tuần</Select.Option>
                                <Select.Option value="demo2">2 tuần</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={4}>
                        <label><b>Ngày bắt đầu</b></label>
                        <Form.Item>
                            <DatePicker style={{ width: "100%" }} defaultValue={moment(currentDate, dateFormat)} format={dateFormat} onChange={onChange} />
                        </Form.Item>
                    </Col>

                    <Col span={4}>
                        <label><b>Ngày kết thúc</b></label>
                        <Form.Item>
                            <Input
                                style={{ color: "#000", cursor: "default" }}
                                value={inputDate}
                                disabled
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <h3>Giá trị đăng tin: <span style={{ color: "blue" }}>20.000</span> VNĐ</h3>

                <div>

                    <Divider />

                    <Table
                        rowSelection={{
                            type: "radio",
                            ...rowSelection,
                        }}
                        columns={columns}
                        dataSource={data}
                    />
                </div>
            </div>
        </div>
    )
}

export default ServicePack