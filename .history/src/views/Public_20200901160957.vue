<template>
  <!-- 公共 -->
  <div>
    <headTop></headTop>
    <div class="flex">
      <sidebar></sidebar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import headTop from "../components/public/headTop"; //头部组件
import sidebar from "../components/public/Sidebar"; //侧边栏
export default {
  name: "",
  props: {},
  components: {
    headTop,
    sidebar,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>