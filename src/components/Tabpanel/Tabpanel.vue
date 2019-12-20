<template>
  <div class="tab-panel">
    <div class="tabs">
      <div
        :class="`tab-item ${panelActive === tab.id ? 'tab-item_active' : ''}`"
        v-for="tab in tablist"
        :key="tab.id"
        :tab="tab.name"
        @click="checkPanel(tab.id)"
      >
        <span class="tab-item__num">{{ tab.id }}</span>
        <span class="tab-item__name">{{ tab.name }}</span>
      </div>
    </div>
    <div class="panel">
      <div
        :class="`panel-item panel-item_${tab.id}`"
        v-show="panelActive === tab.id"
        v-for="tab in tablist"
        :key="tab.id"
        :tab="tab.name"
      >
        <div class="wrapper">
          <h1 class="panel__head">{{ tab.name }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabpanel",
  data: function() {
    return {
      panelActive: 1
    };
  },
  methods: {
    checkPanel: function(num) {
      this.panelActive = num;
    }
  },
  computed: {
    tablist: function() {
      return [
        { id: 1, name: "Сети и системы связи" },
        { id: 2, name: "It услуги" },
        { id: 3, name: "Силовая инженерия" },
        { id: 4, name: "Системы безопасности" },
        { id: 5, name: "Аудио/видео решения" },
        { id: 6, name: "Разработка ПО" }
      ];
    }
  }
};
</script>

<style lang="css">
.tab-panel {
  height: 480px;
  display: flex;
  flex-direction: row;
  margin-left: -200px;
  align-items: flex-end;
}
.tabs {
  max-width: 200px;
}
.tab-item {
  height: 80px;
  width: 200px;
  background-color: #064892;
  border: 1px solid #ffffff;
  text-transform: uppercase;
  padding-left: 10px;
  box-sizing: border-box;
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 15px;
  line-height: 20px;
  text-align: left;
}
.tab-item_active {
  background-color: #950505;
  transition: 0.3s linear;
}
.tab-item_active:after {
  content: "";
  border-width: 38px 90px 38px 50px;
  border-style: solid;
  border-color: transparent transparent transparent #950505;
  position: absolute;
  top: 0;
  right: -140px;
  z-index: 100;
}
.tab-item__num {
  border-radius: 50%;
  border: 1px solid #ffffff;
  height: 26px;
  min-height: 26px;
  width: 26px;
  min-width: 26px;
  text-align: center;
  line-height: 26px;
  color: #ffffff;
  font-size: 15px;
  margin-right: 20px;
}

.panel {
  width: calc(100% - 200px);
  height: 100%;
}
.panel-item {
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  padding-top: 40px;
}
.panel-item_1 {
  background-image: url(../../assets/images/tabpanel/1.jpg);
}
.panel-item_2 {
  background-image: url(../../assets/images/tabpanel/2.jpg);
}
.panel-item_3 {
  background-image: url(../../assets/images/tabpanel/3.jpg);
}
.panel-item_4 {
  background-image: url(../../assets/images/tabpanel/4.jpg);
}
.panel-item_5 {
  background-image: url(../../assets/images/tabpanel/5.jpg);
}
.panel-item_6 {
  background-image: url(../../assets/images/tabpanel/6.jpg);
}
.panel__head {
  margin: 0;
  text-transform: uppercase;
  font-size: 40px;
  text-shadow: 5px 5px 10px #064892, -5px -5px 10px #064892,
    5px 5px 10px #064892, -5px -5px 10px #064892;
  line-height: 1.15;
  color: #fff;
  padding-bottom: 100px;
  font-weight: 300;
}
</style>
