/* 藏品展示 */
<template>
  <div class="content_box">
    <Top :title="title" />
    <div class="content">
      <div class="show_content" v-for="(item,i) in 9" :key="i">
        <router-link class="item" :to="{name:'details'}">
          <div class="img_box">
            <img src="../../assets/auctioncenter/cangpin.png" alt />
          </div>
          <div class="desc">
            <p class="name">XXX藏品名称名称名称</p>
            <div class="price_box">
              拍卖价格：
              <span class="price">500万</span>
            </div>
          </div>
        </router-link>
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
        name: "COLLECTION DISPLAY",
        desc: "藏品展示"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.content_box {
  background-color: #fff;
  .content {
    width: 86.2585%;
    margin: auto;
    margin-top: 1.4375rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .show_content {
      width: 13.125rem;
      height: 17.5rem;
      border: 1px solid #707070;
      margin-top: 1.25rem;
      &:hover {
        .desc {
          p {
            color: #c60404;
          }
        }
      }
      .img_box {
        width: 100%;
        height: 13.125rem;
        overflow: hidden;
        &:hover {
          img {
            transition: all 0.5s;
            transform: scale(1.2);
          }
        }
      }
      .desc {
        width: 100%;
        p {
          width: 100%;
          text-align: center;
          line-height: 1.25rem;
          height: 2.25rem;
          font-size: 1rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          line-height: 2.25rem;
          color: rgba(58, 58, 58, 1);
          opacity: 1;
        }
        .price_box {
          width: 100%;
          text-align: center;
          font-size: 0.875rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(58, 58, 58, 1);
          opacity: 1;
          .price {
            font-size: 1.25rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(198, 4, 4, 1);
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>