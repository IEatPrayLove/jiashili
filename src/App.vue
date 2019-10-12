<template>
  <div id="app">
    <Top />
    <Header />
    <Nav :items="navs" />
    <Swiper :banner="banner" />
    <router-view />
    <Footer :items="navs" />
  </div>
</template>

<script>
import Top from "@/components/top";
import Header from "@/components/header";
import Nav, { nav } from "@/components/nav";
import Swiper from "@/components/swiper";
import Footer, { footer } from "@/components/footer";
export default {
  components: {
    Top,
    Header,
    Nav,
    Swiper,
    Footer
  },
  computed: {
    navs() {
      return [
        nav({ to: { name: "home" }, exact: true }, "嘉士利首页", "HOME"),
        nav({ to: { name: "bulletin" } }, "拍卖公告", "BULLETIN"),
        nav({ to: { name: "auction" } }, "拍卖", "AUCTION"),
        nav({ to: { name: "auctioncenter" } }, "拍卖中心", "AUCTION"),
        nav({ to: { name: "news" } }, "新闻中心", "NEWS"),
        nav({ to: { name: "aboutus" } }, "关于我们", "ABOUTUS"),
        nav({ to: { name: "guide" } }, "拍卖指南", "GUIDE")
      ];
    },
    footers() {
      return [
        footer({ to: { name: "home" }, exact: true }, "嘉士利首页", "HOME"),
        footer({ to: { name: "bulletin" } }, "拍卖公告", "BULLETIN"),
        footer({ to: { name: "auction" } }, "拍卖", "AUCTION"),
        footer({ to: { name: "auctioncenter" } }, "拍卖中心", "AUCTION"),
        footer({ to: { name: "news" } }, "新闻中心", "NEWS"),
        footer({ to: { name: "aboutus" } }, "关于我们", "ABOUTUS"),
        footer({ to: { name: "guide" } }, "拍卖指南", "GUIDE")
      ];
    }
  },
  data() {
    return {
      banner: [
        { path: require("./assets/swiper/swiper.png") },
        { path: require("./assets/swiper/swiper.png") },
        { path: require("./assets/swiper/swiper.png") },
        { path: require("./assets/swiper/swiper.png") }
      ]
    };
  },
  mounted() {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
img {
  vertical-align: middle;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
input {
  border: none;
}
input:focus {
  border: none;
}
input:focus {
  outline: none;
}
/* @media screen and (min-width: 1366px) {
  html,
  body {
    font-size: 14px;
  }
}
@media screen and (min-width: 1920px) {
  html,
  body {
    font-size: 16px;
  }
} */
@media screen and (min-width: 1200px) {
  html.body{
    font-size: 10px;
  }
}
</style>
