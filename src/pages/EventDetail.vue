<template>
  <h2>Event Detail:</h2>
  <h3>Event ID: {{ eventID }}</h3>
  <h3>Event Title:</h3>
  <h3>Event Time:</h3>
  <h3>Event Place:</h3>
  <h3>Event Spakers:</h3>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "EventDetail",

  computed: {
    eventID() {
      return this.$route.params.id;
    },
    ...mapGetters(["eventById"]),
  },
  created() {
    console.log(this.$store);
    console.log(this.$route.params.id);
    const event = this.$store.getters.eventById(this.$route.params.id);

    console.log(event);
  },
};
</script>

<style>
</style>