import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
export default class AppHeader extends React.Component {
  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: "100 What's Your Emergency",
            style: { color: '#7de5f5', fontWeight: 'bold', fontSize: 16 },
          }}
          backgroundColor={'#ff1225'}
        />
      </View>
    );
  }
}
