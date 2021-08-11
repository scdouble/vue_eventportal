<template>
  <footer className="footer">
    <p>Copyright &copy; XXXXXXX 2021</p>
    <p>
      <router-link :to="{ name: 'about' }">About This Project</router-link>
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  margin: 100px 0 40px;
  text-align: center;
}

.footer p {
  margin: 5px 0;
}
</style>
