import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";

import placeImage from './assets/logo.jpg';

export default class App extends Component {
  state = {
    places: []
  };
  placeDeleteHandler = key => {
    this.setState(prevState =>{
      return {
          places: prevState.places.filter(place=>{
            console.log(place);
            return place.key !==key;
          })
      };
    })
  };



  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({key:Math.random(),
          value:placeName,image:placeImage})


      };
    });
  };

  render() {
    
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} 
        onItemDeleted  = {this.placeDeleteHandler}/> 
      </View>
    );  

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
