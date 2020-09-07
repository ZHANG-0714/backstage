<template>
  <!-- 用户列表 -->
  <div>
    <el-card>
      <el-input v-model="input" placeholder="请输入搜索内容">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
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
.el-input{
  width: 400px;
}
</style>