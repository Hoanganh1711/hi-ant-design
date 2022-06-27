import React from "react";
import PostForm from "./postForm";
import DescripForm from "./descripForm";

const FormList = () => {
    return(
        <>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <PostForm/>
        </div>
        <div className="site-layout-background" style={{marginTop: 20, padding: 24, minHeight: 360 }}>
        <DescripForm/>
        </div>
        </>
    )
}

export default FormList