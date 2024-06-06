import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home/Home.vue";
import Prices from "./pages/Prices/Prices.vue";
import Calculator from "./pages/Calculator/Calculator.vue";

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
  { path: "/prices", component: Prices },
  { path: '/calculator', component: Calculator },
  // // { path: '/examples', component: Examples },
  // // { path: '/news', component: News },
  // // { path: '/testimonails', component: Testimonails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
