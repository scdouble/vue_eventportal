<template>
  <h1>{{ event.title }}</h1>
  <h3>Event ID:</h3>
  <p>{{ event.id }}</p>

  
  <h3>Event Time:</h3>
 <p>{{ event.datetime }}</p> 

  <button class="btn">申し込み</button>

  <h3>Event Descriptions:</h3>
  <p>{{ event.description }}</p>
  <h3>Event Address:</h3>
  <p>{{ event.streetAddress }}</p>
  <h3>Event Spakers:</h3>
  <ul>
    <li v-for="speaker in event.speakers" :key="speaker.speakerId">
      {{ speaker.speakerName }}
    </li>
  </ul>
  <button class="btn">申し込み</button>
  <button class="btn-secondary" @click="backToEventList()">イベント一覧に戻る</button>
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
    const router = useRouter();
    const { id } = route.params;

    function backToEventList(){
      router.push('/event')
    }
    return {
      event: computed(() => store.getters.eventById(id)),
      backToEventList
    };
  },
  computed: {
    eventID() {
      return this.$route.params.id;
    },
  },
  mounted() {
    
  },
};
</script>

<style scoped>

.event {
    position: relative;
    padding-top: 40px;
}

.event h3 {
    font-size: 25px;
}

.event p {
    margin: 10px 0;
}

.image {
    margin-bottom: 20px;
}

.controls {
    position: absolute;
    right: 30px;
    top: 0;
}

.delete {
    margin-left: 20px;
    color: red;
}

.back {
    display: block;
    margin-top: 40px;
}
</style>