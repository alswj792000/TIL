const storage = {
    fetch() { 
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) { 
                arr.sort();
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i)))); 
                }
            }
        }
        return arr;
    }
};

const state = {
    todoItems: storage.fetch()
};

const getters = {
    // getters 내용 들고오기 → 화살표 함수 제거
    storedTodoItems(state) { 
    return state.todoItems;
    }
};

const mutations = {
    // mutations 내용 들고오기 → 화살표 함수 제거
    addOneItem(state, todoItem) { 
    const obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
    },
    removeOneItem(state, payload) { 
        localStorage.removeItem(payload.todoItem.item); 
        state.todoItems.splice(payload.index, 1); 
    },
    toggleOneItem(state, payload) {
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed; 
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state) {
        localStorage.clear(); 
        state.todoItems = []; 
    }
};

export default { // 한개의 파일에서 한개만 추출 가능
    state,
    getters,
    mutations
}