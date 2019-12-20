<template>
  <nav class="nav">
    <div class="wrapper">
      <ul class="nav__list">
        <NavItem
          v-for="item in navList"
          :key="item.id"
          v-bind:url="item.url"
          v-bind:name="item.name"
        />
      </ul>
    </div>
  </nav>
</template>

<script>
import NavItem from './NavItem';
export default {
  name: 'Nav',
  computed: {
    navList() {
      return [
        { id: 0, url: '/o-kompanii', name: 'О компании' },
        { id: 1, url: '/proekty', name: 'Проекты' },
        { id: 2, url: '/proektirovanie', name: 'Проектирование' },
        { id: 3, url: '/stroitelstvo', name: 'Строительство' },
        { id: 4, url: '/shop', name: 'Магазин' },
        { id: 5, url: '/kontakty', name: 'Контакты' }
      ];
    }
  },
  components: {
    NavItem
  }
};
</script>
<style lang="css">
.nav__list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
