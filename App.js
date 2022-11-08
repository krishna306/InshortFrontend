import * as React from 'react';
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Tabs from "./Components/Tabs";
import Context, { NewsContext } from "./APIS/Context";

function App() {
  const {darkTheme} = React.useContext(NewsContext)
  return (
    <View style={{...styles.container,backgroundColor:darkTheme?"#282C35":"white"}}>
      <Tabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
