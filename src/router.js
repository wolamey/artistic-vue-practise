import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home/Home.vue";
import Calculator from "./pages/Calculator/Calculator.vue";
import Examples from "./pages/Examples/Examples.vue";
import Contacts from "./pages/Contacts/Contacts.vue"

const routes = [
  {
    path: "/",
    component: Home,
    props: (route) => ({
      videoSrc: route.params.videoSrc,
      isVideoPlaying: route.params.isVideoPlaying,
      setVideo: route.params.setVideo,
    }),
  },
  { path: '/calculator', component: Calculator },
  { path: '/examples', component: Examples },
  {path: '/contacts', component: Contacts},
  // // { path: '/news', component: News },
  // // { path: '/testimonails', component: Testimonails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
