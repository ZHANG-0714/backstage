<template>
  <!-- 分类参数 -->
  <div>
    <el-card>
      <!-- 注意 -->
      <div>
        <el-alert title="注意:只允许为第三级分类设置相关参数!" type="warning" show-icon></el-alert>
      </div>
      <div class="choice">选择商品分类:</div>
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
.el-card {
  margin-top: 20px;
}
.choice{
  
}
</style>