/* 拍卖结果 */
<template>
  <div class="content_box">
    <Top :title="title" />
    <div class="content">
      <div class="time">
        <div class="choose_time">
          <span>拍卖时间：</span>
          <div class="block">
            <el-date-picker
              v-model="value"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </div>
        </div>
        <div class="search">
          <input class="search_ipt" type="text" placeholder="请输入拍品名称" />
          <button class="search_btn">搜索</button>
        </div>
      </div>
    </div>
    <div class="cards">
      <Cards v-for="(item,i) in 8" :key="i" :cards="cards" />
    </div>
  </div>
</template>
<script>
import Top from "@/components/line";
import Cards from "../../components/collectionscards";
export default {
  components: {
    Top,
    Cards
  },
  data() {
    return {
      cards: {
        txt: "绵阳市涪城区文竹街16号文竹大厦1栋1层1号",
        name: "XXX藏品",
        time: "成交价：999,999,999",
        yuyue: "拍卖结束",
        state:'jieshu'
      },
      title: {
        name: "AUCTION RESULT",
        desc: "拍卖结果"
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.content_box {
  background-color: #fff;
  .time {
    width: 96%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .choose_time {
      display: flex;
      align-items: center;
    }
    .search {
      width: auto;
      height: auto;
      .search_ipt {
        width: 13.125rem;
        height: 2.125rem;
        border: 1px solid rgba(58, 58, 58, 1);
        opacity: 1;
        padding-left: 0.625rem;
      }
      .search_btn {
        border: 0;
        width: 4.3125rem;
        height: 2.125rem;
        background: rgba(198, 4, 4, 1);
        opacity: 1;
        border-radius: 2px;
        font-size: 0.875rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        opacity: 1;
      }
    }
  }
  .cards {
    width: 96%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>