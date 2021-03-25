<template>
  <div class="home">
    <Menu />
    <BarraIndicadores />
    <img alt="Vue logo" src="../assets/logo.png" />
   <!--  <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from "@/components/HelloWorld.vue"; */
import BarraIndicadores from "@/components/BarraIndicadores.vue"
import Menu from "@/components/Menu.vue";
export default {
  name: "Home",
  components: {
    /* HelloWorld */
    Menu,
    BarraIndicadores
  }
};
</script>
