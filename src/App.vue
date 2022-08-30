<template>
  <div id="app">
    <NavBar />
       <div class="container">
        <router-view />
      </div>
   </div>
</template>
<script>
import NavBar from '@/components/Navbar.vue';



export default {

  components: { NavBar },

};
</script>

<style>

ol,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
body {
  font-family: sans-serif;
  font-weight: 100;
  --grey-100: #e4e9f0;
  --grey-200: #cfd7e3;
  --grey-300: #b5c0cd;
  --grey-800: #3e4e63;
  --grid-gap: 1px;
  --day-label-size: 25px;
}
.calendar-month-header {
  display: flex;
  justify-content: space-between;
  background-color: rgb(52, 198, 255);
  padding: 10px;
}
</style>