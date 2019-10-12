<template>
  <div class="header">
    <div class="logo">
      <div class="logo_img_box">
        <div class="logo_img">
          <img src="@/assets/daohang/logo.png" alt />
        </div>
        <div class="logo_desc">
          <h3>四川省嘉士利拍卖有限公司</h3>
          <p>Sichuan Jiashili Auction Corporation</p>
        </div>
      </div>
      <div class="search">
        <div class="ipt_box">
          <el-input class="ipt" placeholder="请输入关键词" v-model="input10" clearable></el-input>
          <div class="ipt_hot">
            <div class="title">
              <div class="title_img">
                <img src="@/assets/daohang/hot.png" alt />
              </div>
              <div class="title_text">热门搜索词：</div>
            </div>
            <div class="detial">
              <span class="hotlist" v-for="(item,i) in hots" :key="i">{{item.hot}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input10: "",
      hots: [
        { id: 0, hot: "藏品" },
        { id: 1, hot: "委托物品" },
        { id: 2, hot: "单位闲置" },
        { id: 3, hot: "企业债权" },
        { id: 4, hot: "机动车辆" }
      ]
    };
  }
};
</script>
<style lang="scss">
.ipt_box .el-input__inner {
  border: none;
  outline: none;
}
</style>

<style lang="scss" scoped>
.header {
  width: 100%;
  background: url("../assets/daohang/bg.png") no-repeat;
  background-size: 100% 100%;
  height: 6.5625rem;
  .logo {
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo_img_box {
      display: flex;
      align-items: center;
      padding-top: 1.4375rem;
      .logo_img {
        width: 5.8125rem;
        height: 3.6875rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .logo_desc {
        display: flex;
        flex-direction: column;
        margin-left: 0.9375rem;
        h3 {
          color: #c60404;
          font-size: 1.25rem;
          font-family: Source Han Sans CN;
          font-weight: 1000;
        }
        p {
          font-size: 0.8125rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(198, 4, 4, 1);
          opacity: 1;
        }
      }
    }
    .search {
      display: flex;
      width: 39.7727%;
      flex-direction: column;
      margin-right: 1.3125rem;
      .ipt_box {
        width: 100%;
        height: 2.5rem;
        .ipt {
          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 2.0625rem;
            height: 100%;
            background: url("../assets/daohang/search.png") 0.4375rem 0.6875rem
              no-repeat;
            background-color: #fff;
          }
          width: 100%;
          height: 100%;
          border: 0;
          border: 0.125rem solid #c60404;
          vertical-align: middle;
          padding-left: 1.1rem;
          position: relative;
          &::after {
            content: "搜索";
            position: absolute;
            top: 0;
            right: 0;
            width: 5.625rem;
            height: 100%;
            background-color: #c60404;
            text-align: center;
            line-height: 2.5rem;
            font-size: 1rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            opacity: 1;
          }
        }
        .ipt_hot {
          display: flex;
          justify-content: stretch;
          .title {
            display: flex;
            justify-content: stretch;
            line-height: 1.5rem;
            align-items: center;
            margin-top: 0.6875rem;
            .title_img {
              width: 1.125rem;
              height: 1.125rem;
              img {
                width: 100%;
                height: 100%;
                display: inherit;
              }
            }
            .title_text {
              display: inline-block;
              vertical-align: middle;
              margin-left: 0.5rem;
              font-size: 0.875rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: rgba(198, 4, 4, 1);
              opacity: 1;
            }
          }
          .detial {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 70%;
            .hotlist {
              cursor: pointer;
              font-size: 0.875rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: rgba(129, 129, 129, 1);
              opacity: 0.5;
              margin-top: 0.625rem;
              // &:nth-child(1) {
                // margin-left: 1%;
              // }
              // &:not(:nth-child(1)) {
                // margin-left: 5%;
              // }
            }
          }
        }
      }
    }
  }
}
</style>