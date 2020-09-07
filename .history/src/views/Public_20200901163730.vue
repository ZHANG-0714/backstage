<template>
  <!-- 公共 -->
  <div>
    <headTop></headTop>
    <div class="flex">
      <sidebar></sidebar>
      <div class="sidebar">
        <div class="browse">lhk</div>
        <router-view></router-view>
      </div>
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
.sidebar{
  width: 80vw;
}
.browse {
  border-bottom: 1px solid #eee;
  // background: coral;
}
</style>