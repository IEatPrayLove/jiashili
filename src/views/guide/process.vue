/* 拍卖流程 */
<template>
  <div class="content_box">
    <Top :title="title" />
    <div class="img_box">
      <img src="../../assets/auction/details/paimailiucheng.png" alt="">
    </div>
  </div>
</template>
<script>
import Top from "@/components/line";
export default {
  components: {
    Top
  },
  data() {
    return {
      title: {
        name: "AUCTION PROCESS",
        desc: "拍卖流程"
      },
    };
  }
};
</script>
<style lang="scss" scoped>
.content_box {
  background-color: #fff;
  height: 1300px;
  .img_box {
    width: 86.2565%;
    margin: auto;
    margin-top: 2.875rem;
  }
}
</style>