import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {firebase} from '../../firebase'

const handleSignout=async () =>{
    try{
        firebase.auth().signOut()
        console.log('Signed out')
    }catch(error){
        console.log(error)
    }
}
const Header= ({navigation})=>(
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignout}>
      <Image style={styles.logo} source={{uri:'https://e7.pngegg.com/pngimages/783/216/png-clipart-little-black-dress-little-black-dress-logo-product-intagram-text-logo.png'}}/>
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={()=>navigation.push('NewPostScreen')}>
            <Image style={styles.icon} source={{
                uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'
            }}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image style={styles.icon} source={{
                uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like.png',
            }}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.unreadBadge}>
                <Text style={styles.unreadBadgeText}>11</Text>
            </View>
            <Image style={styles.icon} source={{
                uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'
            }}/>
        </TouchableOpacity>
      </View>
    </View>
)

const styles=StyleSheet.create({
    container:{
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginHorizontal:20,
        marginTop:20,
    },
    iconsContainer:{
        flexDirection:'row',
    },
    logo:{
        width:100,
        height:50,
        resizeMode:'contain',
    },
    icon:{
        width:30,
        height:30,
        marginLeft:10,
        resizeMode:'contain',
    },
    unreadBadge:{
        backgroundColor:'#FF3250',
        position:'absolute',
        left:20,
        bottom:18,
        width:25,
        height:18,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        zIndex:100,
    },
    unreadBadgeText:{
        color:'white',
        fontWeight:'600',
    },
})

export default Header;