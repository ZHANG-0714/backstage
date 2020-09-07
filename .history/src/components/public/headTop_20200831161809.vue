<template>
  <!-- 头部组件 -->
  <div class="top flex align-items space-between">
    <div class="name">欢迎来到小爱后台系统</div>
    <div>
      <div>{{time}}</div>
      <div>下午：</div>
    </div>
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
  color: #2e5e85;
}
</style>