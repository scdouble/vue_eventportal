<template>
  <h2>イベント詳細:</h2>
  <h3>Event ID:</h3>
  {{ event.id }}
  <h3>Event Title:</h3>
  {{ event.title }}
  <h3>Event Time:</h3>
  {{ event.datetime }}

  <button>申し込み</button>

  <h3>Event Descriptions:</h3>
  {{ event.description }}
  <h3>Event Address:</h3>
  {{ event.streetAddress }}
  <h3>Event Spakers:</h3>
  <ul>
    <li v-for="speaker in event.speakers" :key="speaker.speakerId">
      {{ speaker.speakerName }}
    </li>
  </ul>
  <button>申し込み</button>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "EventDetail",
  setup() {
    const store = useStore();

    const route = useRoute();
    const { id } = route.params;

    return {
      event: computed(() => store.getters.eventById(id)),
    };
  },
  computed: {
    eventID() {
      return this.$route.params.id;
    },
  },
  mounted() {
    console.log("EventDetail", "mounted", this);
  },
};
</script>

<style>
</style>