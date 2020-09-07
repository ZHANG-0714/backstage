<template>
  <!-- 权限列表 -->
  <div>
    <el-card>
      <el-table :data="power" style="width: 100%" border stripe>
        <el-table-column label="#" width="100" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.num }}</span>
          </template>
        </el-table-column>

        <el-table-column label="权限名称" width="580" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.authName }}</span>
          </template>
        </el-table-column>

        <el-table-column label="权限等级" width="560" align="center">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <div slot="reference">
                <el-tag size="medium " v-if="scope.row.level === '0'">一级</el-tag>
                <el-tag type="success" size="medium" v-if="scope.row.level === '1'">二级</el-tag>
                <el-tag type="warning" size="medium" v-if="scope.row.level === '2'">三级</el-tag>
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
    return {};
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