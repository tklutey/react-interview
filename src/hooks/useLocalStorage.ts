
export const useLocalStorage = () => {
    return {
        loadFromLocalStorage: (key: string) => {
            const value = localStorage.getItem(key);
            if (value) {
                return JSON.parse(value);
            }
            return null;
        },
        saveToLocalStorage: (key: string, value: any) => {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
}