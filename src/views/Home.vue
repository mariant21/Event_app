<template>
  <div class="container-fluid main-container fixed-top">
    <div class="row">
      <div class="col-md-7 main-col"><CalendarMonth /></div>
      <div class="col-md-5 main-col">
        <ListOfEvents />
      </div>
    </div>
  </div>
</template>


<script>
import CalendarMonthVue from "@/components/calendar/CalendarMonth";
import CalendarMonth from "../components/calendar/CalendarMonth";
import ListOfEvents from "../components/ListOfEvents.vue";

export default {
  name: "HomePage",
  data() {
    return {
      content: "",
    };
  },
  components: { CalendarMonthVue, CalendarMonth, ListOfEvents },
};
</script>
<style scoped>
[class*="col"] {
  padding: 1rem;
  border: 2px solid #fff;
  color: black;
  text-align: center;
}

.main-container {
  height: 95vh !important;
  width: 97vw !important;
  max-width: 100vw !important;
  margin-top: 5vw !important;
  margin-left: 1.5vw !important;
}

.main-col {
  height: 95vh !important;
}

body {
  margin: 0;
  padding: 0;
}
</style>