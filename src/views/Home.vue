<template>
  <div class="container main-container">
    <!-- <header class="jumbotron">
      <h1> HAI CA IL TERMINI !!! :))) </h1>
      <h3>{{ content }}</h3>
    </header> -->
    <div class="row "> 
      <div class="col-md-4"> <CalendarMonth/></div>
      <div class="col-md-8">Events
        <div>          
          <h1> HAI CA IL TERMINI !!! :))) </h1>    
        </div>
        <div class="list">
          <table class="table table-bordered">
           <thead>
            <div>Titlu:
              <ul>-</ul>
            </div>
          </thead>
          <thead>
            <div>Descriere:
              <ul>-</ul>
            </div>
          </thead>
          <thead>
            <div>Durata:
              <ul>-</ul>
            </div>
          </thead>
          <thead>
            <div>Cost:
              <ul>-</ul>
            </div>
          </thead>
          
          </table>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import CalendarMonthVue from '@/components/calendar/CalendarMonth';
import CalendarMonth from '../components/calendar/CalendarMonth';


export default {
  name: "HomePage",
  data() {
    return {
      content: "",
    };
    
  },
    components :{ CalendarMonthVue, CalendarMonth },
 
 
};
</script>
<style>

[class*="col"]{
  padding: 1rem;
  background-color: #ee0000;
  border: 2px solid #fff;
  color: #fff;
  text-align: center;
}
.list{
  text-align: left;
  padding-right: 5px;
}
.table-subs{
  max-width:90vw !important;
}
.main-container {
  height: 85vh !important;
  width: 94vw !important;
  max-width: 100vw !important;
  margin-top: 1.5vw !important;
  margin-left: -4vw !important;

  /* right: 0 !important; */
  background-color: black !important ;
}

body { 
  margin: 0;
  padding: 0;
}

</style>