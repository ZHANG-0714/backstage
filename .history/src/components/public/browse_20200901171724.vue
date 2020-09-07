<template>
  <!-- 浏览历史 -->
  <div class="browse">hk</div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      browses: [],
    };
  },
  methods: {},
  mounted() {
    this.browses = JSON.parse(localStorage.getItem("browses"));
  },
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.browse {
  border-bottom: 1px solid #eee;
}
</style>