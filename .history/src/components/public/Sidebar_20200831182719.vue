<template>
  <!-- 侧边栏 -->
  <div class="side">ghj</div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const userModule = createNamespacedHelpers('user')
const {mapState: userState, mapActions:userActions} = userModule
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
      ...userActions
  },
  mounted() {
   
  },
  watch: {},
  computed: {
      ...userState
  },
};
</script>

<style scoped lang='scss'>
.side {
  width: 13vw;
  height: 100vh;
  border-right: 1px solid #e6e6e6;
}
</style>