/* 拍卖预告详情 */
<template>
  <div class="box">
    <Title :txt="txt" :imgSrc="imgSrc" :parentPath="parentPath" :now="now" />
    <div class="w">
      <el-container class="content_box">
        <el-aside class="aside" style="width:16.6667%;">
          <Tabs :navgaters="navgaters" />
          <Newsnotice />
          <Contactus />
        </el-aside>
        <el-main>
          <div class="bgfff">
            <Top :title="title" />
            <div class="lunbo" style="margin-top:53px">
              <!-- <md-card-media style="height: 500px"> -->
              <!-- swiper1 -->
              <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                <swiper-slide class="slide-1"></swiper-slide>
                <swiper-slide class="slide-2"></swiper-slide>
                <swiper-slide class="slide-3"></swiper-slide>
                <swiper-slide class="slide-4"></swiper-slide>
                <swiper-slide class="slide-5"></swiper-slide>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
              </swiper>
              <!-- swiper2 Thumbs -->
              <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                <swiper-slide class="slide-1"></swiper-slide>
                <swiper-slide class="slide-2"></swiper-slide>
                <swiper-slide class="slide-3"></swiper-slide>
                <swiper-slide class="slide-4"></swiper-slide>
                <swiper-slide class="slide-5"></swiper-slide>
              </swiper>
              <!-- </md-card-media> -->
            </div>
            <div class="details_desc">
              <div class="details_name">XXX藏品名称名称名称</div>
              <div class="time">开拍时间：2019-08-08</div>
              <div class="table">
                <ul>
                  <li>规格</li>
                  <li>口径：18cm 高：7.7cm</li>
                  <li>数量</li>
                  <li>1</li>
                  <li>委托售价</li>
                  <li>面议</li>
                  <li>拍卖时间</li>
                  <li>2019</li>
                </ul>
              </div>
              <div class="miaoshu">
                都承盘是明式家具的一个缩影，
                因雅巧实用，为文人喜爱。
                此盘方形，四面栏杆造成井字棂格，
                北京匠师称之为风车式。下设抽屉两具，
                选材用木纹流动、华美的金丝楠木。另外三面盘墙，
                均用整板。整器从明式家具元素出发进行设计，榫卯严谨，
                是陈置案头、置放文玩的佳作。选用乌木与金丝楠的搭配，
                赏心悦目。
              </div>
              <div class="goback" align="center">
                <div @click="goback" class="goback_img">
                  <img src="../../assets/auction/details/back.png" alt />
                </div>
                <div class="gofuyi">返回</div>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>
<script>
import Top from "@/components/line";
import Title from "@/components/title";
import Tabs, { navgater } from "@/components/tabs";
import Newsnotice from "@/components/newsnotice";
import Contactus from "@/components/contactus";
export default {
  components: {
    Top,
    Title,
    Tabs,
    Contactus,
    Newsnotice
  },
  data() {
    return {
      title: {
        name: "AUCTION NOTICE",
        desc: "拍卖预告"
      },
      txt: "拍卖",
      imgSrc: require("../../assets/notice_chui.png"),
      parentPath: "拍卖",
      now: "拍卖预告",
      swiperOptionTop: {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        slideToClickedSlide: true
      }
    };
  },
  computed: {
    navgaters() {
      return [
        navgater(
          { to: { name: "auction" }, exact: true },
          "拍卖预告",
          "auction"
        ),
        navgater({ to: { name: "result" } }, "拍卖结果", "result")
      ];
    }
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  methods: {
    goback() {
      console.log(this.$router.go(-1))
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  background: url("../../assets/noticebg.png");
  .w {
    width: 1200px;
    margin: auto;
    .content_box {
      width: 100%;
      .el-main {
        padding-top: 0;
        padding-right: 0;
        .bgfff {
          background-color: #fff;
          .swiper-container {
            background-color: #000;
          }
          .swiper-slide {
            background-size: cover;
            background-position: center;
            &.slide-1 {
              background-image: url("../../assets/auction/details/detail01.png");
            }
            &.slide-2 {
              background-image: url("../../assets/auction/details/detail01.png");
            }
            &.slide-3 {
              background-image: url("../../assets/auction/details/detail01.png");
            }
            &.slide-4 {
              background-image: url("../../assets/auction/details/detail01.png");
            }
            &.slide-5 {
              background-image: url("../../assets/auction/details/detail01.png");
            }
          }
          .gallery-top {
            // height: 80% !important;
            height: 25.9375rem;
            width: 34.875rem;
          }
          .gallery-thumbs {
            // height: 20% !important;
            box-sizing: border-box;
            padding: 10px 0;
            width: 34.875rem;
            height: 6.5rem;
          }
          .gallery-thumbs .swiper-slide {
            width: 25%;
            height: 100%;
            opacity: 0.4;
          }
          .gallery-thumbs .swiper-slide-active {
            opacity: 1;
          }
          .details_desc {
            width: 86.5285%;
            margin: auto;
            margin-top: 2.75rem;
            text-align: center;
            .details_name {
              font-size: 1.25rem;
              font-family: Source Han Sans CN;
              font-weight: 500;
              color: rgba(198, 4, 4, 1);
              opacity: 1;
            }
            .table {
              width: 100%;
              ul {
                width: 514px;
                height: auto;
                margin: auto;
                text-align: center;
                font-size: 0.875rem;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: rgba(58, 58, 58, 1);
                opacity: 1;
                overflow: hidden;
                clear: both;
                li {
                  width: 49.5%;
                  border: 1px solid #707070;
                  border-left: 1px solid transparent;
                  border-top: 1px solid transparent;
                  float: left;
                  height: 2.5rem;
                  line-height: 2.5rem;
                  &:nth-child(2n-1) {
                    border-left: 1px solid #707070;
                  }
                  &:nth-child(-n + 2) {
                    border-top: 1px solid #707070;
                  }
                }
              }
            }
            .miaoshu {
              margin: auto;
              text-align: left;
              width: 514px;
              font-size: 0.875rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              line-height: 24px;
              color: rgba(58, 58, 58, 1);
              opacity: 1;
              margin-top: 1.9375rem;
            }
            .goback {
              width: 100%;
              .goback_img {
                width: 514px;
                margin: auto;
                opacity: 1;
                margin-top: 60px;
                cursor: pointer;
              }
              .gofuyi {
                font-size: 18px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                line-height: 31px;
                color: rgba(198, 4, 4, 1);
                opacity: 1;
                margin-top: 12px;
                padding-bottom: 2.625rem;
              }
            }
          }
        }
      }
      .aside {
        width: 16.6667%;
        height: 62.5rem;
      }
    }
  }
}
</style>