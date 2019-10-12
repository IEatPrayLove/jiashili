/* 发展历程 */
<template>
  <div class="content_box">
    <ul class="bg-bubbles">
      <li v-for="i in 10" :key="i"></li>
    </ul>

    <Top :title="title" />
    <!-- <div id="timeLine" class="time_box">
      <div class="time" v-for="(item,i) in 20" :key="i">
        <div class="xian"></div>
        <div class="point"></div>
        <div class="xian"></div>
        <div class="icon">
          <img src="../../assets/address.png" alt />
        </div>
        <div class="txt">200{{i}}年</div>
      </div>
    </div>

    <div class="pre" style="position:absolute;left:20px;top:50%;" @click="pre">
      <img src="../../assets/leftarray.png" alt />
    </div>
    <div
      class="next"
      style="transform:rotate(180deg);position:absolute;right:20px;top:50%;"
      @click="next"
    >
      <img src="../../assets/leftarray.png" alt />
    </div>-->
    <!-- 发展历程时间线 -->
    <div id="box">
      <div id="left"></div>
      <div id="right"></div>
      <div id="timeline">
        <ul>
          <li v-for="(item,i) in 4" :key="i">
            <div>
              <span class="title-year">200{{i}}</span>
              <div class="title-desc">
                <p class="title-event">2000年5月嘉士利有限公司正式成立</p>
                <p class="title-event">2000年8月嘉士利有限公司正式成立</p>
                <p class="title-event">2000年12月嘉士利有限公司正式成立</p>
              </div>
            </div>
          </li>
           <li v-for="(item,i) in 4" :key="i">
            <div>
              <span class="title-year">200{{4-i}}</span>
              <div class="title-desc">
                <p class="title-event">2000年5月嘉士利有限公司正式成立</p>
                <p class="title-event">2000年8月嘉士利有限公司正式成立</p>
                <p class="title-event">2000年12月嘉士利有限公司正式成立</p>
              </div>
            </div>
          </li>
          <!-- <li v-for="(item,i) in 4" :key="i">
            <div>
              <span class="title-year">200{{i}}</span>
              <div class="title-desc">
                <p class="title-event">2000年5月嘉士利有限公司正式成立</p>
                <p class="title-event">2000年8月嘉士利有限公司正式成立</p>
                <p class="title-event">2000年12月嘉士利有限公司正式成立</p>
              </div>
            </div>
          </li> -->
        </ul>
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
        name: "DEVELOPMENT PATH",
        desc: "发展历程"
      },
      temp: 0
    };
  },
  mounted() {
    var ul = document.querySelector("#timeline ul");
    var leftBtn = document.getElementById("left");
    var rightBtn = document.getElementById("right");
    var ulWidth = ul.offsetWidth;
    var timer = null;
    var speed = 800;
    start(3000);
    function start(shijian) {
      clearInterval(timer);
      timer = setInterval(() => {
        ul.style.left = ul.offsetLeft + speed + "px";
        if (ul.offsetLeft > 0) {
          ul.style.left = -ulWidth / 2 + "px";
        }
        if (ul.offsetLeft < -ulWidth / 2) {
          ul.style.left = 0;
        }
      }, shijian);
    }
  }
};
</script>

