<template>
  <div class="nav" v-bind="$props">
    <nav class="navlist">
      <ul class="navlist_nav">
        <li v-for="(item,i) in items" :key="i">
          <router-link active-class="active" class="item" v-bind="item.name">
            <p class="p1">{{item.txt}}</p>
            <p class="p2">{{item.en}}</p>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export function nav(name, txt, en) {
  return { name, txt, en };
}
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.nav {
  background-color: #f0f0f0;
  width: 100%;
  .navlist {
    width: 1200px;
    margin: auto;
    .navlist_nav {
      width: 100%;
      li {
        display: inline-block;
        height: 4.75rem;
        width: 14.28%;
        text-align: center;
        // border-left: 1px solid #d8d8d8;
        // border-right: 1px solid #d8d8d8;
        outline: 1px solid #d8d8d8;
        .item {
          color: #818181;
          .p1 {
            padding-top: 1.3125rem;
            font-size: 1rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
          }
          .p2 {
            font-size: 0.875rem;
            font-family: Source Han Sans CN;
            font-weight: 400;
          }
          &.active,
          &:hover {
            color: #c60404;
            display: block;
            border-top: 2px solid #c60404;
          }
        }
      }
    }
  }
}
</style>