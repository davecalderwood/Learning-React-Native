import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}>
          <Image 
            source={require('../assets/images/linkedin.png')} 
            style={styles.homeImage} />
          
          <View>
            <Text style={styles.header}>Work Experience</Text>
            <Text style={styles.job}>Yona-Brixtel</Text>
            <Text style={styles.jobDesc}>I am currently a developer at Yona-Brixtel in Virginia. Here I have learned Angular 7 and I am working on front end as well as API integration for our CEA project for the FAA. UI and API work. We are currently building this website from scratch</Text>
          </View>

          <View>
            <Text style={styles.job}>Helio Training</Text>
            <Text  style={styles.jobDesc}>Larry H Miller Sports Entertainment Group – They wanted a mobile application for the Utah Stars, similar to the one that is already existing for the Utah Jazz. We built this app from scratch using React-Native.</Text>
          </View>

      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeImage: {
    height: 175,
    width: 175,
    borderRadius: 25,
    marginTop: 35
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6FCFF'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center',
    paddingTop: 30
  },
  job: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center",
    paddingTop: 15
  },
  jobDesc: {
    fontSize: 14
  }
});
