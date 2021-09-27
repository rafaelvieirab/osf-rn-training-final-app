import React from 'react';
import { StyleSheet, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './src/router/Router';
import { colors } from './src/style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bodyBackgroundColor,
  },
});

const queryClient = new QueryClient();


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Router />
      </View>
    </QueryClientProvider>
  );
};

export default App;
