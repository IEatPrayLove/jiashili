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
import Tabs, { navgater } from "@/components/tabs";
import Newsnotice from "@/components/newsnotice";
import Contactus from "@/components/contactus";
export default {
  components: {
    Title,
    Tabs,
    Newsnotice,
    Contactus
  },
  computed: {
    navgaters() {
      return [
        navgater(
          { to: { name: "aboutus" }, exact: true },
          "公司简介",
          "aboutus"
        ),
        navgater({ to: { name: "development" } }, "发展历程", "development"),
        navgater({ to: { name: "certificate" } }, "荣誉证书", "certificate"),
        navgater({ to: { name: "structure" } }, "组织架构", "structure"),
        navgater({ to: { name: "cooperation" } }, "合作机构", "cooperation"),
        navgater({ to: { name: "contactus" } }, "联系我们", "contactus"),
        navgater({ to: { name: "solicitation" } }, "拍品征集", "solicitation")
      ];
    }
  },
  data() {
    return {
      txt: "关于我们",
      imgSrc: require("../../assets/notice_chui.png"),
      parentPath: "关于我们",
      now: "公司简历"
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