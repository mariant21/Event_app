<template>
  <div class="container-fluid list-header">
    <div class="row">
      <h1 class="col-md-9">List of events</h1>
      <btn
        class="col-md-3 btn btn-info"
        @click="() => TogglePopup('buttonTriggerAdd')"
        >Add event
      </btn>
    </div>
  </div>
  <PopupWindow
    v-if="CheckPopup('buttonTriggerAdd')"
    :TogglePopup="() => TogglePopup('buttonTriggerAdd')"
    Title="Adaugare eveniment"
    Class="big"
  >
    <Form @submit.prevent="addEvent" class="popup-form">
      <div class="textarea mb-3">
        <label for="title" class="form-label">Titlu:</label>
        <input name="title" class="form-control" id="title" />
      </div>
      <div class="textarea mb-3">
        <label for="description" class="form-label">Descriere</label>
        <textarea
          name="description"
          class="form-control"
          id="description"
          rows="2"
        ></textarea>
      </div>
      <div class="textarea mb-3 container-fluid date-zone">
        <div class="row">
          <div class="col-md-6 date-zone">
            <label for="price" class="form-label">Pret:</label>
            <input name="price" class="form-control" id="price" />
          </div>
          <div class="col-md-6 date-zone">
            <label for="participants" class="form-label">Locuri:</label>
            <input name="participants" class="form-control" id="participants" />
          </div>
        </div>
      </div>
      <div class="textarea mb-3 container-fluid date-zone">
        <div class="row">
          <div class="col-md-6 date-zone">
            <label for="points" class="form-label"
              >Data inceput:&nbsp;&nbsp;</label
            >
            <input
              type="date"
              id="start"
              name="start"
              value="2022-07-22"
              min="2022-07-01"
              max="2022-12-31"
            />
          </div>
          <div class="col-md-6 date-zone">
            <label for="points" class="form-label"
              >Data final:&nbsp;&nbsp;</label
            >
            <input
              type="date"
              id="end"
              name="end"
              value="2022-07-22"
              min="2022-07-01"
              max="2022-12-31"
            />
          </div>
        </div>
      </div>
      <div class="textarea mb-3 ml-200">
        <label for="title" class="form-label">Titlu:</label>
        <input
          class="row form-control-lg ml-1"
          type="file"
          ref="image"
          id="image"
        />
      </div>
      <button class="btn btn-primary">
        <span>Adauga eveniment</span>
      </button>
    </Form>
  </PopupWindow>
  <hr />
  <div class="list scrollable">
    <table class="table table-bordered container">
      <tbody>
        <div class="row" v-for="event in eventList" v-bind:key="event.id">
          <Event
            :Picture="event.picture"
            :EventId="event.id"
            :Title="event.title"
            :Description="event.description"
            :BeginDate="event.beginDate"
            :EndDate="event.endDate"
            :Price="event.price"
            :MaxParticipants="event.maxParticipants"
          />
        </div>
      </tbody>
    </table>
  </div>
</template>

<script>
import { start } from "@popperjs/core";

import Event from "../components/Event.vue";
import PopupWindow from "./PopupWindows.vue";
import axios from "axios";
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
const API_URL = "http://localhost:8080/api/v1/";

export default {
  name: "ListOfEvents",
  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
      timedTrigger: false,
    });
    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    const CheckPopup = (trigger) => {
      return popupTriggers.value[trigger];
    };

    const store = useStore();
    const eventList = ref();
    const participationsList = ref();

    axios
      .get(API_URL + "events/", {
        headers: {
          Authorization: `Bearer ` + store.state.auth.user.accessToken,
        },
      })
      .then((response) => {
        console.log(response.data);
        eventList.value = response.data;
      });

    axios
      .get(
        "http://localhost:8080/api/v1/participations/" +
          store.state.auth.user.id,
        {
          headers: {
            Authorization: `Bearer ` + store.state.auth.user.accessToken,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        participationsList.value = response.data;
        updateEventList()
      });

    const updateEventList = () => {
      if (eventList != undefined && participationsList != undefined) {
        const finalEventList = [];
        for (let evt of eventList.value) {
          let found = false;
          for (let { id, user, event } of participationsList.value) {
            if (evt.id == event.id) {
              found = true;
            }
          }
          if (found == false) {
            finalEventList.push(evt);
          }
        }
        eventList.value = finalEventList;
      }
    };

    const addEvent = (newEvent) => {
      axios
        .post(
          API_URL + "events/addEvent",
          {
            title: newEvent.target.elements.description.value,
            description: newEvent.target.elements.description.value,
            beginDate: newEvent.target.elements.start.value,
            endDate: newEvent.target.elements.end.value,
            price: newEvent.target.elements.price.value,
            maxParticipants: newEvent.target.elements.participants.value,
          },
          {
            headers: {
              Authorization: `Bearer ` + store.state.auth.user.accessToken,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        });
    };

    return { eventList, TogglePopup, CheckPopup, addEvent, updateEventList };
  },
  components: { Event, PopupWindow },
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

.btn {
  font-size: 23px;
  color: white;
}

.date-zone {
  text-align: left;
}

.input-date {
  position: relative;
  left: 0;
}

.popup-form {
  margin-left: 10px !important;
  padding-left: 10px !important;
}
</style>