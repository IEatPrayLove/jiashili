<template>
  <div>
    <!-- 最新公告 -->
    <Notice />
    <!-- 最新拍品 -->
    <Paipin />
    <!-- 公司介绍 -->
    <Intro />
    <!-- 藏品展示 -->
    <Collection />
    <!-- 友情链接 -->
    <FriendshipLink />
  </div>
</template>
<script>
import FriendshipLink from "@/components/friendship_link";
import Notice from "@/views/home/notice";
import Paipin from "@/views/home/paipin";
import Intro from "@/views/home/intro";
import Collection from "@/views/home/collection";
export default {
  components: {
    FriendshipLink,
    Notice,
    Paipin,
    Intro,
    Collection
  },
  mounted() {
    document.getElementsByTagName("title")[0].innerHTML = "嘉士利-首页";
  }
};
</script>