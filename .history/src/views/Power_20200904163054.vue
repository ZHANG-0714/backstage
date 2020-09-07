<template>
  <!-- 权限列表 -->
  <div>权限列表</div>
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
  },
  mounted() {
    this.grtRights();
  },
  watch: {},
  computed: {
    ...userState([]),
  },
};
</script>

<style scoped lang='scss'>
</style>