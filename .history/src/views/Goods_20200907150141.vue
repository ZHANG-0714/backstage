<template>
  <!-- 商品分类 -->
  <div>
    <el-card>
      <el-button type="primary">添加分类</el-button>
      <div class="form">
        <Form
          :table-data="cation"
          :columns="columns"
          :total="totals"
          :pageSizes="pageSizes"
          :pageSize="pageSize"
          :border="border"
          :rowKey="cat_id"
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
        >
          <template v-slot:effective="scope">
            <i class="el-icon-success" v-if="scope.scope.row.cat_deleted === false"></i>
          </template>

          <template v-slot:sorting="scope">
            <el-tag size="medium " v-if="scope.scope.row.cat_level === 0">一级</el-tag>
            <el-tag type="success" size="medium" v-if="scope.scope.row.cat_level === 1">二级</el-tag>
            <el-tag type="warning" size="medium" v-if="scope.scope.row.cat_level === 2">三级</el-tag>
          </template>
          <template v-slot:action="scope">
            <el-button type="primary" @click="del(scope.scope)" size="mini" icon="el-icon-edit">编辑</el-button>
            <el-button type="danger" @click="del(scope.scope)" size="mini" icon="el-icon-delete">删除</el-button>
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
      types: [1, 2, 3],
      pagenum: 1,
      pagesize: 5,
      //表格的配置项
      columns: [
        {
          label: "#",
          prop: "num",
          align: "center",
          width: "50",
        },
        {
          label: "分类名称",
          prop: "cat_name",
          width: "300",
        },
        {
          label: "是否有效",
          prop: "address",
          align: "center",
          width: "300",
          slots: "effective",
        },
        {
          label: "排序",
          prop: "address",
          align: "center",
          width: "300",
          slots: "sorting",
        },
        {
          label: "操作",
          align: "center",
        },
      ],
      pageSize: 5,
      pageSizes: [5, 10, 20, 30],
      border: true,
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
      type: this.types,
      pagenum: this.pagenum,
      pagesize: this.pagesize,
    });
  },
  watch: {},
  computed: {
    ...userState(["cation", "totals"]),
  },
};
</script>

<style scoped lang='scss'>
.el-card {
  margin-top: 20px;
}
.el-icon-success {
  color: #87ceeb;
}
.form {
  margin-top: 20px;
}
</style>