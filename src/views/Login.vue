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
          <!-- 用户名 -->
          <el-form-item label="请输入用户名" prop="name">
            <el-input v-model="ruleForm.name" type="name"></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item label="请输入密码" prop="password">
            <el-input v-model="ruleForm.password" type="password" autocomplete="off"></el-input>
          </el-form-item>
          <!-- 按钮 -->
          <el-form-item>
            <el-button type="primary" @click="submit">登录</el-button>
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
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 登录
    submit() {
      this.$store.dispatch("user/login", {
        username: this.ruleForm.name,
        password: this.ruleForm.password,
      });
      console.log(this.$store);
    },
  },
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
.el-input {
  width: 75%;
  margin-left: 20px;
}
</style>