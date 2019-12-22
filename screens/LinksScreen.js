import React from 'react';
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  WebView,
  Linking
} from 'react-native';
import { render } from 'react-dom';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* External links to Linkedin, Github, maybe phone/email */}
      <Button
        title="Github"
        onPress={() => Alert.alert('Simple Github Button pressed')}
      />

      <Button
        color="red"
        title="Linkedin"
        onPress={() => Alert.alert('Simple Linkedin Button pressed')}
      />

      <View style={{flexDirection: 'row', paddingTop: 50}}>
          <View style={{flex:1 , marginRight:10}} >
              <Button title="Cancel" color="red" onPress={() => {}}></Button>
          </View>
          <View style={{flex:1}} >
              <Button title="Save" color="green" onPress={() => {}}></Button>
          </View>
      </View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  buttons: {
    backgroundColor: "#800000"
  }
});
