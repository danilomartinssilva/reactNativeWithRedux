import React,{Component} from 'react';
import {View,TextInput,Button,StyleSheet} from 'react-native';


class PlaceInput extends Component {  
    
    
    state={
      placeName:'',   

    }  
    placeNameChangeHandler = (val) =>{
        this.setState({
           placeName:val
         })
   
     }
     placeSubmitHandler=()=>{
        if(this.state.placeName.trim()===""){
           return;
         }
         this.props.onPlaceAdded(this.state.placeName);
     }
    render(){
        return (
            <View style={styles.inputContainer}>
            <TextInput           
              value = {this.state.placeName}           
              placeholder="Name:"        
              onChangeText={this.placeNameChangeHandler} 
              style= {styles.placeInput}
              />   
              <Button title="Add"
               style={styles.placeButton} 
               onPress={this.placeSubmitHandler}/> 
            </View>
        )
    }

}
const styles =  StyleSheet.create({
    inputContainer:{
        // flex:1,
         width:"100%",
         flexDirection:"row",
         justifyContent:"space-between",
         alignItems:"center",
         
       },
       placeInput:{
         width:"70%",
         height:40,    
         paddingLeft:2
       },
       placeButton:{
         width:"30%"
       },
})

export default PlaceInput;
