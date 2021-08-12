<template>
  <div class="error">
    <h1>Sorry, Page not found!</h1>
    <button class="btn" @click="backToHome">Back to Home</button>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    function backToHome() {
      router.push({ name: "home" });
    }
    return {
      backToHome,
    };
  },
};
</script>

<style>
.error {
  text-align: center;
  margin: 100px 0 200px;
}

.error h1 {
  font-size: 50px;
}
</style>