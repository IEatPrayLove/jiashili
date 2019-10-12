/* 拍品征集 */
<template>
  <div class="content_box">
    <Top :title="title" />
    <div class="content" v-for="(item,i) in 2" :key="i">
      <div class="title">
        <h4>2019春季文物艺术品征集</h4>
      </div>
      <ul>
        <li>一：征集时间：即日起至2019年3月底</li>
        <li>二：征集地点：成都市武侯区新希望B座1005</li>
        <li>三：征集类别：中国书画、西画、古代陶瓷、宝玉石、金属器 竹木牙角雕、钱币、刺绣、老酒等拍品</li>
        <li>联系电话：18888888888（李老师） 联系电话：18888888888（陈老师） 联系电话：18888888888（王老师）</li>
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
        name: "LOT COLLECTION",
        desc: "拍品征集"
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
    margin-top: 0.25rem;
    padding: 1.875rem 0;
    font-family: Source Han Sans CN;
    .title {
      font-size: 1.125rem;
      color: #3a3a3a;
      position: relative;
      padding-left: 1.25rem;
      &::before{
          content: "";
          width: 5px;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background-color: #C60404;
      }
    }
    ul {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.6875rem;
      color: rgba(58, 58, 58, 1);
      opacity: 1;
      li{
          padding: .875rem 0;
      }
    }
  }
}
</style>