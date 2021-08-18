import { StyleSheet, Dimensions } from 'react-native';
export default StyleSheet.create({
    container:{
        flex :1,
        backgroundColor:"#eceff1",
        padding :15,
        margin: 10,
        borderRadius :10,
        
    },
    image:{
        height:Dimensions.get('window').height/7,
        width:'100%',
        borderRadius : 10,
        resizeMode:'contain',
        shadowColor:"black",
        shadowOpacity:10,


    },
    title:{
        fontWeight:"bold",
        
        
        

    },
    inner_container:{
        padding:3,
        margin:0,

    },
    price:{
        
        marginTop:3,
        color: '#333333',
        fontWeight: 'bold',
        fontSize: 17,


    },
    stok:{
        color: 'red',
        marginTop: 5,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 17,

    }
})