import { StyleSheet } from "react-native"
export default StyleSheet.create({
    container:{
        backgroundColor : "white",
        margin : 10, //dıştan boşluk
        borderWidth :1,
        borderColor : "gray",
        borderRadius : 10,
        
    
      },
      boyd:{
        padding : 10, // içten boşluk
    
      },
      title:{
        fontSize : 20,
        fontWeight : "bold",
        margin : 10,
        marginBottom : 3,
    
      },
      text :{
        fontSize:18,
        margin: 10,
        marginTop : 3,
      },
      button_container : {
        backgroundColor : "#00C2FF",
        padding :10,
        alignItems : "center",
        borderBottomLeftRadius: 9,
        borderBottomRightRadius :9,
    
      },
      button_title:{
        fontSize:20,
        fontWeight : "bold",
        color: "white",
      }
})