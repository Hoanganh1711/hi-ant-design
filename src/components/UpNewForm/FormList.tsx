import React from "react";
import PostForm from "./BasicInfor";
import DescripForm from "./DescriptionInfo";
import UploadImgForm from "./UploadImg";
import ServicePack from "./ServicePack";

const FormList = () => {
    return (
        <>
            <h3>Soạn tin đăng</h3>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <div>
                    <PostForm />
                </div>
                <div style={{ marginTop: 20 }}>
                    <DescripForm />
                </div>
                <div style={{ marginTop: 20 }}>
                    <UploadImgForm />
                </div>
                <div style={{ marginTop: 20 }}>
                    <ServicePack />
                </div>
            </div>
        </>
    )
}

export default FormList