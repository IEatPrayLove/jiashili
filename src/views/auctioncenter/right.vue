/* 优秀权利展示 */
<template>
  <div class="content_box">
    <router-link v-for="(item,i) in 9" :key="i" :to="{name:''}">
      <div class="content">
        <div class="assets">达州市朝阳东路455号部分国有资产（原金阳宾馆及其附属4号门市）评估报告</div>
        <div class="time">2018.12.12</div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      news: [
        {
          assets: ""
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.content_box {
  background-color: #fff;
  padding-top: 1.25rem;
  .content {
    width: 86.2585%;
    margin: auto;
    margin-left: 1.875rem;
    display: flex;
    justify-content: space-between;
    padding: 0.625rem 0;
    &:hover{
        .assets,
        .time{
            color: #c60404;
        }
    }
    .assets {
      font-size: 0.875rem;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: rgba(58, 58, 58, 1);
      opacity: 1;
      padding-left: 0.625rem;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        width: 0.25rem;
        height: 0.25rem;
        background-color: #c60404;
        left: 0;
        top: 0.5rem;
      }
    }
    .time {
      font-size: 0.75rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(129, 129, 129, 1);
      opacity: 1;
    }
  }
}
</style>