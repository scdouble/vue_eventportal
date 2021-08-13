<template>
  <h1>近日開催のイベント</h1>
  <h2>注目キーワード</h2>

  <Tag tagName="SDGs" />
  <Tag tagName="DX" />
  <Tag tagName="テレワーク" />
  <Tag tagName="無料参加" />

  <h2>新着イベント</h2>

  <div class="card-events">
    <div class="card">
      <img src="../assets/eventsample.jpg" style="width: 100%" />
      <div class="container">
        <h3>EventName</h3>
        <p>xcepturi ullam quia labor</p>
        <button>詳細を見る</button>
      </div>
    </div>
    <div class="card">
      <img src="../assets/eventsample.jpg" style="width: 100%" />
      <div class="container">
        <h3>EventName</h3>
        <p>xcepturi ullam quia labor</p>
        <button>詳細を見る</button>
      </div>
    </div>
  </div>

  <h2>PICK UP</h2>
  <div class="card-events">
    <div class="card">
      <img src="../assets/eventsample.jpg" style="width: 100%" />
      <div class="container">
        <h3>EventName</h3>
        <p>xcepturi ullam quia labor</p>
        <button>詳細を見る</button>
      </div>
    </div>
    <div class="card">
      <img src="../assets/eventsample.jpg" style="width: 100%" />
      <div class="container">
        <h3>EventName</h3>
        <p>xcepturi ullam quia labor</p>
        <button>詳細を見る</button>
      </div>
    </div>
  </div>

  <h2>まもなく締め切り</h2>

  <div class="card-events">
    <div class="card">
      <img src="../assets/eventsample.jpg" style="width: 100%" />
      <div class="container">
        <h3>EventName</h3>
        <p>xcepturi ullam quia labor</p>
        <button>詳細を見る</button>
      </div>
    </div>
    <div class="card">
      <img src="../assets/eventsample.jpg" style="width: 100%" />
      <div class="container">
        <h3>EventName</h3>
        <p>xcepturi ullam quia labor</p>
        <button>詳細を見る</button>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "../components/Tag.vue";

export default {
  name: "Home",
  components: {
    Tag,
  },
};
</script>

<style scoped>
.card-events {
  display: flex;
  text-align: center;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-right: 10px;
  width: 350px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
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
</style>