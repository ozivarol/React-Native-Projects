import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import styles from "./DoCard.styles"

const DoCard = (prosp) =>{
    return(
        <TouchableOpacity style={styles.container}>
            <Text>{prosp.do.do}</Text>
        </TouchableOpacity>
        

    )
}

export default DoCard;