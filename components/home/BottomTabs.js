import { View, Text, TouchableOpacity,Image,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { Divider } from 'react-native-elements'

export const bottomTabIcons=[
    {
        name:'Home',
        active:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like.png',
        inactive:'https://img.icons8.com/fluency-systems-regular/60/ffffff/home.png',
    },
    {
        name:'Search',
        active:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like.png',
        inactive:'https://img.icons8.com/fluency-systems-regular/60/ffffff/search.png',
    },
    {
        name:'Reels',
        active:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like.png',
        inactive:'https://img.icons8.com/fluency-systems-regular/60/ffffff/movie.png',
    },
    {
        name:'Shop',
        active:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like.png',
        inactive:'https://img.icons8.com/fluency-systems-regular/60/ffffff/buy.png',
    },
    {
        name:'Profile',
        active:'https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw',
        inactive:'https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw',
    },
    
]

export default function BottomTabs({icons}) {
    const [activeTab,setActiveTab]=useState('Home');
    const Icon=({icon})=>( 
        <TouchableOpacity onPress={()=>setActiveTab(icon.name)}>
            <Image source={{uri:activeTab === icon.name?icon.active:icon.inactive}} style={[styles.icon,icon.name==='Profile'?styles.profilePic():null,
            activeTab==='Profile' && icon.name===activeTab?styles.profilePic(activeTab):null]}/>
        </TouchableOpacity>
    )
  return (
    <View style={styles.wrapper}>
        <Divider width={1} orientation='vertical'/>
        <View style={styles.container}>
            {icons.map((icon,index)=>(
            <Icon key={index} icon={icon}/>
            ))}
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    wrapper:{
        position:'absolute',
        width:'100%',
        bottom:'0%',
        zIndex:999,
        backgroundColor:'#000',
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        height:50,
        paddingTop:10,
    },
    icon:{
        width:30,
        height:30,
    },
    profilePic:(activeTab='')=>({
        borderRadius:50,
        borderWidth:activeTab==='Profile'?2:0,
        borderColor:'#fff',
    }),
})