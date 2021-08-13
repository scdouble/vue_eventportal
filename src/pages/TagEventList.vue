<template>
  <h1>#{{ tagName }}に関連するイベント</h1>

  <EventItem v-for="event in events" :key="event.id" :event="event" />
</template>

<script>
import EventItem from "./EventItem.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute } from "vue-router";

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
    console.log(name);
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