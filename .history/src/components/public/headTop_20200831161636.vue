<template>
  <!-- 头部组件 -->
  <div class="top flex align-items">
    <div class="name">欢迎来到小爱后台系统</div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      time: "", //获取当前登录时间
    };
  },
  methods: {},
  mounted() {
    //  获取当前登录时间
    this.time = dayjs().format("YYYY/MM/DD");
    console.log(this.time);
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.top {
  height: 60px;
  padding: 0 50px;
  border-bottom: 1px solid #f0f2f5;
}
.name {
  color: #2e5e85;
}
</style>