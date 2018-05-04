import React from 'react';
import {View,Text,StyleSheet,TouchableWithoutFeedback} from 'react-native';


const listItem = (props) =>(
    <TouchableWithoutFeedback  onPress = { props.onItemPressed}>    
    <View style={styles.listItem } > 
    <Text key={props.i}>{props.placeName}</Text>    
    </View>
    </TouchableWithoutFeedback>
    
);
const styles = StyleSheet.create({
    listItem:{
        width:"100%",
        padding:10,
        backgroundColor:"#eee",
        margin:5

    }
    
})
export default listItem