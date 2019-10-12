<template>
  <swiper v-bind="$props">
    <swiper-slide v-for="(item,i) in banner" :key="i">
      <img class="img-banner" :src="item.path" alt />
    </swiper-slide>
  </swiper>
</template>
<script>
export default {
  props: {
    banner: {
      type: Array,
      default: () => [],
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.img-banner {
  width: 100%;
  height: 100%;
}
</style>