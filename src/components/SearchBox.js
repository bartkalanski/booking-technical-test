import React from 'react'

import "./SearchBox.scss"

const SearchBox = () => {
    return (
        <div className="searchbox">
            <h3 className="searchbox__title">Where are you going?</h3>
            <label for="input" className="searchbox__label">Pick-up Location</label>
            <input name="input" type="text" placeholder="city, airport, station, region and district..." className="searchbox__input"/>
            <button className="searchbox__button">Search</button>
        </div>
    )
}

export default SearchBox
