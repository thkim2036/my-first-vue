import {createApp} from 'vue'
import App from './App.vue'
import {createStore, createLogger} from "vuex";

const debug = process.env.NODE_ENV !== 'production';
console.log(`debug :: ${debug}`);
console.log(process.env.NODE_ENV);

const store = createStore({
        // modules: {
        //     moduleA
        // },
        state: {
            count: 0
        },
        mutations: {
            increment(state) {
                state.count++;
            }
        },
        actions: {
            increment({commit}) {
                commit('increment');
            },
        },
        strict: debug,
        plugins: debug ? [createLogger()] : []
    }
)

// createApp(App).mount('#app')
const app = createApp(App);
app.use(store).mount('#app')
