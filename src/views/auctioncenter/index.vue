/* 拍卖中心 */
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
    <div class="add">
      <div>
        <p class="symbol">+</p>
        <p class="ch">拍品征集</p>
        <p class="en">LOT COLLECTION</p>
      </div>
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
        navgater(
          { to: { name: "auctioncenter" }, exact: true },
          "藏品展示",
          "auctioncenter"
        ),
        navgater({ to: { name: "assets" } }, "优秀资产展示", "assets"),
        navgater({ to: { name: "right" } }, "优秀权利展示", "right")
      ];
    }
  },
  data() {
    return {
      txt: "拍卖中心",
      imgSrc: require("../../assets/notice_chui.png"),
      parentPath: "拍卖中心",
      now: "藏品展示"
    };
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  background: url("../../assets/noticebg.png");
  position: relative;
  .add {
    width: 124px;
    height: 124px;
    background-color: #c60404;
    border-radius: 50%;
    position: absolute;
    top: 789px;
    right: 8.75rem;
    color: #fff;
    text-align: center;
    .symbol {
      font-size: 50px;
      height: 25px;
    }
    .ch {
      margin-top: 35px;
      font-size: 13px;
      font-family: Source Han Sans CN;
      font-weight: 500;
    }
    .en {
      font-size: 9px;
      font-family: Source Han Sans CN;
      font-weight: 300;
      line-height: 16px;
    }
  }
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