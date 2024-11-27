<script lang="ts">
import {defineComponent} from 'vue'
import {getHueSaturation} from "~/utils";

export default defineComponent({
  name: "SkillItem",
  props:{
    name:{
      type: String,
      default: 'title'
    },
    icon:{
      type: String,
      default: '/img/default.svg'
    },
    iconcolor:{
      type: String,
      default: 'red'
    },
    starcolor:{
      type: String,
      default: 'red'
    },
    rating:{
      type: Number,
      default: 0
    }
  },
  computed: {
    hue(){
      return getHueSaturation(this.iconcolor).hue
    },
    saturation() {
      return getHueSaturation(this.iconcolor).saturation
    }
  }
})
</script>

<template>
  <v-list-item >
  <v-list-item-title>
    <div class="d-flex justify-space-between">

        <img :src="icon" height="30" width="30" :alt="name">

        <h3>{{ name }}</h3>

        <v-rating
            readonly
            half-increments
            density="compact"
            :model-value="rating"
            :color="starcolor"></v-rating>
  </div>
  </v-list-item-title>
  </v-list-item>
</template>

<style scoped>

</style>