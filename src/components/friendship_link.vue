/* 友情链接 */
<template>
  <div class="friendship_link">
    <div class="content_box">
      <div class="title">友情链接</div>
      <div class="item" v-for="(item,i) in 7" :key="i">公司logo</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.friendship_link {
  width: 100%;
  background-color: #f0f0f0;
  .content_box {
   width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 1.125rem 0; 
    .title {
      width: 7.3125rem;
      height: 2.1875rem;
      background: rgba(198, 4, 4, 1);
      border-radius: 1.3125rem;
      font-size: 1rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 2.1875rem;
      color: rgba(255, 255, 255, 1);
      letter-spacing: 0.075rem;
      text-align: center;
    }
    .item {
      width: 7.3125rem;
      height: 2.1875rem;
      background: rgba(255, 255, 255, 1);
      opacity: 1;
      border-radius: 0.0625rem;
      text-align: center;
      line-height: 2.1875rem;
      font-size: 1rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(58, 58, 58, 1);
      letter-spacing: 0.075rem;
      cursor: pointer;
    }
  }
}
</style>