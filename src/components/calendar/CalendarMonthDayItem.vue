<template>
  <li
    class="calendar-day"
    :class="{
      'calendar-day--not-current': !day.isCurrentMonth,
      'calendar-day--today': isToday,
    }" @click="click">
    <span>{{ label }}</span>
    <div class="container-fluid">
      <div class="row-calendar" v-on:click="removeParticiaption(event.participationId)" v-for="event in eventList" v-bind:key="event.participationId"> {{event.title}}</div>
    </div>
    <!-- <slot ">h</slot> -->
  </li>
</template>

<script>
import dayjs from "dayjs";
import axios from "axios";
import { useStore } from "vuex";

export default {
  name: "CalendarMonthDayItem",

  props: {
    day: {
      type: Object,
      required: true
    },

    isCurrentMonth: {
      type: Boolean,
      default: false
    },

    isToday: {
      type: Boolean,
      default: false
    },
    eventList:{
      required: true
    }
  },

  setup(){
    const store = useStore();
    const removeParticiaption = (id) =>{
      console.log("De sters: " + id)
      axios
      .delete(
        "http://localhost:8080/api/v1/participations/delete/" + id,
        {
          headers: {
            Authorization: `Bearer ` + store.state.auth.user.accessToken,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        location.reload()
      });
    }

    return {removeParticiaption}
  },

  computed: {
    label() {
      return dayjs(this.day.date).format("D");
    }
  },
  methods: {
    click() {
      //  this.$emit('select', this.day.date);
      console.log('am apasat', this.day.date);
      
    },
  },
};
</script>

<style scoped>
.calendar-day {
  position: relative;
  min-height: 90px;
  font-size: 20px;
  /* background-color:  rgb(72, 198, 255); */
  background-color:  rgb(72, 198, 255);
  color: var(--grey-800);
  padding: 10px;

}

.calendar-day > span {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2px;
  width: var(--day-label-size);
  height: var(--day-label-size);
}


.calendar-day--not-current {
  background-color: rgb(7, 158, 218);
  color: var(--blue-300);
}

.calendar-day--today {
  padding-top: 10px;
}

.calendar-day--today > span {
  color: rgb(0, 0, 0);
  border-radius: 9999px;
  background-color: var(--grey-800);
}

.container-fluid{
  height:10vh;
  margin-top:3vh;
  padding-top:0.12vh;
}

.row-calendar{
  min-height:2.2vh;
  width:130%;
  margin-left:-1.1vh;
  margin-top: 0.6vh;
  color:white;
  font-size:13px;
  background-color: rgb(0, 4, 255);
  overflow:auto;
  cursor: pointer;
}
</style>
