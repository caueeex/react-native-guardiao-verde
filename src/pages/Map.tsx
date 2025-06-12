import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'leaflet/dist/leaflet.css'; // Moved Leaflet CSS import to the top

let MapView, Marker, PROVIDER_GOOGLE, TileLayer, L;

if (Platform.OS !== 'web') {
  MapView = require('react-native-maps').default;
  Marker = require('react-native-maps').Marker;
  PROVIDER_GOOGLE = require('react-native-maps').PROVIDER_GOOGLE;
} else {
  // Import Leaflet components for web
  const ReactLeaflet = require('react-leaflet');
  MapView = ReactLeaflet.MapContainer;
  Marker = ReactLeaflet.Marker;
  TileLayer = ReactLeaflet.TileLayer;
  L = require('leaflet');

  // Default icon for Leaflet markers to fix missing icon issue
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  });
}

const Map = () => {
  const initialRegion = {
    latitude: -23.550520,
    longitude: -46.633308,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const deforestationAreas = [
    {
      id: 1,
      title: 'Área de Desmatamento 1',
      description: 'Região da Amazônia',
      coordinate: {
        latitude: -3.1190,
        longitude: -60.0217,
      },
    },
    {
      id: 2,
      title: 'Área de Desmatamento 2',
      description: 'Região do Cerrado',
      coordinate: {
        latitude: -15.7801,
        longitude: -47.9292,
      },
    },
  ];

  if (Platform.OS === 'web') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Mapa do Desmatamento</Text>
          <Text style={styles.subtitle}>Visualize áreas afetadas</Text>
        </View>
        <View style={styles.mapContainerWeb}>
          <MapView center={[initialRegion.latitude, initialRegion.longitude]} zoom={10} scrollWheelZoom={true} style={styles.mapWeb}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {deforestationAreas.map((area) => (
              <Marker
                key={area.id}
                position={[area.coordinate.latitude, area.coordinate.longitude]}
              >
                <Text>{area.title}</Text>
              </Marker>
            ))}
          </MapView>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mapa do Desmatamento</Text>
        <Text style={styles.subtitle}>Visualize áreas afetadas</Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={initialRegion}
        >
          {deforestationAreas.map((area) => (
            <Marker
              key={area.id}
              coordinate={area.coordinate}
              title={area.title}
              description={area.description}
            />
          ))}
        </MapView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#2E7D32',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
  },
  mapContainer: {
    flex: 1,
    margin: 20,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  mapContainerWeb: {
    flex: 1,
    margin: 20,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mapWeb: {
    flex: 1,
    height: 300, // Adjust height as needed
    width: '100%',
  },
  webContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  webMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  webSubMessage: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});

export default Map; 