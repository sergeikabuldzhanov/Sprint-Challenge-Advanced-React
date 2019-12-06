import {useState} from 'react';

export default function useLocalStorage(key, initialValue){
    const storeKey = key;
    const storeValue = initialValue;    
    
    
    const [storedValue, setStoredValue] = useState(()=>{
        const item = window.localStorage.getItem(storeKey);
        return item ? JSON.parse(item) : storeValue;
    });
    const setValue = value =>{
        setStoredValue(value);
        window.localStorage.setItem(storeKey, JSON.stringify(value));
    };
    
    console.log(window.localStorage.getItem(storeKey));
    
    
    return [storedValue, setValue];
}