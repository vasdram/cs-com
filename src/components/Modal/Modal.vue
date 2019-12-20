<template>
  <div class="modal">
    <div class="modal__overlay" @click="$emit('close')"></div>
    <div class="modal__body">
      <div class="modal__close" @click="$emit('close')">Закрыть</div>
      <div class="modal__close"></div>
      <slot>Modal!!!</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    toggleBodyClass(className, collback) {
      const body = document.body;
      document.querySelector;
      if (collback === 'add') {
        body.classList.add(className);
      } else {
        body.classList.remove(className);
      }
    }
  },
  mounted() {
    this.showModal;
    this.toggleBodyClass('no-scroll', 'add');
  },
  destroyed() {
    this.toggleBodyClass('no-scroll');
  }
};
</script>

<style>
.modal__overlay {
  opacity: 0.8;
  visibility: visible;
  background-color: #323338;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 101;
  transition: all 0.3s ease 0s;
}

.modal__body {
  background-color: #fff;
  border-radius: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 375px;
  height: 475px;
  margin: -230px 0 0 -185px;
  z-index: 1001;
  box-sizing: border-box;
  padding: 2%;
}
.modal__close {
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
</style>
