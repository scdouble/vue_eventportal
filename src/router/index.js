// このファイルはルーターを作るためのもの
import { createRouter, createWebHashHistory } from "vue-router";
import EventList from "../pages/EventList";
import EventDetail from "../pages/EventDetail";
import TagEventList from "../pages/TagEventList";
import Home from "../pages/Home";
import About from "../pages/About";
import PageNotFound from "../pages/404";

// ルーターを作成する
const router = createRouter({
  routes: [
    { path: "/", component: Home },
    { name: "home", path: "/home", component: Home },
    { name: "about", path: "/about", component: About },
    { name: "event", path: "/event", component: EventList },
    {
      name: "eventsbytag",
      path: "/tag/:name",
      component: TagEventList,
      props: (route) => ({ name: route.params.name }),
    },
    { name: "eventdetail", path: "/event/:id", component: EventDetail },
    { path: "/:pathMatch(.*)*", component: PageNotFound },

    //   {
    //     name: "404",
    //     path: "/:pathMatch(.*)*",
    //     redirect: "/",
    //     component: PageNotFound,
    //   },
  ],

  history: createWebHashHistory(process.env.BASE_URL),
});

export default router;
