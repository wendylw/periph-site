import React from "react";
import { View } from "@tarojs/components";
import Header from "@common/components/Header";
import Footer from "@common/components/Footer";

function Home() {
  const navigators = [
    {
      key: "header-home",
      label: "首页",
      url: "/containers/home/index",
    },
    {
      key: "header-products",
      label: "产品中心",
      url: "/containers/products/index",
    },
    {
      key: "header-contact",
      label: "联系我们",
      url: "/containers/contact/index",
    },
  ];

  return (
    <View>
      <Header navigators={navigators} />
      <Footer />
    </View>
  );
}

export default Home;
