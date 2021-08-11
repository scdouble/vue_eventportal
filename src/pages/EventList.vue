<template>
  <h1>開催予定のイベント</h1>
  <EventItem v-for="event in events" :key="event.id" :event="event" />
</template>

<script>
import EventItem from "./EventItem.vue";
import { mapGetters, mapState } from "vuex";
export default {
  name: "EventList",

  computed: {
    ...mapState(["events"]),
  },
  components: {
    EventItem,
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style>
</style>