import React from "react";
import {View, Text} from 'react-native'
import { UseGetAllAnime } from "../getAllAnimeQuery";

const HomeScreen = () => {
    const {data, isLoading} = UseGetAllAnime();
    
    return (
    <View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : data ? (
        data.data.map((Anime, key) => {
          return ( 
            <View>
              <Text>{Anime.title}</Text>
            </View>
          );
        })
      ): (
        <Text>Whoops No Data Available</Text>
      )}
      {/* <Text>Main Screen</Text> */}
    </View>
    );
};

export default HomeScreen;