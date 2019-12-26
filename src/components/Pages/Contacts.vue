<template>
  <div class="wrapper">
    <h1 class="main-page__title">Контакты</h1>
    <section class="main-page__contacts-map">
      <div class="main-page__contacts-container">
        <p
          class="main-page__contacts-text"
        >У Вас есть вопрос? Не откладывайте его и задайте прямо сейчас! Вы можете сделать это любым удобным для вас способом:</p>
        <ul class="main-page__contacts-item">
          <li class="main-page__contacts-list">
            <a
              class="main-page__contacts-icon main-page__contacts-icon-phone"
              href="tel:+74993900877"
            ></a>
            По телефону:
            <a href="tel:+74993900877">8 (499) 390 08 77</a>
          </li>
          <li class="main-page__contacts-list">
            <a
              class="main-page__contacts-icon main-page__contacts-icon-tel"
              href="tg://resolve?domain=cs_com"
            ></a>
            В Telegram:
            <a href="tg://resolve?domain=cs_com">@cs_com</a>
          </li>
          <li class="main-page__contacts-list">
            <a
              class="main-page__contacts-icon main-page__contacts-icon-email"
              href="mailto:3900877@bk.ru"
            ></a>
            По Email:
            <a href="mailto:3900877@bk.ru">3900877@bk.ru</a>
          </li>
          <li class="main-page__contacts-list main-page__contacts-list_w">
            <a
              class="main-page__contacts-icon main-page__contacts-icon-whatsapp"
              href="whatsapp://send?phone=+79150220137"
            ></a>
            <a
              class="main-page__contacts-icon main-page__contacts-icon-viber"
              href="viber://chat?number=89150220137"
            ></a>
            В Viber &amp; Whatsapp:
            <a href="tel:+79150220137">8 (915) 022 01 37</a>
          </li>
        </ul>
        <p class="main-page__contacts-text main-page__contacts-text--clock">
          График работы: с 8:00 до 18:00 будние дни
          <br />Адрес: МО, г. Балашиха, ш. Энтузиастов, д.32
        </p>
        <p
          class="main-page__contacts-text main-page__contacts-text--info"
        >Также Вы можете воспользоваться формой обратной связи, после заполнения нажмите на кнопку «Отправить», с Вами обязательно свяжутся в ближайшее время.</p>
      </div>
      <div class="main-page__contacts-map-item">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A9971db0a34f3f7868eaacb29f5938f8ad8b693f1493e946533431c3c7f61abeb&amp;source=constructor"
          width="100%"
          height="400"
          frameborder="0"
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contacts"
};
</script>

<style>
</style>
