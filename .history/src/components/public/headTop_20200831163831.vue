<template>
  <!-- 头部组件 -->
  <div class="top flex align-items space-between">
    <div class="name">欢迎来到小爱后台系统</div>
    <div class="flex">
      <div class="time">{{time}}</div>
      <div class="time">{{date}}</div>
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
      date: "",
    };
  },
  methods: {},
  mounted() {
    //  获取当前登录时间
    this.time = dayjs().format("YYYY/MM/DD");
    console.log(this.time);

    let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.date = dayjs().format("hh:mm:ss"); // 修改数据date
    }, 1000);
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
.time {
  margin-right: 20px;
}
</style>