import { StyleSheet, Text, View,Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openwebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
     <View style={[styles.card,styles.elevatedcard]}>
      <View style={styles.headingContainer}>
         <Text style={styles.headerText}>What's new in Javascript
         </Text>
      </View>
      <Image
      source={{
        uri:'https://play-lh.googleusercontent.com/rfWOJQVBHoAZ_B43v0ySFlLmJBLtksVGAxGaFRh2ex4nOmNQ86qzG4sYWV63IKrXlvI',
        
      }}
      style={styles.cardImage}
      ></Image>
      <View style={styles.bodyContainer}>
        <Text numberOfLines={3}>It doesn't feel good to have a disclaimer in every 
            video but this is how the world is right now. 
All videos are for educational purposes and use them wisely.
 Any video may have a slight mistake, please take decisions based on your research.
 This video is not forcing anything on you.</Text>

      </View>
      <View style={styles.footerContainer}>
       <TouchableOpacity 
       onPress={()=>openwebsite('https://www.uicolorpicker.learncodeonline.in/') }>
       <Text style={styles.socialLinks}>Read More</Text>

       </TouchableOpacity>
       <TouchableOpacity 
       onPress={()=>openwebsite('https://www.uicolorpicker.learncodeonline.in/') }>
       <Text style={styles.socialLinks}>Follow me</Text>

       </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
      fontSize:24,
      fontWeight:'bold',
      paddingHorizontal:8
    },
    card:{
      width:350,
      height:360,
      borderRadius:6,
      marginHorizontal:16,
      marginVertical:12
    },
    elevatedcard:{
      backgroundColor:'#DAE0E2',
      elevation:3,
      shadowOffset:{
        width:1,
        height:1
      },
      shadowColor:'#333',
      shadowOpacity:0.4

    },
    headingContainer:{
      height:40,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'

    },
    headerText:{
      color:'#FFFFFF',
      fontSize:16,
      fontWeight:'600'
    },
    cardImage:{
        height:190,

    },
    bodyContainer:{
      padding:10,

    },
    footerContainer:{
      padding:8,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly'
  
  },
    socialLinks:{
fontSize:16,
color:'#000000',
paddingHorizontal:20,
paddingVertical:6,
backgroundColor:'#FFFFFF',
borderRadius:6

    },


})