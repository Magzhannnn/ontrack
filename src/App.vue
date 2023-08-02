<script setup>
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimelineVue from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgressVue from './pages/TheProgress.vue'
import { generateTimeLineItems, normolizePageHash } from './funtions'

import { ref } from 'vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './consts'

const currentPage = ref(normolizePageHash())
const timelineItems = generateTimeLineItems()

const goTo = (page) => {
  currentPage.value = page
}
</script>

<template>
  <TheHeader @go-to-timeline="goTo(PAGE_TIMELINE)" @go-to-progress="goTo(PAGE_PROGRESS)" />

  <main class="flex flex-grow flex-col">
    <TheTimelineVue v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgressVue v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
