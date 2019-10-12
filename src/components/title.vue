<template>
  <div class="new_notice">
    <div class="w">
      <div class="left">
        <div class="notice_img">
          <img class="notice_img_content" :src="imgSrc" alt />
        </div>
        <span>{{txt}}</span>
      </div>
      <!-- <div class="breadcrumb">首页>>关于我们>>公司简介</div> -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{parentPath}}</el-breadcrumb-item>
        <el-breadcrumb-item class="now">{{now}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    txt: {
      type: String,
      default: ""
    },
    imgSrc: {
      type: String,
      default: "",
      required: true
    },
    parentPath: {
      type: String,
      default: ""
    },
    now: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.new_notice {
  background: url("../assets/newnotice.png") no-repeat;
  padding: 0.9375rem 0;
  border-bottom: 1px solid #c60404;
  .w {
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    .left {
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
    .el-breadcrumb {
      margin-top: auto;
      &:last-child(.el-breadcrumb__item) {
        &:last-child(.el-breadcrumb__inner) {
          color: #c60404 !important;
        }
      }
      .now {
        span {
          color: #c60404 !important;
        }
      }
    }

    .breadcrumb {
      font-size: 0.875rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(198, 4, 4, 1);
      opacity: 1;
      padding-top: 0.74rem;
    }
  }
}
</style>