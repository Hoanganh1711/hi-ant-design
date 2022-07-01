import React, { useState } from "react";
import {
    Form,
    Input,
    Select,
    Col,
    Row,
    DatePicker
} from 'antd';
import moment from 'moment';
// const dateFormat = 'YYYY-MM-DD';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];


const ServicePack = () => {

    const [inputDate, setInputDate] = useState("")

    const currentDate = new Date()


    const onChange = (date: any, dateString: any) => {
        // console.log(date, dateString);
        setInputDate(dateString)
    };

    console.log("inputDate", inputDate)


    return (
        <>
            <Row style={{ justifyContent: "space-around" }}>
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
                        <DatePicker style={{ width: "100%" }} defaultValue={moment(currentDate, dateFormatList[0])} format={dateFormatList} onChange={onChange} />
                    </Form.Item>
                </Col>

                <Col span={4}>
                    <label><b>Ngày kết thúc</b></label>
                    <Form.Item>
                        <Input 
                        defaultValue={inputDate}
                        disabled />
                        {/* <div style={{ width: "100%" }}>{inputDate}</div> */}
                    </Form.Item>
                </Col>
            </Row>
        </>
    )
}

export default ServicePack