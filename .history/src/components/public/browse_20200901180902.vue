<template>
  <!-- 浏览历史 -->
  <div class="browse">
    <div class="glance flex">
      <div
        v-for="(item,index) in browses"
        :key="index"
        class="over"
        :class="index == flag?'flag':''"
        @click="glance(item,index)"
      >
        <div class="flex align-items glance_item">
          <img src="../../assets/yuan.png" alt class="yuan" v-if="flag === trun" />
          <div>{{item}}</div>
          <img src="../../assets/cha.png" alt class="cha" v-if="flag === trun" />
        </div>
      </div>
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
      flag: "",
    };
  },
  methods: {
    glance(item, index) {
      this.flag = index;
    },
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
.cha {
  width: 15px;
  height: 15px;
  margin-left: 5px;
}
.yuan {
  width: 10px;
  height: 10px;
  margin-right: 5px;
}
.over {
  font-size: 12px;
  margin-right: 5px;
  padding: 2px;
  border: 1px solid #ddd;
}
.flag {
  color: #fff;
  background: #409eff;
  padding: 2px 5px;
}
</style>