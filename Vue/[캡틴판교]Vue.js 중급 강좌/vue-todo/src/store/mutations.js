const addOneItem = (state, todoItem) => { 
    const obj = { completed: false, item: todoItem };
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}

const removeOneItem = (state, payload) => { 
    localStorage.removeItem(payload.todoItem.item); 
    state.todoItems.splice(payload.index, 1); 
}

const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed; 
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItems = (state) => {
    localStorage.clear(); 
    state.todoItems = []; 
}
// 객체 안이 아니라 각각의 속성이기때문에 ,는 필요 없다.

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }
// export 사용 화살표 함수를 이용한 함수식이 store로 빠질수 있다. 