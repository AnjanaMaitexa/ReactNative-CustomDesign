import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './componenets/FlatCards'
import Elevatedcards from './componenets/Elevatedcards'
import FancyCard from './componenets/FancyCard'
import ActionCard from './componenets/ActionCard'
import ContactList from './componenets/ContactList'

const cards = () => {
  return (
    <SafeAreaView>
        <ScrollView>
      <FlatCards/>
      <Elevatedcards/>
      <FancyCard/>
      <ContactList/>
      <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default cards