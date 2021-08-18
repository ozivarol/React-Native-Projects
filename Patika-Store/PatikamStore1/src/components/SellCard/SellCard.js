import React from 'react';
import { StyleSheet,View,Text,Image } from 'react-native';
import styles from "./SellCard.style"

const SellCard =({products}) =>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri : products.imgURL}} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{products.title}</Text>
                <Text style={styles.price}>{products.price}</Text>
                <Text style={styles.stok}>{products.inStock === true ? "":"Stokta Yok"}</Text>
                <Text></Text>
            </View>
        </View>
    )
}

export default SellCard;