// このファイルはルーターを作るためのもの
import { createRouter, createWebHistory } from "vue-router";
import EventList from "../pages/EventList";
import EventDetail from "../pages/EventDetail";
import Home from "../pages/Home";
import About from "../pages/About";
// import PageNotFound from "../pages/404";

// ルーターを作成する
const router = createRouter({
  routes: [
    { path: "/", component: Home },
    { name: "home", path: "/home", component: Home },
    { name: "about", path: "/about", component: About },
    { name: "event", path: "/event", component: EventList },
    { name: "eventdetail", path: "/event/:id", component: EventDetail },

    //   {
    //     name: "404",
    //     path: "/:pathMatch(.*)*",
    //     redirect: "/",
    //     component: PageNotFound,
    //   },
  ],

  history: createWebHistory(process.env.BASE_URL),
});

export default router;
