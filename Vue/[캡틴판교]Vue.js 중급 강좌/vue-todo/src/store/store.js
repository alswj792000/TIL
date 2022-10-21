import Vue from 'vue'
import Vuex from 'vuex'
// 모듈화
import todoApp from './modules/todoApp'

Vue.use(Vuex); 

// const storage = {
//     fetch() { 
//         const arr = [];
//         if (localStorage.length > 0) {
//             for (let i = 0; i < localStorage.length; i++) { 
//                 arr.sort();
//                 if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
//                     arr.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); 
//                 }
//             }
//         }
//         return arr;
//     }
// };

export const store = new Vuex.Store({ 
    // state: {
    //     todoItems: storage.fetch()
    // },
    // getters, 
    // mutations 
    modules: {
        todoApp: todoApp // todoApp: todoApp) todoApp에서 선언한 내용들이 담겨서 넘어온당
    }
});