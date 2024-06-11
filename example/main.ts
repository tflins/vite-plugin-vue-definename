import { createApp } from "vue";
import Button from "./button.vue";
import App from "./App.vue";

createApp(App)
  .component(Button.name ?? "test-button", Button)
  .mount("#app");
