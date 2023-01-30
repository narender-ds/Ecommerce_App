import React from "react";
import {Text} from "react-native";

const TextComponent=(props)=>{
    return(
        <Text style={props.style}>{props.Text}</Text>
    );
};
export default TextComponent;