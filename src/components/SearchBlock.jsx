

export default function SearchBlock(props) {

    const onChangeSearchInput = (e) => {
        props.setSearchValue(e.target.value);
    }

    return (
        <div className="wrapper">
            <div className="search-block">
                <img width={30} height={30} src="/images/search.svg" alt="Search" />
                <input className="search-item" type="text" value={props.searchValue} placeholder="Найди меня!" onChange={onChangeSearchInput} />
                {props.searchValue && <img className='button' src="images/removeButton.svg" onClick={() => props.setSearchValue('')} alt="clear" />}
            </div>
        </div>
    );
}