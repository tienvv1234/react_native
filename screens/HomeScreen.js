import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>

      <Button
        title="Go to Box Demo"
        onPress={() => {
          navigation.navigate('Box');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
