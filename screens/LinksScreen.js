import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* External links to Linkedin, Github, maybe phone/email */}
      <Button
          title="Github"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
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
});
