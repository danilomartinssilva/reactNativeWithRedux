import React from 'react';
import { View, StyleSheet , ScrollView, FlatList} from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
    
     
    
    return (
        <FlatList
        data = {props.places}
        renderItem={(info)=>(
            <ListItem 
            placeName={info.item.value}
            /*onItemPressed = { () => alert("Item pressed -ID: " + i)}*/
            onItemPressed = { () => props.onItemDeleted(info.item.key)} 
            placeImage = {info.item.image}      

            />         
        )}
        style={styles.listContainer}>
        </FlatList>
    );
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default placeList;
