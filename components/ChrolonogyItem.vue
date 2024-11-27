<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ChrolonogyItem",
  props:{
    show_opposite:{
      type: Boolean,
      default: false
    },
    item:{
      type: Object,
      default: {
        title: 'title',
        estab: 'estab',
        start_date: 'start date',
        end_date: '...',
        description: 'description',
        icon: 'mdi-briefcase',
        color: 'primary',
        has_dot: true
      }
    }
  },
  data() {
    return {

    }
  }
})
</script>

<template>
  <v-timeline-item
    :hide-dot="item.is_section"
    :dot-color="item.color"
  >
    <template v-slot:icon>
      <v-icon>
        <img height="20" width="20" :src="item.icon" :alt="item.iconAlt" />
      </v-icon>
    </template>
      <CvItem
          :color="item.color"
          :title="item.title"
          :estab="item.estab"
          :start_date="item.start_date"
          :end_date="item.end_date"
          :description="item.description"
          :is_section="item.is_section"/>
    <template v-slot:opposite v-if="show_opposite">
      <div
          :class="`pt-1 headline font-weight-bold text-${item.color}`"
          v-text="item.year"
      ></div>
    </template>
  </v-timeline-item>
</template>

<style scoped>

</style>