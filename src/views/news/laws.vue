/* 法律法规 */
/* 行业资讯 */
<template>
  <div class="content_box">
    <div class="news_content">
      <router-link class="item" :to="{name:'newsdetails'}" v-for="(item,i) in notice" :key="i">
        <div class="news_box">
          <div class="news">
            <div :class="item.leixing==0?'red':'gray'">{{item.type}}</div>
            <div>{{item.news}}</div>
          </div>
          <div class="time">{{item.time}}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      txt: "拍卖公告",
      imgSrc: require("../../assets/notice_chui.png"),
      parentPath: "拍卖",
      now: "拍卖公告",
      notice: [
        {
          leixing: 1,
          type: "",
          news: "成都市青羊区东城根下街28号国信广场8-12层（共5层）商业房产",
          time: "2019-08-08"
        },
        {
          leixing: 0,
          type: "",
          news: "宜宾烟草公司8处房产",
          time: "2019-08-08"
        },
          {
          leixing: 1,
          type: "",
          news: "成都市青羊区东城根下街28号国信广场8-12层（共5层）商业房产",
          time: "2019-08-08"
        },
        {
          leixing: 0,
          type: "",
          news: "宜宾烟草公司8处房产",
          time: "2019-08-08"
        },
          {
          leixing: 1,
          type: "",
          news: "成都市青羊区东城根下街28号国信广场8-12层（共5层）商业房产",
          time: "2019-08-08"
        },
        {
          leixing: 0,
          type: "",
          news: "宜宾烟草公司8处房产",
          time: "2019-08-08"
        },
          {
          leixing: 1,
          type: "",
          news: "成都市青羊区东城根下街28号国信广场8-12层（共5层）商业房产",
          time: "2019-08-08"
        },
        {
          leixing: 0,
          type: "",
          news: "宜宾烟草公司8处房产",
          time: "2019-08-08"
        },
          {
          leixing: 1,
          type: "",
          news: "成都市青羊区东城根下街28号国信广场8-12层（共5层）商业房产",
          time: "2019-08-08"
        },
        {
          leixing: 0,
          type: "",
          news: "宜宾烟草公司8处房产",
          time: "2019-08-08"
        },
          {
          leixing: 1,
          type: "",
          news: "成都市青羊区东城根下街28号国信广场8-12层（共5层）商业房产",
          time: "2019-08-08"
        },
        {
          leixing: 0,
          type: "",
          news: "宜宾烟草公司8处房产",
          time: "2019-08-08"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.content_box {
  background-color: #fff;
  .news_content {
    width: 100%;
    padding-top: 1.625rem;
    background-color: #fff;
    .news_box {
      width: 90%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      padding: 0.625rem 0;
      .news {
        display: flex;
        justify-content: start;
        position: relative;
        font-size: 0.875rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(129, 129, 129, 1);
        opacity: 1;
        &::before {
          position: absolute;
          left: -1rem;
          top: 0.5rem;
          content: "";
          width: .25rem;
          height: .25rem;
          background-color: #c60404;
        //   border: transparent;
        //   border-left: 0.5625rem solid #818181;
        //   border-top: 0.3625rem solid transparent;
        //   border-right: 0.5625rem solid transparent;
        //   border-bottom: 0.3625rem solid transparent;
        }
        .red {
          color: #c60404;
        }
        .gray {
          color: #818181;
        }
      }
      .time {
        font-size: 0.75rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(165, 165, 165, 1);
        opacity: 1;
      }
    }
  }
}
</style>