<template>
  <div class="footer">
    <div class="wrapper">
      <div class="footer__contacts">
        <div class="footer__contacts-item">
          <img src="../../assets/images/icon-address.png" class="footer__contacts-img" alt />
          МО, г. Балашиха, ш. Энтузиастов, д.32
        </div>
        <div class="footer__contacts-item">
          <img src="../../assets/images/icon-time.png" class="footer__contacts-img" alt />
          с 8:00 до 18:00 будние дни
        </div>
        <div class="footer__contacts-item">
          <img src="../../assets/images/icon-phone.png" class="footer__contacts-img" alt />
          <a class="footer__contacts-link" href="tel:+74993900877">8 (499) 390 08 77</a>
        </div>
        <div class="footer__contacts-item">
          <img src="../../assets/images/icon-post.png" class="footer__contacts-img" alt />
          <a class="footer__contacts-link" href="mailto:3900877@bk.ru">3900877@bk.ru</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.footer {
  border-top: 60px solid #727270;
  padding-top: 40px;
  padding-bottom: 60px;
}
.footer__contacts {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 75%;
  margin: auto;
}
.footer__contacts-item {
  color: #444;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.footer__contacts-img {
  margin-right: 10px;
}
.footer__contacts-link {
  color: #444;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.3s;
}
.footer__contacts-link:hover {
  border-bottom-color: #444;
}
</style>
