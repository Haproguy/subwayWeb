import { Link } from "react-router-dom";

import Component1 from "../../components/component1";
import Component2 from "../../components/component2";
import styles from '../style/mainPage.module.scss';

export default function MainView(props) {
    const { searchRef, searchClickHandler, showComponent } = props

    return (
        <>
            <div>메인페이지</div>

            <input type="text" ref={searchRef} />
            <button onClick={searchClickHandler}>검색</button>
            <Link to='/Search'>검색</Link>

            <div className={styles.boxContainer} >
                {showComponent &&
                    <>
                        <Component1 />

                        <Component2 />
                    </>
                }
            </div>

            <div className={styles.boxContainer2}>
                {showComponent &&
                    <>
                        <Component1 />

                        <Component2 />
                    </>
                }
            </div>
        </>
    );
}