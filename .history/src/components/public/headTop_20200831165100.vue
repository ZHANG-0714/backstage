<template>
  <!-- 头部组件 -->
  <div class="top flex align-items space-between">
    <div class="name">欢迎来到小爱后台系统</div>
    <!-- 时间 -->
    <div class="flex">
      <div class="time">{{time}}</div>
      <div class="time">{{hi}}{{date}}</div>
      <!-- 天气 -->
      <iframe
        scrolling="no"
        src="https://tianqiapi.com/api.php?style=tz&skin=pitaya"
        frameborder="0"
        height="30"
        allowtransparency="true"
      ></iframe>
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
      hi: {},
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

    //   判断时间段
    let hi = dayjs().format("HH");
    if (hi > 6 && hi <= 13) {
      this.hi = "早上";
    } else if (hi > 11 && hi <= 13) {
      this.hi = "中午";
    } else if (hi > 13 && hi <= 18) {
      this.hi = "下午";
    } else if (hi > 18 && hi <= 23) {
      this.hi = "晚上";
    } else {
      this.hi = "该睡觉了";
    }
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
.iframes {
  width: 50px;
}
iframe {
    width: 270px;
}
</style>