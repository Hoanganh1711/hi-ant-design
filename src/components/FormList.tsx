import React from "react";
import PostForm from "./PostForm";
import DescripForm from "./descripForm";
import { Form } from "antd";
import UploadImgForm from "./UploadImgForm";
import ServicePack from "./ServicePack";

const FormList = () => {
    return (
        <>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360}}>
                <div>
                    <PostForm />
                </div>
                <div style={{marginTop: 20}}>
                    <DescripForm />
                </div>
                <div style={{marginTop: 20}}>
                    <UploadImgForm />
                </div>
                <div style={{marginTop: 20}}>
                    <ServicePack />
                </div>
            </div>
        </>
    )
}

export default FormList