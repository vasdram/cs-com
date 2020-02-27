<template>
  <div class="z">
    <div class="layout">
      <aside class="sidebar"></aside>
      <div class="body">
        <Header phone="8 (499) 390 08 77" email="3900877@bk.ru" />
        <slot></slot>
        <Footer />
      </div>
    </div>
    <div class="footer-line"></div>
  </div>
</template>

<script>
import Header from '../Header';
import Footer from '../Footer/Footer';

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="css">
.z {
  height: 100%;
}
.layout {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  min-height: 100%;
  margin-bottom: -40px;
}

.sidebar {
  width: 200px;
  background-color: #727270;
}
.body {
  flex-grow: 1;
}
.footer-line {
  height: 40px;
  background-color: #950505;
  border-top: 10px solid #fff;
}
</style>
