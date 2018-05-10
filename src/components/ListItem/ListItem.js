import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity, Image} from 'react-native';


const listItem = (props) =>(
    
    
    <TouchableOpacity  onPress = { props.onItemPressed}>    
    <View style={styles.listItem } keyExtractor={item => item.index_id.toString()} >
    
     <Image resizeMode="contain" source={props.placeImage}  style = {styles.placeImage}/>
    <Text key={props.i}>{props.placeName }  </Text>    
        
    </View>
    </TouchableOpacity>
    
);
const styles = StyleSheet.create({
    listItem:{
        width:"100%",
        padding:10,
        backgroundColor:"#eee",
        marginTop:5,        
        flexDirection:"row",
        alignItems: "center",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#d6d7da',

        
                
                
                
    
                
                
                
                
                
                
                
                
                
                
                
                


    },
    placeImage:{
        marginRight:  8,
        height: 30,
        width:30
        
    }
    
})
export default listItem