/* 买家指南 */
<template>
  <div class="content_box">
    <Top :title="title" />
    <div class="content" v-for="(item,i) in items" :key="i">
      <div class="title">
        <h4>{{item.head}}</h4>
      </div>
      <ul>
        <li v-for="(list,j) in item.lists" :key="j">{{list.content}}</li>
      </ul>
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
        name: "BUYER GUIDE",
        desc: "买家指南"
      },
      items: [
        {
          head: "拍卖的定义",
          lists: [
            {
              id: 1,
              content:
                " 《中华人民共和国拍卖法》 第三条拍卖是指以公开竞价的形式，将特定物品或者财产权利转让给最高应价者的买卖方式。"
            }
          ]
        },
        {
          head: "买受人的权利及义务",
          lists: [
            {
              id: 1,
              content:
                " 1 、买受人未能按照约定取得拍卖标的的，有权要求拍卖人或者委托人承担违约责任。"
            },
            {
              id: 2,
              content:
                " 2 、买受人应当按照约定支付拍卖标的的价款，未按照约定支付价款的，应当承担违约责任，或者由拍卖人征得委托人的同意，将拍卖标的再行拍卖（拍卖标的再行拍卖的，原买受人应当支付第一次拍卖中本人及委托应当支付的佣金。再行拍卖的价款低于原拍卖价款的，原买受人应当补足差额）；"
            },
            {
              id: 3,
              content:
                "3 、买受人未按照约定受领拍卖标的的，应当支付由此产生的保管费用；"
            },
            {
              id: 4,
              content:
                "4 、拍卖标的需要依法办理证照变更、产权过户手续的，委托人、买受人应当持拍卖人出具的成交证明和有关材料，向有关行政管理机关办理手续"
            }
          ]
        },
        {
          head: "买受人的权利及义务",
          lists: [
            {
              id: 1,
              content:
                " 1 、买受人未能按照约定取得拍卖标的的，有权要求拍卖人或者委托人承担违约责任。"
            },
            {
              id: 2,
              content:
                " 2 、买受人应当按照约定支付拍卖标的的价款，未按照约定支付价款的，应当承担违约责任，或者由拍卖人征得委托人的同意，将拍卖标的再行拍卖（拍卖标的再行拍卖的，原买受人应当支付第一次拍卖中本人及委托应当支付的佣金。再行拍卖的价款低于原拍卖价款的，原买受人应当补足差额）；"
            },
            {
              id: 3,
              content:
                "3 、买受人未按照约定受领拍卖标的的，应当支付由此产生的保管费用；"
            },
            {
              id: 4,
              content:
                "4 、拍卖标的需要依法办理证照变更、产权过户手续的，委托人、买受人应当持拍卖人出具的成交证明和有关材料，向有关行政管理机关办理手续"
            }
          ]
        },
        {
          head: "买受人的权利及义务",
          lists: [
            {
              id: 1,
              content:
                " 1 、买受人未能按照约定取得拍卖标的的，有权要求拍卖人或者委托人承担违约责任。"
            },
            {
              id: 2,
              content:
                " 2 、买受人应当按照约定支付拍卖标的的价款，未按照约定支付价款的，应当承担违约责任，或者由拍卖人征得委托人的同意，将拍卖标的再行拍卖（拍卖标的再行拍卖的，原买受人应当支付第一次拍卖中本人及委托应当支付的佣金。再行拍卖的价款低于原拍卖价款的，原买受人应当补足差额）；"
            },
            {
              id: 3,
              content:
                "3 、买受人未按照约定受领拍卖标的的，应当支付由此产生的保管费用；"
            },
            {
              id: 4,
              content:
                "4 、拍卖标的需要依法办理证照变更、产权过户手续的，委托人、买受人应当持拍卖人出具的成交证明和有关材料，向有关行政管理机关办理手续"
            }
          ]
        }
      ]
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
    margin-top: 0.25rem;
    padding: 1.875rem 0;
    font-family: Source Han Sans CN;
    .title {
      font-size: 1.125rem;
      color: #3a3a3a;
      position: relative;
      padding-left: 1.25rem;
      &::before {
        content: "";
        width: 5px;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #c60404;
      }
    }
    ul {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.6875rem;
      color: rgba(58, 58, 58, 1);
      opacity: 1;
      li {
        padding: 0.875rem 0;
      }
    }
  }
}
</style>