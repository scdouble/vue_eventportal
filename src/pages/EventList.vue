<template>
  <h1>イベント一覧</h1>
  <EventItem v-for="event in events" :key="event.id" :event="event" />
</template>

<script>
import EventItem from "./EventItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "EventList",

  computed: {
    ...mapGetters(["events"]),
  },
  components: {
    EventItem,
  },
  mounted() {},
};
</script>

<style>
</style>