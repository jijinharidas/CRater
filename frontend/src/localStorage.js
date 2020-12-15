export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('token');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}; 


export const saveState = (token) => {
    try {
        const serializedToken = JSON.stringify(token);
        localStorage.setItem('token', serializedToken);
    } catch {
        // ignore write errors
    }
};