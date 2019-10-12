/* 荣誉证书 */
<template>
  <div class="content-box">
    <div class="top_title">
      <Top :title="title" />
    </div>
    <div class="first-floor">
      <p>省级“守合同重信用企业”荣誉称号</p>
      <div class="sanjiao"></div>
      <div class="show">
        <div class="showImg_box" v-for="(item,i) in 6" :key="i">
          <img src="../../assets/contactus/honr.png" alt />
        </div>
      </div>
    </div>
    <!-- 证件 -->
    <div class="second-floor">
      <div class="zhengjian" v-for="(item,i) in 6" :key="i">
        <p class="zhengshu_name">营业执照副本（三证合一）</p>
        <div class="zhengshuImg_box">
          <img src="../../assets/contactus/zhengshu.png" alt />
        </div>
      </div>
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
        name: "QUALIFICATION HONOR",
        desc: "荣誉资质"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.content-box {
  background-color: #fff;
  .top_title {
    width: 86.5285%;
    margin: auto;
  }
  .first-floor {
    width: 86.5285%;
    margin: auto;
    margin-top: 4.9375rem;
    p {
      text-align: center;
      font-size: 0.875rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: rgba(58, 58, 58, 1);
      letter-spacing: 0.125rem;
      opacity: 1;
    }
    .sanjiao {
      height: 0;
      width: 0;
      margin: auto;
      margin-top: 1rem;
      border: transparent;
      border: 0.75rem solid transparent;
      border-top-color: #c60404;
    }
    .show {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      width: 100%;
      padding-bottom: 3.625rem;
      border-bottom: 1px dashed #d8d8d8;
      .showImg_box {
        margin-top: 1rem;
        width: 6.875rem;
        height: 9.375rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .second-floor {
    margin-top: 0.25rem;
    width: 86.5285%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 4.375rem;
    .zhengjian {
      width: auto;
      height: auto;
      margin-top: 2.0625rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .zhengshuImg_box{
          margin-top: 1rem;
      }
    }
  }
}
</style>