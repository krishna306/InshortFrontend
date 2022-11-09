import React, { useContext, useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { NewsContext } from "../APIS/Context";
import DiscoverPage from "../Pages/DiscoverPage";
import NewsPage from "../Pages/NewsPage";
import TopNavigation from "./TopNavigation";

export default function Tabs() {
  const layout = useWindowDimensions();
  const { index, setIndex } = useContext(NewsContext);
  const [routes] = useState([
    { key: "first", title: "Discover" },
    { key: "second", title: "News" },
  ]);

  const renderScene = SceneMap({
    first: DiscoverPage,
    second: NewsPage,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
}
