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
      <div class="form">
        <Form
          :table-data="tabulation"
          :columns="columns"
          :total="total"
          :border="border"
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
        >
          <template v-slot:sorting="scope">
            <el-tag type="danger" size="medium " v-if="scope.scope.row.is_send === '否'">已付款</el-tag>
            <el-tag type="danger" size="medium " v-if="scope.scope.row.is_send === '是'">待付款</el-tag>
          </template>
          <template v-slot:action="scope">
            <el-button type="primary" @click="del(scope.scope)" size="mini" icon="el-icon-edit"></el-button>
            <el-button type="success" @click="del(scope.scope)" size="mini" icon="el-icon-location"></el-button>
          </template>
        </Form>
      </div>
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

      //表格的配置项
      columns: [
        {
          label: "#",
          prop: "num",
          align: "center",
          width: "100",
        },
        {
          label: "订单编号",
          prop: "order_number",
          align: "center",
          width: "220",
        },
        {
          label: "订单价格",
          prop: "order_price",
          align: "center",
          width: "180",
        },
        {
          label: "是否付款",
          prop: "address",
          align: "center",
          width: "200",
          slots: "sorting",
        },
        {
          label: "是否发货",
          prop: "is_send",
          align: "center",
          width: "150",
        },
        {
          label: "下单时间",
          prop: "update_time",
          align: "center",
          width: "200",
        },
        {
          label: "操作",
          align: "center",
        },
      ],
      total: 10,
      border: true,
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
.form {
  margin-top: 20px;
}
</style>