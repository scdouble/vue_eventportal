<template>
  <h1>#に関連するイベント</h1>
  <EventItem v-for="event in events" :key="event.id" :event="event" />
</template>

<script>
import EventItem from "./EventItem.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "EventList",
  components: {
    EventItem,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    // const router = useRouter();
    const { name } = route.params;

    return {
      tagName: name,
      events: computed(() => store.getters.eventsFilteredByTag(name)),
    };
  },
  created() {},
};
</script>

<style>
</style>