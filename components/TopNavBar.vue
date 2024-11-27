<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TopNavBar",
  data() {
    return {
      cv: useCVStore(),
    }
  }
})
</script>

<template>
  <v-navigation-drawer location="top" tile mobile-breakpoint="xs" width="150">
    <v-list-item title="Yohann Caby" subtitle="Fullstack senior web developer" class="flex ">
      <template v-slot:prepend>
          <v-avatar image="/avatar.png" size="80" @mouseenter="() => cv.toggleShowVisitCard(true)">
          </v-avatar>
      </template>

      <template v-slot:append>
        <ThemeSwith />
      </template>
    </v-list-item>
  </v-navigation-drawer>
</template>

<style scoped>

</style>