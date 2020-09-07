<template>
  <div>
    <!-- 子 表格 -->
    <el-table :data="tableData" v-loading="!tableData.length">
      <template v-for="(item,index) in columns">
        <el-table-column
          v-if="item.prop"
          :label="item.label"
          :prop="item.prop"
          :align="item.align"
          :width="item.width"
          :key="index"
        >
          <template slot-scope="scope">
            <slot v-if="item.slots" :name="item.slots" :scope="scope"></slot>
            <template v-else>{{scope.row[item.prop]}}</template>
          </template>
        </el-table-column>
        <el-table-column
          :label="item.label"
          :align="item.align"
          :width="item.width"
          :key="index"
          v-else
        >
          <template slot-scope="scope">
            <slot name="action" :scope="scope"></slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 分页 -->
    <div v-if="showpagination" class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    tableData: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    total: {
      type: [String, Number],
      default: 0,
    },
    showpagination: {
      type: Boolean,
      default: true,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40],
    },
    pageSize: {
      type: Number,
      default: 10,
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    handleSizeChange(val) {
      this.$emit("handleSizeChange", val);
    },
    handleCurrentChange(val) {
      this.$emit("handleCurrentChange", val);
    },
  },
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.pagination {
  width: 100%;
  display: flex;
  margin-top: 26px;
  position: relative;
  right: 50px;
  justify-content: flex-end;
}
</style>