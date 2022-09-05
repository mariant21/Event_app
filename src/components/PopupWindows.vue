<template>
  <div class="popup">
    <div :class="Class">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{Title}}</h5>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="TogglePopup()">
            X </button>
        </div>
        <div class="modal-body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopupWindow",
  props: ["TogglePopup", "Title", "Class"],

  setup() {
    console.log("deschidem popup");
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
}
.big {
    min-width: 50vw;
    background: #fff;
    padding: 32px;
  }

.medium {
    min-width: 30vw;
    background: #fff;
    padding: 32px;
  }
</style>