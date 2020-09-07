<template>
  <!-- 登录 -->
  <div class="back">
    <img src="../assets/boos.jpg" alt class="img opacity" />

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>欢迎来到小爱后台管理系统</span>
      </div>
      <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
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
.back {
  display: flex;
  align-items: center;
  justify-content: center;
}
.img {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  position: absolute;
  top: 25%;
  border: 0;
  background-color: rgba(240, 231, 231, 0.4);
}
span{
  font-size: 20px;
  font-weight: 600;
}
</style>