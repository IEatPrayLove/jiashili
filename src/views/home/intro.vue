/* 公司简介 */
<template>
  <div class="content_box_intro">
    <div class="content">
      <div class="title">
        <div class="ch">
          公司简介
          <span class="en">INTRODUCTION</span>
        </div>
        <div class="typeyewu_box">
          <div class="typeyewu">
            <div class="yewu_box">
              <img src="../../assets/type.png" alt />
            </div>
            <div class="type_name">业务类型</div>
          </div>
        </div>
      </div>
      <div class="desc">
        <div class="intro_img_box">
          <img src="../../assets/intro.png" alt />
        </div>
        <div class="desc_txt">
          <div
            class="into_txt"
          >四川省嘉士利拍卖有限公司是经原四川省贸易厅批准，于2000年5月依法设立的AAA级大型拍卖企业，注册资金1000万元，有十八年的拍卖专业执业经历。在政府主管部门和社会各界的关心支持下，公司快速发展，不断壮大，截至目前为止，公司累计成交标的900余个，成交金额逾300多亿元，系全川最优秀、最专业、最高效的拍卖企业之一。曾成功组织了营山县国有建设用地土地使用权11-9、11-13号地块、乐至县国有建设用地使用权20多个地块、汇通大厦在建工程项目、彭州灾后重建拆除工程、武汉市普金提国际广场商业房产、阆中市保宁镇城镇混合住宅用地土地使用权、成都市龙泉驿区龙泉镇约68.56亩的三宗划拨工业用地土地使用权、6438.4㎡的地面建筑物及机器设备、上市公司川化股份有限公司全部非货币资产等全省有影响的重大拍卖活动，积累了丰富的执业经验和广泛的客户资源</div>
        </div>
      </div>
      <div class="btn_img">
        <div class="btn_img_box" @click="assets">
          <img src="../../assets/assets.png" alt />
        </div>
        <div class="btn_img_box" @click="right">
          <img src="../../assets/right.png" alt />
        </div>
        <div class="btn_img_box" @click="collection">
          <img src="../../assets/collection.png" alt />
        </div>
      </div>
      <div class="more">
        <router-link class="item" :to="{name:'/'}">查看详情 >></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    assets(){
      this.$router.push({name:'assets'})
    },
    right(){
      this.$router.push({name:'right'})
    },
    collection(){
      this.$router.push({name:'auctioncenter'})
    }
  },
}
</script>
<style lang="scss" scoped>
.content_box_intro {
  width: 100%;
  // background: url("../../assets/introbg01.png") no-repeat;
  background-color: #f0f0f0;
  height: auto;
  // background-size: 100% 100%;
  .content {
    width: 1200px;
    margin: auto;
    overflow: hidden;
    clear: both;
    .title {
      height: 3.75rem;
      line-height: 3.75rem;
      overflow: hidden;
      clear: both;
      .ch {
        float: left;
        font-size: 1.5rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(58, 58, 58, 1);
        opacity: 1;
        .en {
          font-size: 0.875rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(198, 4, 4, 1);
          opacity: 1;
        }
      }
      .typeyewu_box {
        float: right;
        background: url("../../assets/introtopbg.png") 21px 0 no-repeat;
        background-size: auto;
        height: 60px;
        width: 300px;
        overflow: hidden;
        .typeyewu {
          display: flex;
          align-items: center;
          .yewu_box {
            padding-left: 78px;
          }
          .type_name {
            font-size: 23px;
            font-family: FZZhengHeiS-DB-GB;
            font-weight: 400;
            line-height: 29px;
            color: rgba(255, 255, 255, 1);
            opacity: 1;
            margin-left: 13px;
          }
        }
      }
    }

    .desc {
      width: 75%;
      float: left;
      overflow: hidden;
      .intro_img_box {
        width: 32.2222%;
        height: auto;
        box-shadow: 0.8125rem -0.8125rem 0rem #e8c0c0;
        margin-top: 1.8125rem;
        float: left;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .desc_txt {
        float: right;
        width: 59.2222%;
        margin-right: 1.375rem;
        .into_txt {
          width: 100%;
          margin: auto;
          font-size: 0.875rem;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(58, 58, 58, 1);
          letter-spacing: 0.0625rem;
          opacity: 1;
          line-height: 1.5rem;
          padding-top: 0.75rem;
        }
      }
    }
    .btn_img {
      width: 25%;
      float: right;
      padding-top: 1rem;
      cursor: pointer;
      .btn_img_box {
        margin-bottom: 1.8125rem;
        width: 100%;
        padding-left: 2.5rem;
        img {
          width: 72.3333%;
          height: 72.3333%;
        }
      }
    }
    .more {
      margin-top: 0.4375rem;
      text-align: right;
      padding-bottom: 1.625rem;
      .item {
        padding-right: 1.375rem;
        font-size: 0.875rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(198, 4, 4, 1);
        opacity: 1;
      }
    }
  }
}
@media screen and (max-width: 1200px) and (max-width: 1700px) {
  .into_txt {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    overflow: hidden;
  }
}
</style>