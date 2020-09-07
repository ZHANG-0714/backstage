<template>
  <!-- 登录 -->
  <div class="back el-card--header--img--doos">
    <img src="../assets/boos.jpg" alt class="img opacity" />

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>欢迎来到小爱后台管理系统</span>
      </div>
      <div class="text item">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        name: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
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
  width: 100vw;
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
.clearfix {
  text-align: center;
}

.box-card {
  width: 630px;
  position: absolute;
  top: 25%;
  border: 0;
  background-color: rgba(238, 238, 238, 0.4);
}
span {
  font-size: 30px;
  font-weight: 600;
}
</style>