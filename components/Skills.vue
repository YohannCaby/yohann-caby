<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Skills",
  data() {
    return {
      cv: useCVStore(),
      toogle: false
    }
  },
  computed: {
    switch_label(){
      return this.toogle ? 'Tout fermer' : 'Tout ouvrir'
    }
  }
})
</script>

<template>
  <v-switch v-model="toogle" color="primary" :label="switch_label" @update:modelValue="($event) => {if($event){cv.open_skill_panel = cv.skills.map(x => x.section)}else{cv.open_skill_panel=[]}}"/>
  <v-expansion-panels v-model="cv.open_skill_panel">
    <v-expansion-panel v-for="skill in cv.skills" :key="skill.section" :value="skill.section">
      <v-expansion-panel-title :color="skill.color"><h2>{{ skill.section }}</h2></v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-list>
          <SkillItem v-for="o in skill.items" :key="o.name"
                     :name="o.name"
                     :icon="o.icon"
                     :iconcolor="o.color"
                     :starcolor="skill.color"
                     :rating="o.rating"/>
        </v-list>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped>

</style>