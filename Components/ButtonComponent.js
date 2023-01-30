import React from "react";
import { TouchableOpacity, Text } from "react-native";

const ButtonComponent=(props)=>{
return(
    <TouchableOpacity 
        style={props.style}
        onPress={props.onPress}
    >
        <Text>{props.title}</Text>
    </TouchableOpacity>
)
};

export default ButtonComponent;
