<template>
  <div class="event">
    <div class="image">
      <img src="../assets/eventsample.jpg" />
    </div>

    <div class="info">
      <Tag v-for="(tag, index) in event.tags" :key="index" :tagName="tag" />

      <h3>{{ event.title }}</h3>
      <p>開催日時: {{ event.datetime }}</p>
      <p>開催場所: {{ event.streetAddress }}</p>
    </div>

    <button class="btn" @click="showDetail(event)">詳細を見る</button>
  </div>
</template>

<script>
import Tag from "../components/Tag";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "EventItem",
  components: {
    Tag,
  },
  props: {
    event: Object,
  },

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
  margin: 20px;
}

.btn-tag {
  font: inherit;
  font-size: 13px;
  background: skyblue;
  color: white !important;
  border: 0;
  border-radius: 20px;
  padding: 5px 15px;
  margin: 0 10px;
  cursor: pointer;
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