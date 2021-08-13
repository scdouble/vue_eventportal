<template>
  <button class="btn-tag" @click="showEventByTag(tagName)">
    #{{ tagName }}
  </button>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "Tag",
  props: {
    tagName: String,
  },
  setup() {
    const router = useRouter();
    function showEventByTag(tagName) {
      router.push({
        name: "eventsbytag",
        // path: "/eventlist/detail",
        params: { name: tagName },
      });
    }
    return { showEventByTag };
  },
};
</script>

<style>
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
</style>