import React, { useContext } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { categories } from "../APIS/apis";
import { NewsContext } from "../APIS/Context";

const DiscoverPage = () => {
  const windowWidth = Dimensions.get("window").width;
  const SLIDE_WIDTH = Math.round(windowWidth / 2);

  const { setCategory, darkTheme } = useContext(NewsContext);

  return (
    <View style={styles.discover}>
      <Text
        style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }}
      >
        Categories
      </Text>
      <Carousel
        layout={"default"}
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => setCategory(item.name)}
              style={styles.category}
            >
              <Text
                style={{ ...styles.name, color: "white" }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />
    </View>
  );
};

export default DiscoverPage;

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 5,
    alignSelf: "flex-start",
    borderRadius: 10,
  },
  category: {
    borderWidth: 2,
    backgroundColor: "#007FFF",
    borderRadius: 10,
    height: 75,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  name: {
    fontSize: 20,
    textTransform: "capitalize",
  },
});
