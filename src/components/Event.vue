<template>
  <div class="container-fluid main">
    <div class="row grid">
      <div class="col-md-4 image-zone">
        <img :src="getImgUrl(Picture)" class="image" v-bind:alt="Picture" />
      </div>
      <div class="col-md-8 content-zone">
        <h5>{{ Title }}</h5>
        <hr class="line" />
        <p class="description">{{ Description }}</p>
        <div class="container-fluid bottom-content-container">
            <div class="col-md-6 bottom-content">
              <p>Data inceput: {{BeginDate}}</p>
              <p>Data final: {{EndDate}}</p>
            </div>
            <div class="col-md-4 bottom-content">
            <p>Pret: {{Price}} lei</p>
            <p>Locuri: {{MaxParticipants}}</p>
            </div>
            <btn class="btn btn-primary btn-join" > Inscriete acum! </btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Event",
  props: ["Picture", "Title", "Description", "BeginDate", "EndDate", "MaxParticipants", "Price"],
  setup() {
    const getImgUrl = (pic) => {
      return require("../assets/" + pic);
    };
    return { getImgUrl };
  },
};
</script>

<style scoped>
.main {
  width: 37vw !important;
  height: 17vh !important;
  margin-bottom: 10px;
}

.image-zone {
  height: 17vh !important;
  max-height: 17vh !important;
  max-width: 40vw !important;
  justify-content: center;
  display: flex;
  align-items: center !important;
  object-fit: fill !important;
  overflow: hidden;
}

.image {
  min-width: 112% !important;
  min-height: 100% !important;
  object-fit: fill !important;
}

.content-zone {
  height: 17vh !important;
  max-height: 17vh !important;
  max-width: 40vw !important;
  justify-content: center !important;
  padding-top: 6px;
  padding-bottom: 2px;
}

.line {
  margin-top: -5px !important;
}

.bottom-content-container {
  margin-top: -5px;
  height: 40%;
  display: flex;
}

.grid {
  border: 2px solid black;
}

.description {
  height: 4vh;
  margin-top: -5px;
}

.bottom-content{
    font-size:15px;
}

.btn-join{
    font-size:15px;
}
</style>