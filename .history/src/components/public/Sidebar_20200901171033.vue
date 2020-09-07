<template>
  <!-- 侧边栏 -->
  <div class="side">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          unique-opened
          router
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <template v-for="(item,index) in menus">
            <el-menu-item index="/" v-if="index === 0" :key="index">
              <i class="el-icon-s-home"></i>
              <span slot="title">{{item}}</span>
            </el-menu-item>
            <el-submenu :index="item.path" v-if="index > 0" :key="index">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.authName}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  :index="'/'+item1.path"
                  v-for="(item1,index1) in item.children"
                  :key="index1"
                  @click="browse(item1)"
                >
                  <i :class="item1.icon"></i>
                  <span slot="title">{{item1.authName}}</span>
                </el-menu-item>
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
    // 存浏览历史
    browse(item) {
      console.log(item.authName);
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
.el-menu {
  border-right: 0;
}
</style>