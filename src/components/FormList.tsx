import React from "react";
import PostForm from "./postForm";
import DescripForm from "./descripForm";
import Map from "./Map";

const FormList = () => {
    return(
        <>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360, display: "flex"}}>
        <PostForm/>
        <Map/>
        </div>
        <div className="site-layout-background" style={{marginTop: 20, padding: 24, minHeight: 360 }}>
        <DescripForm/>
        </div>
        </>
    )
}

export default FormList