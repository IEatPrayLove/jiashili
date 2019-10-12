/* 底部 */
<template>
  <footer class="flooter">
    <div class="content_box">
      <div class="left">
        <div class="img_box" align="center">
          <img src="@/assets/wechat.png" alt="erweima" />
        </div>
        <p class="img_name">微信公众号二维码</p>
      </div>
      <div class="right">
        <div class="first_floor">
          <ul class="nav_list" v-bind="$props">
            <li v-for="(item,i) in items" :key="i">
              <router-link class="item" v-bind="item.name">{{item.txt}}</router-link>
            </li>
          </ul>
        </div>
        <div class="second_floor">
          <div class="address">地址：成都市青羊区方池街35号5楼</div>
          <div class="phone">电话：028-86699706</div>
          <div class="emial">E - mail: office@jslpm.com</div>
          <div class="qq">客服QQ：972564112</div>
        </div>
        <div class="third_floor">
          <div class="banquan">© 2003-2007 四川省嘉士利拍卖有限公司 版权所有</div>
          <div class="en">© 2003-2007 Sichuan Jiashili Auction Corporation All Rights Reserved.</div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export function footer(name, txt, en) {
  return { name, txt, en };
}
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
.flooter {
  background-color: #3a3a3a;
  width: 100%;
  .content_box {
    width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;

    .left {
      width: 13.75%;
      background-color: #c60404;
      height: 100%;
      padding-bottom: 2.3125rem;
      .img_box {
        width: 100%;
        padding-top: 1.4375rem;
      }
      .img_name {
        width: 100%;
        font-size: 0.75rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 21px;
        color: rgba(255, 255, 255, 1);
        letter-spacing: 0.004687rem;
        opacity: 1;
        text-align: center;
        margin-top: 0.875rem;
      }
    }
    .right {
      flex: 1;
      .first_floor {
        width: 100%;
        .nav_list {
          width: 80%;
          margin: auto;
          display: flex;
          margin-top: 2.5rem;
          justify-content: space-between;
          li {
            list-style: disc;
            color: #f2f2f2;
            padding-left: 1.5rem;
            text-align: center;
            font-size: 1rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
            &:nth-child(1) {
              list-style: none;
              padding-left: 0;
            }
            .item {
              color: #f2f2f2;
            }
          }
        }
      }
      .second_floor {
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: space-around;
        font-size: 0.75rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(165, 165, 165, 1);
        opacity: 1;
        margin-top: 1.9375rem;
      }
      .third_floor {
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        font-size: 0.75rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(165, 165, 165, 1);
        opacity: 1;
        margin-top: 1.9375rem;
      }
    }
  }
}
</style>