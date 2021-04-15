import React from 'react'

import "./Autocomplete.scss"

const Autocomplete = ({ value, results = [] }) => {
    return (
        <div className="results">{results.map(result => value.length < 2 ? null : (
            <div className="results__result" key={result.name}>
                {results[0].name === 'No results found' ? <div className="results__error">{results[0].name}</div> : (
                    <>
                        <div className="results__id">{result.bookingId}</div>
                        <div className="results__name">{result.name}</div>
                        <div className="results__location">{result.city}, {result.region}, {result.country}</div>
                    </>
                )
                }
            </div>))}
        </div>
    )
}

export default Autocomplete
