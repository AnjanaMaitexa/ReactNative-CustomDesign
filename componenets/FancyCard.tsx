import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trendingplaces</Text>
      <View style={[styles.card,styles.cardElevated]}>
      <Image
      source={{uri:'https://www.transindiatravels.com/wp-content/uploads/the-taj-mahal-agra.jpg'}}
      style={styles.cardimage}
      ></Image>
<View style={styles.cardBody}>
    <Text style={styles.cardTitle}>Hawa Mahal</Text>
    <Text style={styles.cardLabel}>PinkCity</Text>
    <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the 
    city of Jaipur,India. Built from red and pink sandstone,it is on the edge of the City Palace.</Text>
    <Text style={styles.cardFooter}>12 mins,away</Text>

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
        marginVertical:12,
        marginHorizontal:16
    },
    cardElevated:{
        backgroundColor:'#FFFFFF',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardimage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4,
        color:'#000000'
    },
    cardLabel:{
        color:'#000000',
        fontSize:14,
        marginBottom:6
    },
    cardDescription:{
        color:'#47535E',
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flexShrink:1
    },
    cardFooter:{
        color:'#000000'
    }


})