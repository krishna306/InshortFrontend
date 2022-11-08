import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-native-snap-carousel";
import { NewsContext } from "../APIS/Context";
import SingleNews from "../Components/SingleNews";
const NewsPage = () => {
  const [activeIndex, setActiveIndex] = useState();

  const windowHeight = Dimensions.get("window").height;

  const { news: articles } = useContext(NewsContext);
  return (
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          firstItem={articles.slice(0, 20).length - 1}
          layout={"stack"}
          data={articles.slice(0, 20)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({ item, index }) => (
            <SingleNews item={item} index={index} />
          )}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
    </View>
  );
};
export default NewsPage;
const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    transform: [{ scaleY: -1 }],
    backgroundColor: "black",
  },
});
