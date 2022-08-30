<template>
  <li
    class="calendar-day"
    :class="{
      'calendar-day--not-current': !day.isCurrentMonth,
      'calendar-day--today': isToday,
    }" @click="click">
    <span>{{ label }}</span>
    <!-- <slot ">h</slot> -->
  </li>
</template>

<script>
import dayjs from "dayjs";

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
    }
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
</style>
