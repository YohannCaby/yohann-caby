<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Bubble",
  data() {
    return {
      cv: useCVStore(),
    }
  },
  mounted() {
    setTimeout(() => {
      const contactElement = document.querySelector('.contact');
      if (contactElement) {
        contactElement.classList.add('visible');
        setTimeout(() => {
          contactElement.classList.remove('visible');
        }, 30000);
      }
    }, 30000);
  },
  methods: {
    divHover() {
      const contactElement = document.querySelector('.contact');
      if (contactElement) {
        contactElement.classList.remove('visible');
      }
      this.cv.toggleShowVisitCard(true)
    }
  }
})
</script>

<template>
  <div class="contact text-center" @mouseover="divHover()">
    <p>Et si nous prenions contact?</p>
    <p>☝️ Mes coordonnées ici.</p>
  </div>
</template>

<style scoped>
.contact {
  position: fixed;
  top: 100px;
  left: 50px;
  width: 250px;
  height: 50px;
  border-radius: 10px;
  background-color: deepskyblue;
  opacity: 70%;
  z-index: 10;
  display: none;
}
.contact.visible{
  display: block;
}
.contact::after {
  content: '';
  position: absolute;
  border-style: solid;
  border-width: 0 10px 10px;
  border-color: deepskyblue transparent;
  display: block;
  width: 0;
  z-index: 10;
  top: -10px;
  left: 10px;
}
</style>