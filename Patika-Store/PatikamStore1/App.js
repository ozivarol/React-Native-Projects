import React from 'react'
import { StyleSheet,Text,View,FlatList,Icon,Image,Dimensions,ImageBackground} from 'react-native'
import SellCard from './src/components/SellCard/SellCard'
import productData from './src/product_data.json'
import SearchBar from './src/components/SearchBar'
const backimage = {uri:"https://thumbs.dreamstime.com/z/seamless-shopping-icons-pattern-white-background-seamless-shopping-icons-pattern-grey-white-background-111671472.jpg"}
const renderProducts = ({item}) =><SellCard products={item}/>
export default function App (){
  return(
    <View style={styles.container}>
      <ImageBackground source={backimage} resizeMode="cover" style={styles.bckimage}>
      <Text style={styles.header_text}><Image source={require('./girl.png')} />  Patika Store </Text>
      
      
      <FlatList
        numColumns={2}
        ListHeaderComponent={() => (<SearchBar />)}
        keyExtractor={item => item.id.toString()}
        data={productData}
        renderItem={renderProducts}
        
      
      
      />
      </ImageBackground>
    </View>
  )
  


}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    padding :10,
    
    
  },
  header_text:{
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    color: 'purple'

  },
  icon:{
    height:Dimensions.get('window').height/5,

  },
  bckimage:{
    flex: 1,
    justifyContent: "center"
  }

})