<template>
  <!-- 订单列表 -->
  <div>
    <el-card>
      <!-- input -->
      <div>
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <!-- 表格 -->
      <Form
        :table-data="tabulation"
        :columns="columns"
        :total="total"
        @handleSizeChange="handleSizeChange"
        @handleCurrentChange="handleCurrentChange"
      >
        <template v-slot:state="scope">
          <el-switch v-model="scope.scope.row.mg_state"></el-switch>
        </template>
        <template v-slot:action="scope">
          <el-button type="primary" @click="del(scope.scope)" size="mini" icon="el-icon-edit"></el-button>
          <el-button type="danger" @click="del(scope.scope)" size="mini" icon="el-icon-location"></el-button>
        </template>
      </Form>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("order");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      input: "",
      pagenum: 1,
      pagesize: 10,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
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
    ...userActions(["getOrders"]),
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
    this.getOrders({
      query: "",
      pagenum: this.pagenum,
      pagesize: this.pagesize,
      user_id: "",
      pay_status: "",
      is_send: "",
      order_fapiao_title: "",
      order_fapiao_company: "",
      order_fapiao_content: "",
      consignee_addr: "",
    });
  },
  watch: {},
  computed: {
    ...userState(["tabulation"]),
  },
};
</script>

<style scoped lang='scss'>
.el-card {
  margin-top: 20px;
}
.el-input {
  width: 400px;
}
</style>