import React from "react";
import {Image} from "react-native";

const ImageComponent=(props)=>{
    return(
        <Image source={props.source}  style={props.style}/>
    )
};

export default ImageComponent;