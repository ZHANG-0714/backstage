<template>
  <!-- 公共 -->
  <div>
    <headTop></headTop>
    <div class="flex">
      <sidebar></sidebar>
      <div class="sidebar">
        <browse></browse>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import headTop from "../components/public/headTop"; //头部组件
import sidebar from "../components/public/Sidebar"; //侧边栏
import browse from "../components/public/browse"; //侧边栏
export default {
  name: "",
  props: {},
  components: {
    headTop,
    sidebar,
    browse,
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
.sidebar {
  width: 100vw;
  padding: 20px;
}
.browse {
  border-bottom: 1px solid #eee;
}
</style>