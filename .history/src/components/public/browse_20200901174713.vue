<template>
  <!-- 浏览历史 -->
  <div class="browse">
    <div class="glance flex">
      <div v-for="(item,index) in browses" :key="index" class="over" :class= "{'flags':flag === index}" @click="browses(item,index)">{{item}}</div>
    </div>
  </div>
</template>

<script>
// lodash的去重
import uniqWith from "lodash/uniqWith";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      browses: [],
      flag:''
    };
  },
  methods: {
      browses(item,index){
          this.flag = index
      }
  },
  mounted() {
    this.browses = JSON.parse(localStorage.getItem("browses"));
    //去重
    this.browses = uniqWith(this.browses);
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
  border: 1px solid #ddd;
}
.flag{
    color: #fff;
    background: #409EFF;
}
</style>