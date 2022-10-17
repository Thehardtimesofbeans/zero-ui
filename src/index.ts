import { createApp } from "vue";

import SButton from "./button";
import SFCButton from "./SFCButton.vue"

import ZeroUI from "./entry";

//createApp(SButton)

createApp(SFCButton)
    .mount("#app");

// createApp({
//     template: `
//             <div>
//                 <SButton>普通按钮</SButton>
//             </div>
//         `
// })
//     .use(ZeroUI)
//     .mount("#app");