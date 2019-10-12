/* top 头部 设置 首页 */
<template>
  <div class="top">
    <div class="content">
      <div class="content_box">
        <img src="@/assets/top/home.png" alt="home" />
        <span>设为主页</span>
      </div>
      <div class="content_box">
        <img src="@/assets/top/collection.png" alt="collection" />
        <span>收藏</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.top {
  width: 100%;
  height: 3.375rem;
  background-color: #3a3a3a;
  .content {
   width: 1200px;
    height: 100%;
    display: flex;
    margin: auto;
    justify-content: flex-end;
    align-items: center;
    .content_box {
      height: 100%;
      margin-right: 1.75rem;
      font-size: 0.75rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      opacity: 1;
      line-height: 3.375rem;
      span {
        display: inline-block;
        vertical-align: middle;
        margin-left: .375rem;
      }
    }
  }
}
</style>