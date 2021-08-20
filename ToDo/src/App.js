import React, { useState } from 'react';
import { View,Text,TextInput,FlatList,StyleSheet,SafeAreaView } from 'react-native';
import DoCard from './components/DoCards/DoCard';
import dolist from "./do_list.json"
import TextBar from './components/TextBar';
const list =[
    {
        id:1,
        do:"Uyan",
        isActive:true
    },
    {
        id:2,
        do:"Dişini Fırçala",
        isActive:true,
    }

]

function App(){
    const [counter,setCounter]=useState(list.length)
    const renderItem =({item}) =><DoCard do={item} />
    const touchIt = () =>setCounter(counter+1)
   const [showOnlyDo,showOnly]=useState(true)
   

        
    
  


    
    return(
       <SafeAreaView style={styles.container}>
         <View style={styles.top_container}>
             <View style={styles.container_top}>
               <Text style={styles.header_text}>YAPILACAKLAR</Text>
               <Text style={styles.textDo}>{counter}</Text>
             </View>
             <FlatList
               keyExtractor={(item) => item.id}
               data={list}
               renderItem={renderItem}
             />
             
                 
            </View>
            <View style={styles.text_container}>
              
            </View>
            
            <View style={styles.inner_container}>

                <TextBar press={touchIt} />
              </View>  
            
            
         
        </SafeAreaView>
        
        
    )



}

export default App;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#2f4f4f",

    },
    header_text:{
        padding:10,
        margin:10,
        color:"#ffa500",
        fontSize:30,
        fontWeight:"bold"
        

    },
    seperator:{
        borderWidth:1,
        borderColor:"#e0e0e0"

    },
    inner_container:{
        margin:10,
        flex:0.20,
        
        
        

    },
    top_container:{
        flex:0.80,
        
        
    },
    textDo:{
        color:"#ffa500",
        textAlign:"right",
        fontSize:30,
        fontWeight:"bold",
        padding:10,
        margin:10,
        
        
    },
    text_container:{
        backgroundColor:"red"

    },
    container_top:{
        
        flexDirection:"row",
        justifyContent:"space-between"
    }
})