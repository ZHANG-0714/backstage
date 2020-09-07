<template>
  <!-- 数据统计 -->
  <div>数据统计</div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("user");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    ...userActions(["getReports"]),
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        // title: { text: "堆叠区域图" },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: this.legend,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: this.xAxis,
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: this.data,
      });
    },
  },
  mounted() {
    this.getReports();
  },
  watch: {},
  computed: {
    ...userState(["data", "legend", "xAxis"]),
  },
};
</script>

<style scoped lang='scss'>
</style>