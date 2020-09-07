<template>
  <!-- 权限列表 -->
  <div>
    <el-card>
      <el-table :data="power" style="width: 100%" border stripe>
        <el-table-column label="#" width="100" align="center">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.num }}</span>
          </template>
        </el-table-column>

        <el-table-column label="权限名称" width="580" align="center">
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
        </template>-->

        <el-table-column label="权限等级" width="560" align="center">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium" v-if="scope.row.level === '0'">一级</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
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
.el-card {
  margin-top: 20px;
}
</style>