<template>
  <!-- 商品分类 -->
  <div>
    <el-card>
      <el-button type="primary">添加分类</el-button>
      <div>
        <Form
          :table-data="cation"
          :columns="columns"
          :total="total"
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
        >
          <template v-slot:state="scope">
            <el-switch v-model="scope.scope.row.cat_name"></el-switch>
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
    };
  },
  methods: {
    ...userActions(["getCategories"]),
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