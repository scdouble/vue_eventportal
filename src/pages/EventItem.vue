<template>
  <div class="event">
    <div class="image">
      <img src="../assets/eventsample.jpg" />
    </div>

    <div class="info">
      <h3>{{ event.title }}</h3>
      <span>{{ event.datetime }} at {{ event.streetAddress }}</span>
    </div>

    <button class="btn" @click="showDetail(event)">詳細を見る</button>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";

export default {
  name: "EventItem",

  props: ["event"],

  setup() {
    const router = useRouter();
    const route = useRoute();

    function showDetail(event) {
      router.push({
        name: "eventdetail",
        // path: "/eventlist/detail",
        params: { id: event.id },
      });
    }

    return {
      showDetail,
    };
  },
};
</script>

<style scoped>
.event {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 13px;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.1);
}

.img {
  flex: 1;
  margin: 10px;
}

.info {
  flex: 2;
}

@media (max-width: 600px) {
  .event {
    flex-direction: column;
    text-align: center;
  }

  .info {
    margin-bottom: 20px;
  }
}
</style>