<style lang="scss" scoped>
.content_box {
  // background-color: #fff;
  // #53e3a6
  background: linear-gradient(to bottom right, #50a3a2, #53efa0);
  position: relative;
  overflow: hidden;
  .bg-bubbles {
    position: absolute;
    // 使气泡背景充满整个屏幕；
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // 如果元素内容超出给定的宽度和高度，overflow 属性可以确定是否显示滚动条等行为；
    overflow: hidden;
    li {
      position: absolute;
      // bottom 的设置是为了营造出气泡从页面底部冒出的效果；
      bottom: -160px;
      // 默认的气泡大小；
      width: 40px;
      height: 40px;
      background-color: rgba(255, 255, 255, 0.15);
      list-style: none;
      // 使用自定义动画使气泡渐现、上升和翻滚；
      animation: square 15s infinite;
      transition-timing-function: linear;
      // 分别设置每个气泡不同的位置、大小、透明度和速度，以显得有层次感；
      &:nth-child(1) {
        left: 10%;
      }
      &:nth-child(2) {
        left: 20%;
        width: 90px;
        height: 90px;
        animation-delay: 2s;
        animation-duration: 7s;
      }
      &:nth-child(3) {
        left: 25%;
        animation-delay: 4s;
      }
      &:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-duration: 8s;
        background-color: rgba(255, 255, 255, 0.3);
      }
      &:nth-child(5) {
        left: 70%;
      }
      &:nth-child(6) {
        left: 80%;
        width: 120px;
        height: 120px;
        animation-delay: 3s;
        background-color: rgba(255, 255, 255, 0.2);
      }
      &:nth-child(7) {
        left: 32%;
        width: 160px;
        height: 160px;
        animation-delay: 2s;
      }
      &:nth-child(8) {
        left: 55%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
        animation-duration: 15s;
      }
      &:nth-child(9) {
        left: 25%;
        width: 10px;
        height: 10px;
        animation-delay: 2s;
        animation-duration: 12s;
        background-color: rgba(255, 255, 255, 0.3);
      }
      &:nth-child(10) {
        left: 85%;
        width: 160px;
        height: 160px;
        animation-delay: 5s;
      }
    }
  }
}
// 自定义 square 动画；
@keyframes square {
  0% {
    opacity: 0.5;
    transform: translateY(0px) rotate(45deg);
  }
  25% {
    opacity: 0.75;
    transform: translateY(-400px) rotate(90deg);
  }
  50% {
    opacity: 1;
    transform: translateY(-600px) rotate(135deg);
  }
  100% {
    opacity: 0;
    transform: translateY(-1000px) rotate(180deg);
  }
}
#box {
  width: 800px;
  height: 400px;
  margin: 80px auto;
  position: relative;
  #timeline {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    ul {
      width: 6400px;
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      clear: both;
      li {
        float: left;
        width: 620px;
        height: 200px;
        // overflow: hidden;
        padding-left: 180px;
        .title-year {
          float: left;
          font-size: 34px;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: rgba(198, 4, 4, 1);
          opacity: 1;
          &::after {
            content: "年";
            font-size: 22px;
            font-family: Source Han Sans CN;
            font-weight: bold;
            color: rgba(198, 4, 4, 1);
            opacity: 1;
          }
        }
        .title-desc {
          float: left;
          margin-left: 23px;
          height: 200px;
          .title-event {
            font-size: 14px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: rgba(58, 58, 58, 1);
            opacity: 1;
            position: relative;
            padding-left: 20px;
            margin-top: 20px;
            &::before {
              content: "";
              width: 6px;
              height: 6px;
              border: 1px solid #3a3a3a;
              position: absolute;
              left: 0;
              top: 6px;
            }
          }
        }
        // .time_box {
        //   display: flex;
        //   margin-top: 247px;
        //   transition: all 0.4s linear;
        //   overflow: hidden;
        //   .time {
        //     height: 100px;
        //     width: 200px;
        //     display: flex;
        //     align-items: center;
        //     position: relative;
        //     padding-bottom: 100px;
        //     .xian {
        //       width: 96px;
        //       height: 1px;
        //       background-color: #a5a5a5;
        //     }
        //     .point {
        //       width: 8px;
        //       height: 8px;
        //       border: 1px solid #3a3a3a;
        //       opacity: 1;
        //     }
        //     .icon {
        //       position: absolute;
        //       top: 0;
        //       left: 86px;
        //     }
        //     .txt {
        //       width: 100%;
        //       position: absolute;
        //       bottom: 100px;
        //       left: 0;
        //       text-align: center;
        //     }
        //   }
        // }
      }
    }
  }
}
</style>