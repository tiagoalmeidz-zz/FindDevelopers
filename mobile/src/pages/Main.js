import {
  getCurrentPositionAsync,
  requestPermissionsAsync
} from "expo-location";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";

export default function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04, // Zoom do mapa
          longitudeDelta: 0.04 // Zoom do mapa
        });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{ latitude: -22.8276789, longitude: -47.0759815 }}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://avatars1.githubusercontent.com/u/6900314?s=460&v=4"
          }}
        />

        <Callout
          onPress={() => {
            navigation.navigate("Profile", {
              github_username: "tiagoalmeida93"
            });
          }}
        >
          <View style={styles.callout}>
            <Text style={styles.devName}>Tiago Almeida</Text>
            <Text style={styles.devBio}>
              Pós graduado em Engenharia de Software....
            </Text>
            <Text style={styles.devTechs}>ReactJS, NodeJS, React Native</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: 4
  },

  callout: {
    width: 260
  },

  devName: {
    fontWeight: "bold",
    fontSize: 16
  },

  devBio: {
    color: "#666",
    marginTop: 5
  },

  devTechs: {
    marginTop: 5
  }
});
