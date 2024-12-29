<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "VisitCard"
})
</script>

<template>
<v-list max-height="300" max-width="400" class="elevation-5 ma-2 rounded">
  <v-list-item
    title="Yohann CABY"
    subtitle="Fullstack senior web developer"
  >
    <template v-slot:append>
      <v-btn icon class="ma-2" href="https://www.linkedin.com/in/yohann-caby" target="_blank">
        <v-icon>
          <img src="/img/linkedin.svg" alt="linkedin" height="30" width="30"  />
        </v-icon>
      </v-btn>
      <v-btn icon class="ma-2" href="https://github.com/YohannCaby" target="_blank">
        <v-icon>
          <img src="/img/github.svg" alt="github" height="30" width="30" />
        </v-icon>
      </v-btn>
    </template>
  </v-list-item>
  <v-list-item
    prepend-icon="mdi-card-account-mail-outline"
  >
    <a href="mailto:contact@yohann-caby.fr" target="_blank">contact@yohann-caby.fr</a>
  </v-list-item>
  <v-list-item
    prepend-icon="mdi-card-account-phone-outline"
  >
    06.72.82.00.35
  </v-list-item>
  <v-list-item
    prepend-icon="mdi-download"
  >
    <a href="/CV%20Yohann%20CABY.pdf" target="_blank">CV Yohann CABY.pdf</a>
  </v-list-item>
</v-list>
</template>

<style scoped>

</style>