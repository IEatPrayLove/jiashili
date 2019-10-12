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
            <div class="top_title">关于公物处理实行公开拍卖的通知</div>
            <div class="time">
              时间：
              <span>1992.08.30</span>
            </div>
            <div class="key">
              关键词：
              <span>公物处理</span>
            </div>
            <div class="news_content_box">
              <div class="news_title">国务院办公厅关于公物处理实行公开拍卖的通知</div>
              <div class="news_ad">国务院办公厅</div>
              <div class="news_content">
                各省、自治区、直辖市人民政府，国务院各部委、各直属机构：
                <br />建国以来，我国对罚没物品和追回赃物的处理，一直沿用国营商业部门作价收购的方式。随着商品经济的发展和加强廉政建设的需要，近几年，一些省市对处理的公物实行公开拍卖，作了大胆尝试，收到了较好的效果。但在实践中也遇到一些具体问题，主要是：原有的罚没物品和公物
                处理规定没有相应修改，一些部门仍通过各自的渠道处理；公物和罚没物品拍卖的数量和范围较小，不能充分发挥拍卖制度应有的作用。为进一步加强廉政建设，管好国家财产，减少财政流失，国务院决定改革现行的公物处理办法，逐步建立和完善公物处理的公开拍卖制度。现将有关事项通知如下：
                <br />一、逐步建立和完善公物处理的公开拍卖制度。处理的公物必须是国家法律、法规允许流通的商品，具体是指执法机关罚没物品、依法不返还的追回赃物，邮政、运输等部门获得的无主货物，国家机关、社会团体和国营企事业单位按有关规定需要处理的物品及其他方面需要变卖的公物。公开拍卖首先要从罚没物品做起，执法机关依法罚没物品，经法律判决裁定生效后可进行拍卖的，必须委托当地政府指定的拍卖行通过公开拍卖的方式拍卖，不得交由其他商业渠道作价收购，更不允许执法机关在本系统内部作价处理。其中，大宗商品、重要生产资料以及专营、专卖商品，可采取招标或定向拍卖方式，首先拍卖给有该类商品经营权的企业；粮、油和鲜活商品，应委托当地农副产品批发市场或集贸市场就地拍卖。罚没物品中的违禁品和假冒商品，仍按国家现行规定交由专管部门处理，不得使其流入市场。文物和抵押贷款的抵押物拍卖办法，另行规定。
                机场、码头、车站、邮政等单位的无主货物，行政事业单位需要处理的物品，原则上也要按上述规定实行公开拍卖。
                <br />二、健全财务上缴制度，实行收支“两条线”。罚没物品拍卖后所得收入，由委托拍卖的执法机关及时、足额上缴财政，不得挪用或截留。罚没收入上缴财政和执法机关办案费用问题，按国务院和财政部的有关规定执行。
                <br />三、有计划地建立拍卖行。各地政府要根据需要和可能，在一些公物处理量较大的城市建立规模适当、人员精干的拍卖行，承办公物处理的拍卖业务；在已建立拍卖行的城市，当地政府应指定一家国营拍卖行承办公物处理的拍卖业务。拍卖行是服务性的法人企业，由地方政府指定的部门审批，工商行政管理部门注册登记，按特种行业进行管理。拍卖行是委托方和购买方的中介人，为买卖双方提供服务，按成交额收取一定比例的手续费（手续费标准由地方政府核定）。拍卖行的收入来源只限于拍卖手续费和与拍卖直接有关的其他合法收入，拍卖行实行自负盈亏，国家不予补贴。为使拍卖行能够做到收支平衡，各城市的拍卖行除承办公物处理拍卖外，可在地方政府的指导下，开展其他物品的拍卖业务，充分发挥公开拍卖制度在发展商品经济中的作用。凡通过拍卖行拍卖的企业国有固定资产，应当依照国家的有关规定进行评估，确定拍卖底价。
                公物处理量较少的城市或地区，可不专设拍卖行，由当地政府指定单位，在有关方面的监督下，按拍卖程序承办公物处理的公开拍卖业务。
                <br />四、加强领导，精心组织。公物处理实行公开拍卖制度是我国公物处理制度的重大改革，各级政府要切实加强领导，认真组织实施，及时总结经验，不断完善这项改革。各有关部门要抓紧修改现行公物处理规定，制定有关拍卖法规，互相配合、通力协作，共同把这件事情办好。为了保证拍卖活动的顺利进行，在国家发布有关拍卖法规之前，各省、自治区、直辖市可先行制定地方性规章，规范拍卖行为和拍卖程序，切实管好拍卖行和公物拍卖业务，防止营私舞弊。监察、审计等部门要对执行本通知的情况进行监督检查。国家体改委要重点抓好几个点，总结经验，搞好协调。
              </div>
              <div class="news_time">1992年8月30日</div>
              <div class="page">
                <div class="pre">
                  上一篇：
                  <span>暂无</span>
                </div>
                <div class="next">
                  下一篇：
                  <span>拍卖管理方法</span>
                </div>
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
      console.log(this.$router.go(-1));
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
          padding-top: 1.1875rem;
          overflow: hidden;
          clear: both;
          .top_title {
            width: 86.5285%;
            margin: auto;
            text-align: center;
            border-bottom: 1px solid #d8d8d8;
            font-size: 1.125rem;
            font-family: Source Han Sans CN;
            font-weight: bold;
            line-height: 27px;
            color: rgba(58, 58, 58, 1);
            opacity: 1;
            padding: 0.625rem 0;
          }
          .time,
          .key {
            // width: 86.5285%;
            margin: auto;
            padding-top: 0.625rem;
            font-size: 0.75rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(129, 129, 129, 1);
            opacity: 1;
          }
          .time {
            float: left;
            margin-left: 4.125rem;
          }
          .key {
            float: right;
            margin-right: 4.125rem;
          }
          .news_content_box {
            width: 86.5285%;
            margin: auto;
            margin-top: 2.1875rem;
            .news_title {
              height: 18px;

              font-family: Source Han Sans CN;
              font-weight: bold;

              color: rgba(58, 58, 58, 1);
              opacity: 1;
              text-align: center;
            }
            .news_ad {
              font-size: 14px;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: rgba(58, 58, 58, 1);
              opacity: 1;
              text-align: center;
              margin-top: 1.8125rem;
            }
            .news_content {
              font-size: 0.875rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: rgba(58, 58, 58, 1);
              opacity: 1;
              margin-top: 1.8125rem;
              line-height: 1.6875rem;
            }
            .news_time {
              font-size: 0.875rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: rgba(129, 129, 129, 1);
              opacity: 1;
              text-align: right;
              margin-top: 2.75rem;
            }
            .page {
              margin-top: 5.8125rem;
              font-size: 0.875rem;
              font-family: Source Han Sans CN;
              font-weight: 400;
              color: rgba(198, 4, 4, 1);
              opacity: 1;
              overflow: hidden;
              clear: both;
              padding-bottom: 3.75rem;
              .pre {
                float: left;
              }
              .next {
                float: right;
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