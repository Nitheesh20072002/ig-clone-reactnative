import { View, Text,Image, StyleSheet } from 'react-native'
import React from 'react'
import SignupForm from '../components/signupScreen/SignupForm'

const INSTAGRAM_LOGO='https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=2000'
const SignupScreen = ({navigation}) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={{
                uri:INSTAGRAM_LOGO,height:100,width:100,
            }}/>
        </View>
        <SignupForm navigation={navigation}/>
    </View>
)

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:30,
        paddingHorizontal:12,
    },
    logoContainer:{
        alignItems:'center',
        marginTop:60,
    },
})
export default SignupScreen