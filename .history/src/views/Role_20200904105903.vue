<template>
  <!-- 角色列表 -->
  <div>
    <el-card>
      <el-button type="primary">添加角色</el-button>
      <div class="form">
        <Form
          :table-data="part"
          :columns="columns"
          :total="total"
          :showpagination="false"
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
    </el-card>
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
    return {
      //表格的配置项
      columns: [
        {
          label: "#",
          prop: "index-1",
          align: "center",
          width: "220",
        },
        {
          label: "职位",
          prop: "roleName",
          align: "center",
          width: "220",
        },
        {
          label: "描述",
          prop: "roleDesc",
          align: "center",
          width: "220",
        },
        {
          label: "操作",
          align: "center",
        },
      ],
      total: 10,
    };
  },
  methods: {
    ...userActions(["getRoles"]),
    //按钮
    del(scope) {
      console.log(scope.row);
    },
    // 每页条数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    // 当前页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  mounted() {
    this.getRoles();
  },
  watch: {},
  computed: {
    ...userState(["part"]),
  },
};
</script>

<style scoped lang='scss'>
.el-card {
  margin-top: 20px;
}
.form {
  margin-top: 20px;
}
</style>