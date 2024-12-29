<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
name: "Presentation",
  data() {
    return {
      presentation: `
      <p>Développeur passionné par la technique et les nouvelles technologies.</p>
      <p>En 2017, j'ai entrepris une reconversion professionnelle pour devenir un expert du développement web. Depuis, j'ai acquis une solide expertise et une riche expérience, que je mets à profit pour contribuer efficacement à des projets ambitieux et innovants.</p>
      `
    }
  }
})
</script>

<template>
  <v-card flat>
    <v-card-title>Présentation</v-card-title>
    <v-card-text v-html="presentation" />
  </v-card>
</template>

<style scoped>

</style>