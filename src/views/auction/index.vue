/* 拍卖 */
<template>
  <div class="box">
    <Title :txt="txt" :imgSrc="imgSrc" :parentPath="parentPath" :now="now" />
    <div class="w">
      <el-container class="content_box">
        <el-aside class="aside" style="width:16.6667%;">
          <Tabs :navgaters="navgaters" />
          <Newsnotice />
          <Contactus />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
  </div>
</template>
<script>
import Title from "@/components/title";
import Newsnotice from "@/components/newsnotice";
import Contactus from "@/components/contactus";
import Tabs, { navgater } from "@/components/tabs";
export default {
  components: {
    Title,
    Newsnotice,
    Contactus,
    Tabs
  },
  computed: {
    navgaters() {
      return [
        navgater({ to: { name: "auction" }, exact: true }, "拍卖预告", "auction"),
        navgater({ to: { name: "result" } }, "拍卖结果", "result"),
      ];
    }
  },
  data() {
    return {
      txt: "拍卖",
      imgSrc: require("../../assets/notice_chui.png"),
      parentPath: "拍卖",
      now: "拍卖预告"
    };
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  background: url("../../assets/noticebg.png");
  .w {
    width: 1200px;
    margin: auto;
    .content_box {
      width: 100%;
      .el-main {
        padding-top: 0;
        padding-right: 0;
      }
      .aside {
        width: 16.6667%;
        height: 62.5rem;
      }
    }
  }
}
</style>