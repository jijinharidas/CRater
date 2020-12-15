// store.jsconst persistedState = loadState();
const store = createStore(
    app,
    persistedState
); store.subscribe(() => {
    saveState({
        todos: store.getState().todos
    });
});