import SearchView from "./presenter"
import { useSelector } from 'react-redux';

export default function SearchContainer() {
    const pastSearch = useSelector((state) => { state })

    return <SearchView
        pastSearch={pastSearch} />
}