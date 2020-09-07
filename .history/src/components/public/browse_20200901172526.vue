<template>
  <!-- 浏览历史 -->
  <div class="browse">
    <div class="glance flex">
      <div v-for="(item,index) in browses" :key="index" class="over">{{item}}</div>
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
  padding-bottom: 10px;
}
.glance {
  
}
.over {
  font-size: 14px;
  margin-right: 5px;
  padding: 2px 10px;
  border: 1px solid #eee;
}
</style>