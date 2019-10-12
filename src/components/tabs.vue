/* 二级导航 */
<template>
  <div class="tabs">
    <ul class="nav" v-bind="$props">
      <!-- <li > -->
      <routerLink
        v-for="(item,i) in navgaters"
        :key="i"
        tag="li"
        active-class="active"
        class="item"
        v-bind="item.router"
      >{{item.txt}}</routerLink>
      <!-- </li> -->
    </ul>
  </div>
</template>
<script>
export function navgater(router, txt, name) {
  return { router, txt, name };
}
export default {
  data() {
    return {
      pathname: ""
    };
  },
  props: {
    navgaters: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    console.log(this.$route.name);
    this.pathname = this.$route.name;
  },
  watch: {
    $router: function(to, from) {
      this.pathname = to.name;
      console.log(this.pathname);
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs {
  width: 100%;
  background-color: #fff;
  .nav {
    padding-top: 0.4375rem;
    // li {
    //   list-style-type: square;

    //   text-align: center;
    .item {
      padding: 0.625rem 0;
      width: 84.5%;
      height: 100%;
      color: rgba(58, 58, 58, 1);
      display: inline-block;
      font-size: 0.875rem;
      font-family: Source Han Sans CN;
      font-weight: 600;
      line-height: 1.5rem;
      text-align: center;
      position: relative;
      padding-right: 15.5%;
      cursor: pointer;
      &::after {
        content: "";
        position: absolute;
        width: 0.3125rem;
        height: 0.3125rem;
        left: 0.8125rem;
        top: 1.2rem;
        background: #fff;
      }
      // }
    }
    .active {
      background-color: #c60404;
      color: #fff !important;
    }
  }
}
</style>