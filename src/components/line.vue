<template>
  <div class="top_title" v-bind="$props">
    <h3>{{title.name}}</h3>
    <el-divider content-position="center">{{title.desc}}</el-divider>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: Object,
      default: () => {}
    }
  }
};
</script>
<style lang="scss" scoped>
.top_title {
  width: 86.5285%;
  margin: auto;

  h3 {
    padding-top: 1.4375rem;
    font-size: 1.8125rem;
    font-family: HYChengXingJ;
    font-weight: 800;
    color: rgba(198, 4, 4, 1);
    opacity: 1;
    text-align: center;
  }
  .el-divider__text {
    font-size: 1.5rem;
  }
}
</style>