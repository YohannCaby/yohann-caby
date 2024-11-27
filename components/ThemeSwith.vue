<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ThemeSwith",
  data() {
    return {
      state: useCVStore().theme === 'dark',
    }
  },
  mounted() {
    const theme = localStorage.getItem('theme');
    if (theme !== null) {
      useCVStore().theme = theme;
    }
  }
})
</script>

<template>
  <v-switch hide-details
            inset
            v-model="state"
            @change="useCVStore().toggleTheme"
            true-icon="mdi-weather-sunny"
            false-icon="mdi-weather-night">
  </v-switch>
</template>

<style scoped>

</style>