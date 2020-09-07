<template>
  <!-- 数据统计 -->
  <div>数据统计</div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$store.dispatch("reports/type/1");
    console.log(this.$store);
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
</style>