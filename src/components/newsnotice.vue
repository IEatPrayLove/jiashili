<template>
  <div class="notice">
    <div class="title">最新公告</div>
    <hr class="line" />
    <div class="nav">
      <routerLink class="item" tag="li" :to="{name:''}">
        <div class="title_name">【拍卖公告】</div>
        <div class="desc">成都市武侯区1处住...</div>
      </routerLink>
      <routerLink class="item" tag="li" :to="{name:''}">
        <div class="title_name">【新闻】</div>
        <div class="desc">成都市武侯区1处住...</div>
      </routerLink>
      <routerLink class="item" tag="li" :to="{name:''}">
        <div class="title_name">【拍卖公告】</div>
        <div class="desc">成都市武侯区1处住...</div>
      </routerLink>
      <routerLink class="item" tag="li" :to="{name:''}">
        <div class="title_name">【新闻】</div>
        <div class="desc">成都市武侯区1处住...</div>
      </routerLink>
      <routerLink class="item" tag="li" :to="{name:''}">
        <div class="title_name">【拍卖公告】</div>
        <div class="desc">成都市武侯区1处住...</div>
      </routerLink>
      <routerLink class="item" tag="li" :to="{name:''}">
        <div class="title_name">【新闻】</div>
        <div class="desc">成都市武侯区1处住...</div>
      </routerLink>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.notice {
  margin-top: 1.25rem;
  width: 100%;
  background-color: #f0f0f0;
  padding-top: 0.6875rem;
  .title {
    margin-left: 0.5625rem;
    border-left: 4px solid #3a3a3a;
    padding-left: 0.5625rem;
    font-size: 0.875rem;
    font-family: Source Han Sans CN;
    font-weight: 600;
    color: rgba(58, 58, 58, 1);
    opacity: 1;
  }
  .line {
    margin-top: 0.625rem;
    color: #d8d8d8;
  }
  .nav {
    width: 100%;
    .item {
      display: flex;
      justify-content: stretch;
      font-size: 0.75rem;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(129, 129, 129, 1);
      opacity: 1;
      position: relative;
      padding: 0.625rem 0;
      padding-left: 0.625rem;
      .title_name {
        color: #c60404;
        &::after {
          content: "";
          position: absolute;
          width: 0.25rem;
          height: 0.25rem;
          left: 0.25rem;
          top: 1.1rem;
          background-color: #c60404;
        }
      }
    }
  }
}
</style>