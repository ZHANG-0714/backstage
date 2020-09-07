<template>
  <!-- 商品分类 -->
  <div>
    <el-card>
      <el-button type="primary">添加分类</el-button>
      <div>
        <Form
          :table-data="part"
          :columns="columns"
          :total="total"
          :showpagination="false"
          :type="type"
          :stripe="stripe"
          :border="border"
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
        >
          <template v-slot:state="scope">
            <el-switch v-model="scope.scope.row.mg_state"></el-switch>
          </template>
          <template v-slot:action="scope">
            <el-button type="primary" @click="del(scope.scope)" size="mini">编辑</el-button>
            <el-button type="danger" @click="del(scope.scope)" size="mini">删除</el-button>
            <el-button type="warning" @click="del(scope.scope)" size="mini">分配权限</el-button>
          </template>
        </Form>
      </div>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("goods");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      type: [1, 2, 3],
      pagenum: 1,
      pagesize: 5,
    };
  },
  methods: {
    ...userActions(["getCategories"]),
  },
  mounted() {
    this.getCategories({
      type: this.type,
      pagenum: this.pagenum,
      pagesize: this.pagesize,
    });
  },
  watch: {},
  computed: {
    ...userState(["cation"]),
  },
};
</script>

<style scoped lang='scss'>
.el-card {
  margin-top: 20px;
}
</style>