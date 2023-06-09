import { useEffect, useRef, useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { pastSearch } from '../../store/search'
import axios from "axios"
import MainView from "./presenter"

import { observeElements } from "/src/logics/observer";

export default function MainContainer() {
    const [showComponent, setShowComponent] = useState(false);
    const prevScrollY = useRef(0);

    useEffect(() => {
        function handleScroll() {
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const isScrollDown = scrollY > prevScrollY.current;
                prevScrollY.current = scrollY;

                if (isScrollDown && scrollY >= 675 && !showComponent) {
                    setShowComponent(true);
                } else if (!isScrollDown && scrollY < 675 && showComponent) {
                    setShowComponent(false);
                }
            });
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showComponent]);



    const arrivalKeyword = useRef('');
    const [arrival, setArrival] = useState('');

    const pastSearchLog = useSelector(state => state.search.value.pastKeyWord);
    const dispatch = useDispatch();

    const saveLog = (pastName) => {
        dispatch(pastSearch(pastName))
    }

    const searchStation = () => {
        const arrivalStationName = arrivalKeyword.current.value;
        setArrival(arrivalStationName);
    }

    useEffect(() => {
        if (arrival !== '') {
            axios.get(`http://swopenAPI.seoul.go.kr/api/subway/4b6965764370726f32377250684c56/json/realtimeStationArrival/0/5/${arrival}`)
                .then((res) => console.log(res.data))
        }
        saveLog(arrival);
        console.log(pastSearchLog);
    }, [arrival])

    return <MainView
        searchRef={arrivalKeyword}
        searchClickHandler={searchStation}
        pastSearchLog={pastSearchLog}
        dispatch={saveLog}
        showComponent={showComponent} />
}