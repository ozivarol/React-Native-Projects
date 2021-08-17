
import React from "react";
import {SafeAreaView,View,Text,FlatList,StyleSheet,ScrollView,Image,Dimensions} from "react-native";
import NewsCard  from "./components/NewsCard";
import news_data from "./news_data.json";
import news_banner_data from "./news_banner_data.json"

function App(){
  const renderNews = ({item}) => <NewsCard news={item} />
  const keys = item => item.u_id.toString()
  const Header = () =><ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {
    news_banner_data.map(bannerNews => 
    <Image  
      style={style.banner_image} 
      source={{uri:bannerNews.imageUrl}} 
      />)
  }
</ScrollView> 
  return(
    <SafeAreaView style={style.container}>
      <Text style={style.headerText}>NEWS</Text>
        
        
        <FlatList
         ListHeaderComponent = {Header}
         keyExtractor={keys}
         data={news_data}
         renderItem={renderNews}
         
         
        />
      
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#eceff1",

  },
  banner_image:{
    height:Dimensions.get('window').height / 5,
    width:Dimensions.get("window").width /2,
  },
  headerText:{
    fontWeight:"bold",
    fontSize:50,
  }

})

export default App;
