/* 最新拍品 */
<template>
  <div class="content_box_all">
    <div class="content">
      <div class="paipin" @click="changepaipin">
        <div :class="paipin_show?'tixing_se':'tixing'"></div>
        <div class="title">
          <div class="img_box">
            <img src="../../assets/notice_chui.png" alt />
          </div>
          <div class="name">最新拍品</div>
        </div>
      </div>
      <div class="notice" @click="changenotice">
        <div :class="notice_show?'tixing_se1':'tixing1'"></div>
        <div class="title">
          <div class="img_box">
            <img src="../../assets/notice_chui.png" alt />
          </div>
          <div class="name">拍卖预告</div>
        </div>
      </div>
    </div>
    <div class="paipin_content" v-if="paipin_show">
      <Cards :cards="cards" v-for="(item,i) in 10" :key="i" />
    </div>
    <div class="paipin_content" v-if="notice_show">
      <Cards :cards="notice" v-for="(item,i) in 10" :key="i" />
    </div>
    <div class="more">
      <router-link class="more_item" :to="{name:'auction'}">查看更多 >></router-link>
    </div>
  </div>
</template>
<script>
import Cards from "@/components/collectionscards";
export default {
  components: {
    Cards
  },
  data() {
    return {
      cards: {
        txt: "绵阳市涪城区文竹街16号文竹大厦1栋1层1号",
        name: "XXX藏品",
        time: "开始时间：2019.08.06",
        yuyue: "即将开拍",
        state: "yuyue"
      },
      notice: {
        txt: "绵阳市涪城区文竹街16号文竹大厦1栋1层1号",
        name: "XXX藏品",
        time: "开始时间：2019.08.06",
        yuyue: "拍卖结束",
        state: "jieshu"
      },
      paipin_show: true,
      notice_show: false
    };
  },
  methods: {
    changepaipin() {
      this.paipin_show = !this.paipin_show;
      this.notice_show = !this.notice_show;
    },
    changenotice() {
      this.paipin_show = !this.paipin_show;
      this.notice_show = !this.notice_show;
    }
  }
};
</script>
<style lang="scss" scoped>
.content_box_all {
  width: 100%;
  background: url("../../assets/noticebg.png");
  padding-bottom: 3.9375rem;
  .more {
    width: 1200px;
    text-align: right;
    margin: auto;
    margin-top: 2.0625rem;
    font-size: 0.875rem;
    font-family: Source Han Sans CN;
    font-weight: 400;
    opacity: 1;
    .more_item {
      color: #c60404;
    }
  }
  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .paipin {
      width: 50%;
      position: relative;
      .tixing {
        // width: 100%;
        border-top: 3.75rem solid #c60404;
        border-right: 2.3125rem solid transparent;
      }
      .tixing_se {
        // width: 100%;
        border-top: 3.75rem solid #e17f7f;
        border-right: 2.3125rem solid transparent;
      }
      .title {
        position: absolute;
        display: flex;
        top: 0;
        left: 60%;
        justify-content: stretch;
        align-items: center;
        color: #fff;
        font-size: 1.5rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 3.75rem;
        color: rgba(255, 255, 255, 1);
        opacity: 1;
        .name {
          margin-left: 1.0625rem;
        }
      }
    }
    .notice {
      width: 50%;
      position: relative;
      .tixing1 {
        // width: 100%;
        border-bottom: 3.75rem solid #c60404;
        border-left: 2.3125rem solid transparent;
      }
      .tixing_se1 {
        // width: 100%;
        border-bottom: 3.75rem solid #e17f7f;
        border-left: 2.3125rem solid transparent;
      }
      .title {
        position: absolute;
        display: flex;
        top: 0;
        line-height: 3.75rem;
        left: 25%;
        justify-content: stretch;
        align-items: center;
        color: #fff;
        font-size: 1.5rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        opacity: 1;
        .name {
          margin-left: 1.0625rem;
        }
      }
    }
  }
  .paipin_content {
    width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>