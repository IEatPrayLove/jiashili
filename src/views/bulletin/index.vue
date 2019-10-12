/* 拍卖公告 */
<template>
  <div class="box">
    <Title :txt="txt" :imgSrc="imgSrc" :parentPath="parentPath" :now="now" />
    <div class="w">
      <el-container class="content_box">
        <el-aside class="aside" style="width:16.6667%;">
          <!-- <Tabs :navgaters="navgaters" /> -->
          <Newsnotice />
          <Contactus />
        </el-aside>
        <el-main>
          <div class="news_content">
            <router-link class="item" :to="{name:'noticedetails'}" v-for="(item,i) in notice" :key="i">
              <div class="news_box">
                <div class="news">
                  <div :class="item.leixing==0?'red':'gray'">{{item.type}}</div>
                  <div>{{item.news}}</div>
                </div>
                <div class="time">{{item.time}}</div>
              </div>
            </router-link>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>
<script>
import Title from "@/components/title";
import Newsnotice from "@/components/newsnotice";
import Contactus from "@/components/contactus";
// import Tabs, { navgater } from "@/components/tabs";
export default {
  components: {
    Title,
    Newsnotice,
    Contactus
    // Tabs
  },
  computed: {
    // navgaters() {
    //   return [
    //     navgater({ to: { name: "auction" }, exact: true }, "拍卖预告", "auction"),
    //     navgater({ to: { name: "result" } }, "拍卖结果", "result"),
    //   ];
    // }
  },
  data() {
    return {
      txt: "拍卖公告",
      imgSrc: require("../../assets/notice_chui.png"),
      parentPath: "拍卖",
      now: "拍卖公告",
      notice: [
        {
          leixing: 0,
          type: "【拍卖预告】",
          news: "成都市青羊区东城根下街28号国信广场8-12层（共5层）商业房产",
          time: "2019-08-08"
        },
        {
          leixing: 1,
          type: "【拍卖公告】",
          news: "宜宾烟草公司8处房产",
          time: "2019-08-08"
        },
        {
          leixing: 0,
          type: "【拍卖预告】",
          news: "成都市青羊区东城根下街28号国信广场8-12层（共5层）商业房产",
          time: "2019-08-08"
        },
        {
          leixing: 1,
          type: "【拍卖公告】",
          news: "宜宾烟草公司8处房产",
          time: "2019-08-08"
        },
        {
          leixing: 0,
          type: "【拍卖预告】",
          news: "成都市青羊区东城根下街28号国信广场8-12层（共5层）商业房产",
          time: "2019-08-08"
        },
        {
          leixing: 1,
          type: "【拍卖公告】",
          news: "宜宾烟草公司8处房产",
          time: "2019-08-08"
        },
        {
          leixing: 0,
          type: "【拍卖预告】",
          news: "成都市青羊区东城根下街28号国信广场8-12层（共5层）商业房产",
          time: "2019-08-08"
        },
        {
          leixing: 1,
          type: "【拍卖公告】",
          news: "宜宾烟草公司8处房产",
          time: "2019-08-08"
        },
        {
          leixing: 0,
          type: "【拍卖预告】",
          news: "成都市青羊区东城根下街28号国信广场8-12层（共5层）商业房产",
          time: "2019-08-08"
        },
        {
          leixing: 1,
          type: "【拍卖公告】",
          news: "宜宾烟草公司8处房产",
          time: "2019-08-08"
        },
        {
          leixing: 0,
          type: "【拍卖预告】",
          news: "成都市青羊区东城根下街28号国信广场8-12层（共5层）商业房产",
          time: "2019-08-08"
        },
        {
          leixing: 1,
          type: "【拍卖公告】",
          news: "宜宾烟草公司8处房产",
          time: "2019-08-08"
        },
        {
          leixing: 0,
          type: "【拍卖预告】",
          news: "成都市青羊区东城根下街28号国信广场8-12层（共5层）商业房产",
          time: "2019-08-08"
        },
        {
          leixing: 1,
          type: "【拍卖公告】",
          news: "宜宾烟草公司8处房产",
          time: "2019-08-08"
        }
      ]
    };
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
                top: 0.2rem;
                content: "";
                width: 0;
                height: 0;
                border: transparent;
                border-left: 0.5625rem solid #818181;
                border-top: 0.3625rem solid transparent;
                border-right: 0.5625rem solid transparent;
                border-bottom: 0.3625rem solid transparent;
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
      .aside {
        width: 16.6667%;
        height: 62.5rem;
      }
    }
  }
}
</style>