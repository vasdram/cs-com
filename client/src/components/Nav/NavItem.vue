<template>
  <li class="nav__item">
    <router-link class="nav__link" :to="url">{{ name }}</router-link>
  </li>
</template>
<script>
export default {
  props: {
    id: Number,
    name: String,
    url: String
  },
  name: 'NavItem'
};
</script>
<style lang="css">
.nav__item {
  list-style: none;
}
.nav__link {
  display: block;
  color: #5b5b5b;
  font-size: 18px;
  text-transform: uppercase;
  padding: 0px 5px;
  text-decoration: none;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  padding-top: 2px;
  padding-bottom: 2px;
  transition: all 0.3s;
}

.nav__link:hover {
  color: #064892;
  border-bottom: 2px solid #064892;
  border-top: 2px solid #064892;
  opacity: 0.8;
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>
