import React, { useState } from 'react';
const SearchBar = () => {

    
    return (
        <div>
            <input
                type="text"
                placeholder="검색할 지역을 입력하세요 (ex. 삼성동)"
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;