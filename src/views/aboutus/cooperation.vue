/* 合作机构 */
<template>
  <div class="content_box">
    <Top :title="title" />
    <div class="company_img">
      <div class="company_content" v-for="(iten,i) in 12" :key="i">
        <div class="img_box">
          <!-- <img src="" alt=""> -->
          公司logo
        </div>
        <p class="company_name">公司名称</p>
      </div>
      <div class="block">
        <el-pagination layout="prev, pager, next" :total="24" :page-size="12"></el-pagination>
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
        name: "COOPERATIVE INSTITUTION",
        desc: "合作机构"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.content_box {
  background-color: #fff;
  .company_img {
    display: flex;
    justify-content: space-between;
    width: 86.2585%;
    margin: auto;
    flex-wrap: wrap;
    .company_content {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.0625rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      margin-top: 2.1875rem;

      .img_box {
        color: rgba(129, 129, 129, 1);
        width: 12rem;
        height: 6.3125rem;
        background-color: #d8d8d8;
        text-align: center;
        line-height: 6.3125rem;
      }
      .company_name {
        margin-top: 1.0625rem;
        padding-bottom: 0.3125rem;
      }
    }
    .block{
        margin-top: 3.125rem;
        margin-left: 80%;
    }
  }
}
</style>