import React from 'react';
import { SafeAreaView,View,Text, Button ,StyleSheet,TouchableOpacity} from 'react-native';
import Card from './components/Card';
function App(){
  const sayHello =label  =>{
    console.log("Merhaba"+label)
  };
  return(
    <SafeAreaView style={styles.container}>
    
      <Card title="Eddard Stark" text="Winter is coming.." />
      <Card title="Arif Işık" text = "Halı Kilim Travel.." />
      <Card title= "Serbest" text = "ilhami abi sen söyle ben başka bir ilde miyim?" />
          
        
    

     
      

      
          
      
          
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container :{
    flex:1,
    
    backgroundColor:"#e0e0e0",
    
    

  },
  
})
export default App;