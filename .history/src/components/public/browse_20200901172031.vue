<template>
  <!-- 浏览历史 -->
  <div class="browse flex">
    <div class="glance">
      <div v-for="(item,index) in browses" :key="index" class="">{{item}}</div>
    </div>
  </div>
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
.glance {
    background: #409EFF;
}
</style>