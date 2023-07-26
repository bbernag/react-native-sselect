import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Select, SelectProvider } from 'react-native-sselect';

const OPTIONS = [{ name: 'Option 1', value: 'option_1' }];

export default function App() {
  return (
    <View style={styles.container}>
      <SelectProvider>
        <Text>Result:</Text>
        <Select
          selectedOptionContainerStyle={{ backgroundColor: 'red' }}
          name="sample"
          placeholder="Select an option"
          onChange={(option) => console.log('option', option)}
          options={OPTIONS}
        />
      </SelectProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
