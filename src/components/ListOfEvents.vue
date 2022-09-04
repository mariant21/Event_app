<template>
  <h1>List of events</h1>
  <hr />
  <div class="list scrollable">
    <table class="table table-bordered container">
      <tbody>
        <div class="row" v-for="event in eventList" v-bind:key="event.id">
          <Event
            Picture="party.jpg"
            :Title=event.title
            :Description=event.description
            :BeginDate=event.beginDate
            :EndDate=event.endDate
            :Price=event.price
            :MaxParticipants=event.maxParticipants
          />
        </div>
        <div class="row">
          <Event
            Picture="party.jpg"
            Title="Petrecere mare"
            Description="Petrecere foarte mare in aer liber cu lumini si fum si alea alea"
          />
        </div>
        <div class="row">
          <Event
            Picture="vara.jpg"
            Title="Eveniment de vara"
            Description="Eveniment relaxant la piscina. Super relaxant si dragut summer"
          />
        </div>
        <div class="row">
          <Event
            Picture="concert.jpg"
            Title="Concert simfonic"
            Description="Concert de opera clasica cu vioara si multe smecherii"
          />
        </div>
        <div class="row">
          <Event
            Picture="concert.jpg"
            Title="Alt concert"
            Description="Alt concert de opera tot cu vioara si smecherii de genu"
          />
        </div>
        <div class="row">
          <Event
            Picture="concert.jpg"
            Title="Cumva cumva alt concert"
            Description="N-are rost sa ma tot repet. Nici sus nu stiu de ce am mai scris"
          />
        </div>
      </tbody>
    </table>
  </div>
</template>

<script>
import Event from "../components/Event.vue";
import axios from "axios";
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
const API_URL = "http://localhost:8080/api/v1/";

export default {
  name: "ListOfEvents",
  setup() {
    const store = useStore();
    const eventList = ref();

    axios
      .get(API_URL + "events/", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBsaWNlbnRhLnJvIiwiaWF0IjoxNjYyMjgyOTk1LCJleHAiOjE2NjIzNjkzOTV9.xT_QRwJezuBGNyRmIPK2Jm0viDbVNueueGSY7rq9KAlSfiSjFsiZ7XPlqFR6Nj8vhDF8182kfNtmDl1-97L-3Q`,
        },
      })
      .then((response) => {
        console.log(response.data)
        eventList.value = response.data;
      });

      return {eventList}

  },
  components: { Event },
};
</script>

<style scoped>
.scrollable {
  min-height: 80vh !important;
  max-height: 30vh !important;
  max-width: 100vw !important;
  overflow: scroll;
}

.list {
  text-align: left;
  padding-right: 5px;
}
.table-subs {
  max-width: 90vw !important;
}
</style>