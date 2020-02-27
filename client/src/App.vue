<template>
  <div id="app">
    <Layout>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script>
import './assets/styles/normalize.css';
import './assets/styles/common.css';
import './assets/styles/article.css';
import Layout from './components/Layout/Layout';

export default {
  name: 'app',
  components: {
    Layout
  }
};
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  height: 100%;
}
</style>
