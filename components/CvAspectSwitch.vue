<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CvAspectSwitch",
  data() {
    return {
      cv: useCVStore(),
    }
  },
  computed: {
    show_by_section_label(){
      return this.cv.show_by_dates ? 'Affichage classique' : 'Affichage chronologique'
    }
  }
})
</script>

<template>
  <v-switch
    v-model="cv.show_by_dates"
    :label="show_by_section_label"
    color="primary"/>
</template>

<style scoped>

</style>