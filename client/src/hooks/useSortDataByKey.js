import useLocalStorage from './useLocalStorage';

export default function useSortDataByKeys(data = [], key){
    const [keyToSortBy, setKeyToSortBy] = useLocalStorage("keyToSortBy", key);
    const sortedData = data.sort((a,b)=>{
        return a[keyToSortBy] > b[keyToSortBy] ? 1 : -1;
    })
    return [keyToSortBy ? sortedData : data, setKeyToSortBy];
}