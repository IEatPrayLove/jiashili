/* 联系我们 */
<template>
  <div class="notice">
    <div class="title">联系我们</div>
    <hr class="line" />
    <div class="content-box">
      <div class="content">
        <div class="img-box">
          <img src="../assets/contactus/phone.png" alt />
        </div>
        <div class="name_desc">
          <div class="name">联系电话</div>
          <div class="desc">028-86699706</div>
        </div>
      </div>
       <div class="content">
        <div class="img-box">
          <img src="../assets/contactus/qq.png" alt />
        </div>
        <div class="name_desc">
          <div class="name">客服QQ</div>
          <div class="desc">972564112</div>
        </div>
      </div>
       <div class="content">
        <div class="img-box">
          <img src="../assets/contactus/email.png" alt />
        </div>
        <div class="name_desc">
          <div class="name">电子邮件</div>
          <div class="desc">office@jslpm.com</div>
        </div>
      </div>
       <div class="content">
        <div class="img-box">
          <img src="../assets/contactus/address.png" alt />
        </div>
        <div class="name_desc">
          <div class="name">公司地址</div>
          <div class="desc">成都市青羊区方池街35号5楼</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
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
  .content-box {
    width: 100%;
    margin-top: .3125rem;
    .content {
        padding: .5rem 0 .4375rem 0;
      padding-left: 0.3125rem;
      display: flex;
      justify-content: stretch;
      align-items: center;
      &:hover {
        .name_desc {
          .desc {
            color: #c60404;
            text-decoration: underline;
          }
        }
      }
      .img-box {
        width: 1.25rem;
        height: 1.25rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name_desc {
        margin-left: 1rem;
        font-size: 0.75rem;
        font-family: Source Han Sans CN;
        font-weight: 400;
        .name {
          color: rgba(58, 58, 58, 1);
          opacity: 1;
        }
        .desc {
          color: rgba(165, 165, 165, 1);
          opacity: 1;
        }
      }
    }
  }
}
</style>