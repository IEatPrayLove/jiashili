/* 藏品展示卡片 */
<template>
  <div class="content_box" @click="godetails" @mouseover="zouni" @mouseout="chuqu" v-bind="$props">
    <div class="img_box">
      <img src="../assets/auction/cards.png" alt />
      <p class="deng">{{txt}}</p>
    </div>
    <div class="intro">
      <div class="name">{{cards.name}}</div>
      <div class="time">{{cards.time}}</div>
      <div :class="cards.state">{{cards.yuyue}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cards: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      txt: this.cards.txt,
      time: null
    };
  },
  methods: {
    zouni() {
      if (this.time != null) return;
      this.time = setInterval(() => {
        var start = this.txt.substring(0, 1);
        var end = this.txt.substring(1);
        this.txt = end + start;
      }, 300);
    },
    chuqu() {
      clearInterval(this.time);
      this.time = null;
      this.txt = "绵阳市涪城区文竹街16号文竹大厦1栋1层1号";
    },

    godetails() {
      // this.$router.push({ name: "/noticedetails" });
      this.$router.push({ name: "noticedetails" });
    }
  }
};
</script>
<style lang="scss" scoped>
.content_box {
  margin-top: 1.875rem;
  width: 13.125rem;
  height: auto;
  background: rgba(216, 216, 216, 1);
  opacity: 1;
  .img_box {
    width: 100%;
    height: 12.1875rem;
    overflow: hidden;
    position: relative;
    &:hover {
      //   p {
      // color: #c60404;
      //   }
      img {
        transition: all 0.5s;
        transform: scale(1.2);
      }
    }
    .deng {
      width: 200%;
      font-size: 0.625rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 17px;
      color: rgba(242, 242, 242, 1);
      opacity: 1;
      position: absolute;
      left: 0;
      bottom: 0.375rem;
      overflow: hidden;
      word-wrap: none;
    }
  }
  .intro {
    width: 100%;
    font-size: 0.75rems;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(242, 242, 242, 1);
    opacity: 1;
    background-color: #3a3a3a;
    position: relative;
    .name {
      width: 90%;
      margin: auto;
      padding: 0.1875rem 0 0.1875rem 0;
    }
    .time {
      width: 90%;
      margin: auto;
      padding: 0.625rem 0;
    }
    .yuyue {
      width: 3.625rem;
      height: 1.125rem;
      background: rgba(198, 4, 4, 1);
      opacity: 1;
      border-radius: 9px 0px 0px 9px;
      position: absolute;
      font-size: 0.625rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      text-align: center;
      color: rgba(242, 242, 242, 1);
      opacity: 1;
      top: 0.875rem;
      right: -0.1875rem;
    }
    .jieshu {
      width: 3.625rem;
      height: 1.125rem;
      background: #818181;
      opacity: 1;
      border-radius: 9px 0px 0px 9px;
      position: absolute;
      font-size: 0.625rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      text-align: center;
      color: rgba(242, 242, 242, 1);
      opacity: 1;
      top: 0.875rem;
      right: -0.1875rem;
    }
  }
}
</style>