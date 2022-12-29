import { createStore } from "vuex";
import Cookies from "js-cookie";

const store = createStore({
    state() {
        return {
            token: Cookies.get("token") || "",
        }
    },
})

export default store