<template>
  <!--子 表单 -->
  <div>
    <el-dialog :title="title" :visible.sync="visible" width="30%" :before-close="handleClose">
      <el-form>
        <el-form-item label="分类名称" prop="username"> </el-form-item>
          <el-input placeholder="请输入用户名"></el-input>
       
      </el-form>
      <slot name="footer" v-if="$slots.footer"></slot>
      <span slot="footer" v-else>
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="ok">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    //   用于关闭 Dialog
    handleClose() {
      this.$emit("update:visible", false);
    },
    // 取 消
    cancel() {
      this.$emit("cancel");
    },
    // 确 定
    ok() {
      this.$emit("ok");
    },
  },
  mounted() {
    //查看插槽的内容
    // console.log(this.$slots);
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>