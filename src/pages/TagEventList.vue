<template>
  <h1>#{{ tagName }}に関連するイベント</h1>

  <EventItem v-for="event in events" :key="event.id" :event="event" />
</template>

<script>
import EventItem from "./EventItem.vue";
import { useStore } from "vuex";
import { computed, watch, ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "EventList",
  components: {
    EventItem,
  },
  props: {
    name: {
      type: String,
      default: "Vue!",
    },
  },
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const { name } = route.params;

    //console.log(props);

    // watch(
    //   props,
    //   (newValue, oldValue) => {
    //     router.push({
    //       name: "eventsbytag",
    //       params: { name: newValue.name },
    //     });
    //   },
    //   { deep: true }
    // );
    return {
      tagName: name,
      events: computed(() => store.getters.eventsFilteredByTag(name)),
    };
  },

  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        // console.log(toParams, previousParams);
        // react to route changes...
        // this.$router.push({
        //   name: "eventsbytag",
        //   params: { name: toParams.name },
        // });
      }
    );
  },
};
</script>

<style>
</style>