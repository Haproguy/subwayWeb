import { Link } from "react-router-dom";

export default function MainView(props) {
    const { searchRef, searchClickHandler } = props

    return (
        <>
            <div>메인페이지</div>

            <input type="text" ref={searchRef} />
            <button onClick={searchClickHandler}>검색</button>
            <Link to='/Search'>검색</Link>
        </>
    );
}