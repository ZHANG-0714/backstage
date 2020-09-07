<template>
  <!-- 侧边栏 -->
  <div class="side">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          unique-opened
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <template v-for="(item,index) in menus">
            <!-- <el-menu-item index="2" v-if="index === 0" :key="index">
              <i class="el-icon-s-home"></i>
              <span slot="title">{{item}}</span>
            </el-menu-item> -->
            <el-submenu index="1" v-if="index > 0" :key="index">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.authName}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </div>
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
    ...userActions(["getMenus"]),
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  mounted() {
    this.getMenus();
    console.log();
  },
  watch: {},
  computed: {
    ...userState(["menus"]),
  },
};
</script>

<style scoped lang='scss'>
.side {
  width: 13vw;
  height: 100vh;
  border-right: 1px solid #e6e6e6;
}
.el-col-12 {
  width: 100%;
}
</style>