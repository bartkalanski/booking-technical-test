import React, { useState, useEffect } from 'react'

import "./SearchBox.scss"
import Rentalcars from '../api/Rentalcars'

const SearchBox = () => {
    const [value, setValue] = useState("");

    const handleChange = (e) => setValue(e.target.value)

    useEffect(() => async () => {
        const { data } = await Rentalcars.get(
            `FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${value}`
        );
        const results = data.results.docs 
        console.log(results)
    }, [value])

    return (
        <div className="searchbox">
            <h3 className="searchbox__title">Where are you going?</h3>
            <label htmlFor="input" className="searchbox__label">Pick-up Location</label>
            <input value={value} onChange={handleChange} name="input" type="text" placeholder="city, airport, station, region and district..." className="searchbox__input" />
            
            <button className="searchbox__button">Search</button>
        </div>
    )
}

export default SearchBox
