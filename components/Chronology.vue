<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Chronology",
  data() {
    return {
      cv: useCVStore(),
    }
  }
})
</script>
<template>
  <v-card flat class="d-none d-sm-flex">
    <v-timeline
      side="end"
      align="start"
    >
      <ChrolonogyItem
          v-for="item in cv.getItemOrganizedBy(cv.show_by_dates)"
          :key="item.id"
          :item="item"
          :show_opposite="cv.show_by_dates"/>
    </v-timeline>
  </v-card>
  <v-card flat class="d-sm-none">
    <CvItem
        v-for="item in cv.getItemOrganizedBy(cv.show_by_dates)"
        :key="item.id"
        :color="item.color"
        :title="item.title"
        :estab="item.estab"
        :start_date="item.start_date"
        :end_date="item.end_date"
        :description="item.description"
        :is_section="item.is_section"
        />
  </v-card>
</template>

<style scoped>

</style>