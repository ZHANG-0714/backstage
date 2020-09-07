<template>
  <!-- 角色列表 -->
  <div>
    <el-card>
      <el-button type="primary">添加角色</el-button>
    </el-card>
    <div>
      <Form
        :table-data="tableData"
        :columns="columns"
        :total="total"
        @handleSizeChange="handleSizeChange"
        @handleCurrentChange="handleCurrentChange"
      >
        <template v-slot:state="scope">
          <el-switch v-model="scope.scope.row.mg_state"></el-switch>
        </template>
        <template v-slot:action="scope">
          <el-button type="danger" @click="del(scope.scope)" size="mini">编辑</el-button>
          <el-button type="danger" @click="del(scope.scope)" size="mini">删除</el-button>
          <el-button type="danger" @click="del(scope.scope)" size="mini">分配角色</el-button>
        </template>
      </Form>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("role");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    ...userActions(["getRoles"]),
  },
  mounted() {
    this.getRoles();
  },
  watch: {},
  computed: {
    ...userState([]),
  },
};
</script>

<style scoped lang='scss'>
.el-card {
  margin-top: 20px;
}
</style>