/* 拍卖预告 */
<template>
  <div class="content_box">
    <Top :title="title" />
    <div class="cards">
      <Cards v-for="(item,i) in 8" :key="i" :cards="cards" />
    </div>
  </div>
</template>
<script>
import Top from "@/components/line";
import Cards from "../../components/collectionscards";
export default {
  components: {
    Top,
    Cards
  },
  data() {
    return {
      title: {
        name: "AUCTION NOTICE",
        desc: "拍卖预告"
      },
      cards: {
        txt: "绵阳市涪城区文竹街16号文竹大厦1栋1层1号",
        name: "XXX藏品",
        time: "开始时间：2019.08.06",
        yuyue: "即将开拍",
        state: "yuyue"
      }
    };
  },
};
</script>
<style lang="scss" scoped>
.content_box {
  background-color: #fff;
  .cards {
    width: 96%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>