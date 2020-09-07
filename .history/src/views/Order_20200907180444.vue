<template>
  <!-- 订单列表 -->
  <div>
    <el-card>
      <div>
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
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
      pagenum: 5,
      pagesize: 20,
    };
  },
  methods: {
    ...userActions(["getOrders"]),
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
    ...userState([]),
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