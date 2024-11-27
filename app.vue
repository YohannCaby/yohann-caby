<template>
  <v-responsive class="border rounded">
    <v-theme-provider :theme="useCVStore().theme">
      <v-app>

      <TopNavBar/>
        <Bubble />
      <v-main class="d-flex justify-center align-center">

        <div class="d-flex flex-column" style="max-width: 800px; width: 100%;">
          <Presentation />
          <v-tabs
              align-tabs="center"
              v-model="tab">
            <v-tab value="experiences">
              Expériences
            </v-tab>
            <v-tab value="competences">
              Compétences
            </v-tab>
          </v-tabs>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="experiences">
              <CvAspectSwitch />
              <Chronology class="mt-2"/>
            </v-tabs-window-item>
            <v-tabs-window-item value="competences">
                <Skills />
            </v-tabs-window-item>
          </v-tabs-window>
        </div>
        <div>
          <DialogVisitCard />
        </div>
      </v-main>
        <v-footer class="d-flex flex-column">
          <div class="text-center">
            {{ new Date().getFullYear() }} - Yohann CABY
          </div>
          <v-divider></v-divider>
          <div class="text-center">
            Powered by Nuxt <v-icon><a target="_blank" href="https://nuxt.com/" ><img src="/img/nuxt.svg" height="20" width="20" alt="Nuxt" ></a></v-icon>
            - Design by Vuetify <v-icon><a target="_blank" href="https://vuetifyjs.com/en/" ><img src="/img/vuetify.png" height="20" width="20" alt="Vuetify"></a></v-icon>
            - Deploy on Infomaniak <v-icon><a target="_blank" href="https://www.infomaniak.com/" ><img src="/img/infomaniak.svg" height="20" width="20" alt="Infomaniak"></a></v-icon>
          </div>
        </v-footer>
      </v-app>
    </v-theme-provider>
  </v-responsive>
</template>
<script setup lang="ts">
const tab = ref('tab')

</script>
