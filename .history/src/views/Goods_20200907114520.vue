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
            <el-switch v-model="scope.scope.row"></el-switch>
          </template>
          <template v-slot:action="scope">
            <el-button type="primary" @click="del(scope.scope)" size="mini">编辑</el-button>
            <el-button type="danger" @click="del(scope.scope)" size="mini">删除</el-button>
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
          label: "#",
          prop: "num",
          align: "center",
          width: "200",
        },
        {
          label: "分类名称",
          prop: "cat_name",
          align: "center",
          width: "200",
        },
        {
          label: "是否有效",
          prop: "address",
          align: "right",
          width: "200",
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