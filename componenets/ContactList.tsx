import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts=[
        {
            uid:1,
            name:'Anjana',
            status:'Software Developer',
            imageUrl:'https://img.freepik.com/free-photo/portrait-smiling-successful-businesswoman-looking-into-camera-sitting-restaurant-business-lady-with-stylish-hairstyle-wears-elegant-suit-business-meeting-attractive-appearance_8353-12611.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1696291200&semt=ais'
        },
        {
            uid:2,
            name:'Reshma',
            status:'Python Developer',
            imageUrl:'https://img.freepik.com/free-photo/businesswoman-sitting-table-cafe-working_1157-26426.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697328000&semt=ais'
        },
        {
            uid:3,
            name:'Maneesh',
            status:'Mearn',
            imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoHTK-Es-RLcDR8sMAc7Ju_UhJDbdul28k_XiX2Lq0EnXgMMPjgmmzPAeyxokqaQMSkmc&usqp=CAU'
        },
        {
            uid:4,
            name:'Arun',
            status:'DataScience',
            imageUrl:'https://media.istockphoto.com/id/1147289240/photo/portrait-of-a-smiling-student-at-the-city-street.jpg?s=612x612&w=0&k=20&c=9-L5boel1w6eQZsZJDXjXpLMTkCopgSue6vycZzP3r4='
        },
        {
            uid:5,
            name:'Sanjay',
            status:'ReactNative',
            imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoHTK-Es-RLcDR8sMAc7Ju_UhJDbdul28k_XiX2Lq0EnXgMMPjgmmzPAeyxokqaQMSkmc&usqp=CAU'
        }
    ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
    <ScrollView
    style={styles.container}
    scrollEnabled={false}
    >{contacts.map(({uid,name,status,imageUrl})=>(
        <View key={uid} style={styles.userCard}>
            <Image
            source={{
                uri:imageUrl
            }}style={styles.userimage}
            ></Image>
           <View>
           <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>

           </View>
        </View>
    ))}</ScrollView>    
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4

    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:4,
    backgroundColor:'#EAF0F1',
    padding:8,
    borderRadius:14
    },
    userimage:{
        width:60,
        height:60,
        borderRadius:60/2,
        marginRight:14
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'#000000'
    },
    userStatus:{
        fontSize:12,
        color:'#4C4B4B'
    }
})