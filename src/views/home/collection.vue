/* 藏品展示 */
<template>
  <div class="collection_box">
    <div class="collection_top">
      <div class="tixing"></div>
      <div class="content_box">
        <!-- 藏品展示 -->
        <div class="collection_show" @click="collectionshow">
          <div :class="show?'parallelogramf':'parallelogram'"></div>
          <div :class="show?'parallelogram1f':'parallelogram1'"></div>
          <div class="title">
            <div class="img_box">
              <img src="../../assets/collectionshow.png" alt />
            </div>
            <div>藏品展示</div>
          </div>
        </div>
        <!-- 拍卖结果 -->
        <div class="collection_result" @click="collectionresult">
          <div :class="result?'parallelogramf':'parallelogram'"></div>
          <div :class="result?'parallelogram1f':'parallelogram1'"></div>
          <div class="title">
            <div class="img_box">
              <img src="../../assets/result.png" alt />
            </div>
            <div>拍卖结果</div>
          </div>
        </div>
        <div class="parallelogram4">
          <div class="parallelogram2"></div>
          <div class="parallelogram3"></div>
        </div>
      </div>
    </div>
    <!-- 拍卖结果展示 -->
    <div v-if="result" class="collection_result_content_box">
      <div class="colllection_result_content">
        <Cards :cards="notice" v-for="(item,i) in 10" :key="i" />
      </div>
    </div>
    <!-- 藏品展示 -->
    <div v-if="show" class="collection_show_content_box">
      <div class="collection_show_content">
        <div class="first_img_box">
          <img src="../../assets/collection_first.png" alt />
        </div>
        <div class="img_box_list">
          <div class="collection_list_box" v-for="(item,i) in 7" :key="i">
            <img src="../../assets/collection01.png" alt />
          </div>
          <div class="collection_list_box1">
            <div class="txt_box">
              <img src="../../assets/bigresult.png" alt />
              <h4>拍品征集</h4>
              <p>LOT COLLECTION</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn_box">
      <div class="watchmore">查看全部</div>
    </div>
  </div>
</template>
<script>
import Cards from "@/components/collectionscards";
export default {
  components: {
    Cards
  },
  methods: {
    collectionshow() {
      this.show = !this.show;
      this.result = !this.result;
    },
    collectionresult() {
      this.show = !this.show;
      this.result = !this.result;
    }
  },
  data() {
    return {
      show: true,
      result: false,
      notice: {
        txt: "绵阳市涪城区文竹街16号文竹大厦1栋1层1号",
        name: "XXX藏品",
        time: "开始时间：2019.08.06",
        yuyue: "拍卖结束",
        state: "jieshu"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.collection_box {
  width: 100%;
  background: url("../../assets/noticebg.png") no-repeat;
  background-size: 100% 100%;
  .collection_top {
    width: 100%;
    display: flex;
    position: relative;
    .tixing {
      // width: 16.75%;
      // border-top: 3.75rem solid #c60404;
      // border-right: 2.3125rem solid transparent;
    }
    .content_box {
      width: 1200px;
      margin: auto;
      display: flex;
      // position: absolute;
      top: 0;
      // left: 16.73%;
      .collection_show,
      .collection_result {
        display: flex;
        position: relative;
        .title {
          position: absolute;
          top: 0;
          left: 1.75rem;
          display: flex;
          align-items: center;
          line-height: 3.75rem;
          font-size: 1.5rem;
          font-family: FZZhengHeiS-DB-GB;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          opacity: 1;
        }
      }
      .collection_result {
        margin-left: -1.25rem;
      }
      .parallelogram4 {
        display: flex;
        .parallelogram2 {
          width: 0.000025rem;
          border-bottom: 3.75rem solid #c60404;
          border-left: 2.3125rem solid transparent;
        }
        .parallelogram3 {
          width: 0.000025rem;
          border-top: 3.75rem solid #c60404;
          border-right: 2.3125rem solid transparent;
        }
      }
      .parallelogram {
        width: 3.625rem;
        border-bottom: 3.75rem solid #c60404;
        border-left: 2.3125rem solid transparent;
      }
      .parallelogramf {
        width: 3.625rem;
        border-bottom: 3.75rem solid #e07f7e;
        border-left: 2.3125rem solid transparent;
      }

      .parallelogram1 {
        width: 3.625rem;
        border-top: 3.75rem solid #c60404;
        border-right: 2.3125rem solid transparent;
      }
      .parallelogram1f {
        width: 3.625rem;
        border-top: 3.75rem solid #e07f7e;
        border-right: 2.3125rem solid transparent;
      }
    }
  }
  .collection_show_content_box {
    width: 1200px;
    margin: auto;
    padding-top: 3.3125rem;
    .collection_show_content {
      width: 100%;
      overflow: hidden;
      clear: both;
      .first_img_box {
        width: 18.75rem;
        height: 32.1875rem;
        overflow: hidden;
        float: left;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .img_box_list {
        .collection_list_box {
          width: 13.125rem;
          height: 15.625rem;
          float: left;
          margin-left: 0.68%;
          &:nth-child(n + 5) {
            padding-top: 0.9375rem;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
        .collection_list_box1 {
          float: left;
          margin-left: 0.68%;
          width: 13.125rem;
          height: 15.625rem;
          background-color: #c60404;
          margin-top: 0.9375rem;
          .txt_box {
            width: 100%;
            margin: auto;
            text-align: center;
            img {
              margin-top: 3.5rem;
              width: 2.6875rem;
              height: 3.1875rem;
            }
            h4 {
              margin-top: 1.5625rem;
              font-size: 1.5rem;
              font-family: Source Han Sans CN;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
              opacity: 1;
            }
            p {
              margin-top: 0.625rem;
              font-size: 1rem;
              font-family: Source Han Sans CN;
              font-weight: 300;
              color: rgba(255, 255, 255, 1);
              opacity: 1;
            }
          }
        }
      }
    }
  }
  .collection_result_content_box {
    width: 1200px;
    margin: auto;
    .colllection_result_content {
      width: 1200px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
  .btn_box {
    width: 1200px;
    margin: auto;
    overflow: hidden;
    clear: both;
    .watchmore {
      width: 7.3125rem;
      height: 2.1875rem;
      background: rgba(198, 4, 4, 1);
      opacity: 1;
      border-radius: 1.3125rem;
      margin: 3.1875rem 0 2.25rem 0;
      font-size: 1rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      text-align: center;
      line-height: 2.1875rem;
      color: rgba(255, 255, 255, 1);
      letter-spacing: 0.0625rem;
      opacity: 1;
      float: right;
    }
  }
}
</style>