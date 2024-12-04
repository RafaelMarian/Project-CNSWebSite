<script>
export default {
  data() {
    return {
      infoHover: false,
      premiiHover: false,
      evenimenteHover: false,
      contactHover: false,
    }
  },
}
</script>

<template>
  <header class="h-15 w-full" style="border-bottom: 2px solid; background-color: rgb(160, 160, 160);">
    <div class="h-full container px-12 mx-auto flex items-center flex-nowrap">
      <NuxtLink to="/" class="flex items-center mr-auto">
        <img src="/logo.png" class="h-25 mx-auto mb--10 hover:opacity-75 transform hover:scale-110 transition duration-300">
      </NuxtLink>
      <QSpace />
      <QSeparator vertical class="separator" />
      <QBtn
        stretch
        flat
        label="Info"
        to="/about"
        class="nav-btn"
        :class="{ 'hover-effect': infoHover }"
        @mouseenter="infoHover = true"
        @mouseleave="infoHover = false"
      />
      <QSeparator vertical class="separator" />
      <QBtnDropdown stretch flat label="Matematica-Informatica" class="nav-btn">
        <QList dense>
          <QItem to="/subjects/1" exact>
            <QItemSection>
              <QItemLabel>Clasa IX</QItemLabel>
            </QItemSection>
          </QItem>
          <QItem to="/subjects/2" exact>
            <QItemSection>
              <QItemLabel>Clasa X</QItemLabel>
            </QItemSection>
          </QItem>
          <QItem to="/subjects/3" exact>
            <QItemSection>
              <QItemLabel>Clasa XI</QItemLabel>
            </QItemSection>
          </QItem>
          <QItem to="/subjects/4" exact>
            <QItemSection>
              <QItemLabel>Clasa XII</QItemLabel>
            </QItemSection>
          </QItem>
        </QList>
      </QBtnDropdown>
      <QSeparator vertical class="separator" />
      <QBtn stretch flat label="Premii" to="/premii" class="nav-btn" :class="{ 'hover-effect': premiiHover }" @mouseenter="premiiHover = true" @mouseleave="premiiHover = false" />
      <QSeparator vertical class="separator" />
      <QSeparator vertical />
      <QBtn stretch flat label="Evenimente" to="/eveniment" class="nav-btn" :class="{ 'hover-effect': evenimenteHover }" @mouseenter="evenimenteHover = true" @mouseleave="evenimenteHover = false" />
      <QSeparator vertical />
      <QSeparator vertical />
      <QBtn stretch flat label="Contact" to="/contact" class="nav-btn" :class="{ 'hover-effect': contactHover }" @mouseenter="contactHover = true" @mouseleave="contactHover = false" />
      <QSeparator vertical />
    </div>
  </header>
</template>

<style scoped>
.nav-btn {
  display: flex;
  align-items: center;
}

.hover-effect {
  background-color: #35352f;
  color: white;
  transform: translateY(-2px) translateZ(0);
  transition: all 0.5s;
  box-shadow: 0 20px 20px rgb(73, 70, 63);
}

.hover-effect:hover {
  background-color: #30302f;
  transform: translateY(0) translateZ(0);
  transition: all 0.5s;
  box-shadow: 0 10px 10px rgb(73, 70, 63);
}
</style>
