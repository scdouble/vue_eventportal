<template>
  <Header />

  <router-view></router-view>

  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: "Poppins", sans-serif;
  line-height: 1.8;
}

a {
  text-decoration: none;
  color: steelblue;
}

p {
  margin: 10px 0;
}

h1 {
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  background: red;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  border: 0;
  border-radius: 5px;
}

.btn:hover {
  opacity: 0.9;
}

.btn-secondary {
  font: inherit;
  font-size: 13px;
  background: #000;
  color: #fff !important;
  border: 0;
  border-radius: 5px;
  padding: 5px 15px;
  margin: 0 20px;
  cursor: pointer;
}

.btn-secondary:hover {
  opacity: 0.8;
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-icon svg {
  margin-right: 5px;
}
</style>
