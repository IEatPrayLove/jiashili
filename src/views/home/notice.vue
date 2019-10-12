/* 最新公告 */
<template>
  <div class="notice">
    <div class="line"></div>
    <div class="content">
      <div class="new_notice">
        <div class="notice_img">
          <img class="notice_img_content" src="@/assets/notice_chui.png" alt />
        </div>
        <span>最新公告</span>
      </div>
      <div class="news">
        <span class="news_hot">NEW</span>
        <p class="desc">【拍卖公告】乐至县国有建设用地使用权拍卖出...</p>
      </div>
      <div class="news">
        <span class="news_hot">NEW</span>
        <p class="desc">【拍卖公告】乐至县国有建设用地使用权拍卖出...</p>
      </div>
    </div>
    <div class="detial_content">
      <div class="notice_box" v-for="(item,i) in 15" :key="i">
        <div class="sanjiao"></div>
        <p @click="gonotice" class="detial_txt">【拍卖预告】乐山市五通桥区乐山港西坝码头的水上加油船</p>
      </div>
      <div class="more">全部公告 >></div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    gonotice() {
      this.$router.push({ name: "noticedetails" });
    }
  }
};
</script>
<style lang="scss" scoped>
.notice {
  // background: url("../../assets/newnotice.png") 0 0 no-repeat;
  // background-position: 0 0;
  // background-size:29.0625% 60px ;
  width: 100%;
  position: relative;
  .line {
    height: 1px;
    background-color: #c60404;
    width: 100%;
    position: absolute;
    top: 3.75rem;
    left: 0;
  }
  .content {
    width: 1200px;
    margin: auto;
    background: url("../../assets/newnotice.png") -360px 0 no-repeat;
    background-size: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 3.75rem;
    .new_notice {
      display: flex;
      .notice_img {
        width: 1.875rem;
        height: 1.875rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      span {
        font-size: 1.4375rem;
        font-family: FZZhengHeiS-DB-GB;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        opacity: 1;
        margin-left: 0.6875rem;
      }
    }
    .news {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .news_hot {
        font-size: 0.875rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #000;
        background: #c60404;
        display: inline-block;
        width: 3.0625rem;
        height: 1.6875rem;
        text-align: center;
        line-height: 1.6875rem;
        color: #fff;
      }
      .desc {
        margin-left: 0.4375rem;
        cursor: pointer;
      }
    }
  }
  .detial_content {
    width: 1175px;
    margin: auto;
    padding-left: 1.5625rem;
    display: flex;
    flex-wrap: wrap;
    padding-top: 1rem;
    position: relative;
    padding-bottom: 4.25rem;
    .more {
      position: absolute;
      bottom: 4.25rem;
      right: 0;
      font-size: 1.125rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(198, 4, 4, 1);
      opacity: 1;
    }
    .notice_box {
      width: 50%;
      display: flex;
      align-items: center;
      line-height: 2.5rem;
      cursor: pointer;
      .detial_txt {
        font-size: 0.875rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(129, 129, 129, 1);
        opacity: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .sanjiao {
        width: 0;
        height: 0;
        border: transparent;
        border-right: 0.5625rem solid transparent;
        border-top: 0.34375rem solid transparent;
        border-bottom: 0.34375rem solid transparent;
        border-left: 0.5625rem solid #818181;
      }
    }
  }
}
</style>