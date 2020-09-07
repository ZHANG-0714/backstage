<template>
  <!-- 登录 -->
  <div class="back">
    <img src="../assets/boos.jpg" alt class="img" />
  </div>
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
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
.back {
  display: flex;
  align-items: center;
  justify-content: center;
}
.img {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100vh;
  top: 0px;
  left: 0px;
}
</style>