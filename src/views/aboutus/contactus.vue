/* 联系我们 */
<template>
  <div class="content_box">
    <Top :title="title" />
    <div class="contact">
      <div class="left_box">
        <div class="left" v-for="(item,i) in contact" :key="i">
          <div class="title">{{item.title}}</div>
          <div class="desc">{{item.desc}}</div>
        </div>
      </div>
      <div class="th3_right">
        <!--百度地图容器-->
        <div
          id="dituContent"
          style="width:447px;height:357px;border:#ccc solid 1px;"
          ref="dituContent"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import Top from "@/components/line";
import BdMap from "@/components/maps";
import Map from "../../../static/js/map";
export default {
  components: {
    Top,
    BdMap
  },
  data() {
    return {
      title: {
        name: "CONTACT US",
        desc: "联系我们"
      },
      contact: [
        {
          title: "公司名称：",
          desc: "四川省嘉士利拍卖有限公司"
        },
        {
          title: "地 址：",
          desc: "成都市青羊区方池街35号5楼"
        },
        {
          title: "电 话：",
          desc: "028-86699706"
        },
        {
          title: "网 址：",
          desc: "www.jslpm.com"
        },
        {
          title: "邮 编：",
          desc: "610031"
        },
        {
          title: "E-mail：",
          desc: "office@jslpm.com"
        },
        {
          title: "客服QQ：",
          desc: "972564112"
        }
      ]
    };
  },
  mounted() {
    console.log(Map);
    console.log(this.$refs.dituContent);
    Map.initMap();
  }
};
</script>
<style lang="scss">
.th3_right {
  width: 447px;
  height: 357px;
  overflow: hidden;
  #dituContent {
    overflow: unset !important;
  }
}
</style>
<style lang="scss" scoped>
.content_box {
  background-color: #fff;
  height: 502px;
  .contact {
    width: 86.2585%;
    margin: auto;
    margin-top: 2.875rem;
    display: flex;
    .left_box {
      width: 50%;
      .left {
        display: flex;
        justify-content: stretch;
        font-size: 1.125rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(58, 58, 58, 1);
        opacity: 1;
        &:not(:nth-last-child(8)) {
          padding-bottom: 1.6875rem;
        }
        .title {
          width: 6rem;
        }
      }
    }
    .dith3_right {
      width: 447px;
      height: 241px;
      .map {
        width: 447px;
        height: 241px;
      }
    }
  }
}
</style>