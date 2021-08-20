import React from "react";
import { TextInput,View,TouchableOpacity,Text,SafeAreaView} from "react-native";

import styles from "./TextBar.style"
const TextBar = (props) =>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.top_container}>
                <TextInput placeholder="Buraya Yaz.."/>
                <View style={styles.seperator}></View>
                <TouchableOpacity   onPress={props.press} style={styles.input}>
                    <Text style={styles.title}>Kaydet</Text>
                </TouchableOpacity>
            </View>
            
                

           

        </SafeAreaView>
        
        
    )


}

export default TextBar;