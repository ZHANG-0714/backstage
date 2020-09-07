<template>
  <!-- 角色列表 -->
  <div>
    <el-card>
      <el-button type="primary" @click="visible=true">添加角色</el-button>
      <!-- 表单 -->
      <div>
        <AiForm :visible.sync="visible" @cancel="cancel" @ok="ok">
          <!-- <template v-slot:footer>鬼鬼</template> -->
        </AiForm>
      </div>
      <!-- 表格 -->
      <div class="form">
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
const userModule = createNamespacedHelpers("role");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      visible: false,
      type: "expand",
      //表格的配置项
      columns: [
        {
          label: "#",
          prop: "num",
          align: "center",
          width: "50",
        },
        {
          label: "职位",
          prop: "roleName",
          align: "center",
          width: "320",
        },
        {
          label: "描述",
          prop: "roleDesc",
          align: "center",
          width: "420",
        },
        {
          label: "操作",
          align: "center",
          width: "400",
        },
      ],
      total: 10,
      stripe: true,
      border: true,
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
    cancel() {
      console.log(`点击了`);
    },
    ok() {
      console.log(`点击了`);
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