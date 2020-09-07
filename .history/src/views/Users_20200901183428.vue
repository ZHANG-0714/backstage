<template>
  <!-- 用户列表 -->
  <div>
    <el-card>
      <!-- 搜索 -->
      <el-input v-model="input" placeholder="请输入搜索内容">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="primary">添加用户</el-button>
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
      input: "",
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.el-card {
  margin-top: 20px;
}
.el-input {
  width: 380px;
}
</style>