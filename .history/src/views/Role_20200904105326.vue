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
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王先生",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王大虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王好看",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      //表格的配置项
      columns: [
        {
          label: "时间",
          prop: "date",
          align: "center",
          width: "200",
        },
        {
          label: "姓名",
          prop: "name",
          align: "center",
          width: "200",
        },
        {
          label: "地址",
          prop: "address",
          align: "right",
          width: "300",
        },
        {
          label: "状态",
          prop: "mg_state",
          align: "center",
          width: "200",
          slots: "state",
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