<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CvItem",
  props:{
    color:{
      type: String,
      default: 'red'
    },
    title:{
      type: String,
      default: 'title'
    },
    estab:{
      type: String,
      default: 'estab'
    },
    end_date:{
      type: String,
      default: 'end date'
    },
    start_date:{
      type: String,
      default: 'start date'
    },
    description:{
      type: String,
      default: 'description'
    },
    is_section:{
      type: Boolean,
      default: false
    }
  },
})
</script>

<template>
  <div v-if="is_section">
    <h2>{{ title }}</h2>
  </div>
  <div v-else class="mr-2">
  <v-card>
    <v-card-title :class="`bg-${color}`">{{ title }}</v-card-title>
    <v-card-subtitle> {{ estab }}</v-card-subtitle>
    <v-card-subtitle> {{ start_date }} -> {{ end_date }}</v-card-subtitle>
    <v-card-text v-html="description">
    </v-card-text>
  </v-card>
  </div>
</template>

<style scoped>

</style>