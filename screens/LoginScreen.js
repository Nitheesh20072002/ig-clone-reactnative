import { View, Text,Image, StyleSheet } from 'react-native'
import React from 'react'
import LoginForm from '../components/loginScreen/LoginForm'

const INSTAGRAM_LOGO='https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=2000'
const LoginScreen = ({navigation}) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={{
                uri:INSTAGRAM_LOGO,height:100,width:100,
            }}/>
        </View>
        <LoginForm navigation={navigation}/>
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
export default LoginScreen