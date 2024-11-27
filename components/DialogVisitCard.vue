<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  name: "DialogVisitCard",
  data(){
    return {
      cv: useCVStore()
    }
  },
  computed: {
    showVisitCard: {
      get(): boolean{
        return this.cv.show_visit_card;
      },
      set(value: boolean){
        this.cv.toggleShowVisitCard(value);
      }
    }
  }
})
</script>

<template>
  <v-dialog v-model="showVisitCard" max-width="400">
    <VisitCard />
  </v-dialog>
</template>

<style scoped>

</style>