import { useState, useEffect, useContext } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import FooterTabs from '../components/nav/FooterTabs'
import { AuthContext } from '../context/auth'
// import axios from 'axios'

const Profile = ({ navigation }) => {
  const { state } = useContext(AuthContext)
  //   useEffect(() => {
  // if(state) {

  // }
  //   },[])
  const { userName, name, phone, email, eWalletBalance } = state

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text title center>
        Profile Page
      </Text>
      <View>
        <Text style={{ color: 'blue' }} center onPress={() => navigation.navigate('EditProfile')}>
          Go to Edit Profile
        </Text>
      </View>
      {state && (
        <>
          <Text >userName : {userName}</Text>
          <Text >name : {name}</Text>
          <Text >phone : {phone}</Text>
          <Text >email : {email}</Text>
          <Text >eWallet : RM {eWalletBalance}</Text>
        </>
      )}
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <FooterTabs />
      </View>
    </SafeAreaView>
  )
}

export default Profile
