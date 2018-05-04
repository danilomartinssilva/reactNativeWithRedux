import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';

class PlaceList extends Component{
    const placesOutput = props.places.map((place,i)=>(
        <ListItem key={i} 
        placeName={place}
        onItemPressed={()=>alert("Item pressed -ID: "+ i)}
        />
      ));
      return (
        
          <View style = { styles.listContainer}> 
            {placesOutput}       
        </View>



}


const styles = StyleSheet.create({
   
    
    listContainer:{
      width:"100%"
  }
  });