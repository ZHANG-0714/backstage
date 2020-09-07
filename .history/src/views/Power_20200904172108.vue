<template>
  <!-- 权限列表 -->
  <div>
    <el-table :data="power" style="width: 100%">
      <el-table-column label="#" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.authName }}</span>
        </template>
      </el-table-column>

      <el-table-column label="权限名称" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.authName }}</span>
        </template>
      </el-table-column>

      <!-- <template slot-scope="scope">
        <el-table-column label="权限等级">
          <el-popover trigger="hover" placement="top">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.authName }}</el-tag>
            </div>
          </el-popover>
        </el-table-column>
      </template> -->

        <el-table-column
      label="权限等级"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("power");
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
          tag: "家",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "公司",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          tag: "家",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "公司",
        },
      ],
    };
  },
  methods: {
    ...userActions(["grtRights"]),
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
  mounted() {
    this.grtRights("list");
  },
  watch: {},
  computed: {
    ...userState(["power"]),
  },
};
</script>

<style scoped lang='scss'>
</style>