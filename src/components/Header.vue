<template>
  <header class="header">
    <div class="wrapper header__wrapper">
      <router-link to="/" class="header__logo">
        <img src="../assets/images/logo.png" alt />
      </router-link>
      <div class="header__contacts">
        <button class="header__order-call-btn" @click="openModal">
          Заказать звонок
        </button>
        <a class="header__contacts-link" :href="`tel:${phone}`">{{ phone }}</a>
        <a class="header__contacts-link" :href="`mailto:${email}`">{{
          email
        }}</a>
      </div>
    </div>
    <Nav />
    <Modal v-if="isShowModal" @close="closeModal">Bla bla bla!!!</Modal>
  </header>
</template>

<script>
import Nav from './Nav/Nav';
import Modal from './Modal/Modal';

export default {
  props: {
    phone: String,
    email: String
  },
  data() {
    return { isShowModal: false };
  },
  name: 'Header',
  components: {
    Nav,
    Modal
  },
  methods: {
    closeModal() {
      this.isShowModal = false;
    },
    openModal() {
      this.isShowModal = true;
    }
  }
};
</script>

<style lang="css">
.header {
  margin-bottom: 20px;
}
.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__order-call-btn {
  border: none;
  background: linear-gradient(90deg, #064a93 0%, #26a9e1 100%);
  font-size: 14px;
  display: block;
  height: 30px;
  width: 165px;
  cursor: pointer;
  margin: 0 0 5px;
  color: #fff;
  text-align: left;
  line-height: 29px;
  text-decoration: none;
  position: relative;
  padding-left: 15px;
  margin-bottom: 10px;
}
.header__order-call-btn::after {
  content: '';
  width: 25px;
  position: absolute;
  height: 28px;
  border-left: 1px solid #fff;
  right: 0;
  top: 1px;
  background-image: url(../assets/images/right-arrow.png);
  background-repeat: no-repeat;
  background-position: 50%;
}

.header__logo {
  display: block;
}

.header__contacts {
  display: flex;
  flex-direction: column;
}

.header__contacts-link {
  color: #950505;
  font-size: 19px;
  text-decoration: none;
  text-align: right;
  opacity: 1;
  transition: all 0.3s;
  margin-bottom: 10px;
}

.header__contacts-link:hover {
  text-decoration: none;
  color: #324869;
  opacity: 0.8;
}
</style>
