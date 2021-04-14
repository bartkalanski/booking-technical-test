import React, { useState, useEffect } from 'react'

import "./SearchBox.scss"
import Rentalcars from '../api/Rentalcars'


const SearchBox = () => {
    const [value, setValue] = useState("");
    const [results, setResults] = useState([])

    const handleChange = (e) => setValue(e.target.value)

    useEffect(() => {
        const wrapper = async () => {
            const { data } = await Rentalcars.get(
                `FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${value}`
            );
            setResults(data.results.docs)
        }
        if (value.length > 1) wrapper()
    }, [value])
    console.log('results', results)
    return (
        <div className="searchbox">
            <h3 className="searchbox__title">Where are you going?</h3>
            <label htmlFor="input" className="searchbox__label">Pick-up Location</label>
            <div className="searchbox__container">
                <input value={value} onChange={handleChange} name="input" type="text" placeholder="city, airport, station, region and district..." className="searchbox__input" />
                <div className="searchbox__results">{results.map(result => value.length < 2 ? null : (
                    <div className="searchbox__result">
                        {results[0].name === 'No results found' ? <div>{results[0].name}</div> : (
                            <>
                                <div className="searchbox__id">{result.bookingId}</div>
                                <div className="searchbox__name">{result.name}</div>
                                <div className="searchbox__location">{result.city}, {result.region}, {result.country}</div>
                            </>
                        )
                        }

                    </div>))}
                    </div>
                <button className="searchbox__button">Search</button>
            </div>
        </div>
    )
}

export default SearchBox
