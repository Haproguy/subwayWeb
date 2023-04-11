

export default function SearchView(props) {
    const { pastSearch } = props;
    const search = pastSearch.value;

    return (
        <div>
            검색페이지
            <input type="text" />
            <div>
                <h3>지난 검색어</h3>
                {search.map(val => {
                    return (
                        <>
                            <div>{val}</div>
                        </>
                    );
                })}

                
            </div>
        </div>
    );
}