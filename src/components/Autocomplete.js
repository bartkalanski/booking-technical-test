import React from 'react'

import "./Autocomplete.scss"

const Autocomplete = ({ value, results = [] }) => {
    return (
        <div className="results">{results.map(result => value.length < 2 ? null : (
            <div className="results__result" key={result.locationId}>
                {results[0].name === 'No results found' ? <div className="results__error">{results[0].name}</div> : (
                    <>
                        <div>{result.bookingId}</div>
                        <div>{result.name}</div>
                        <div>{result.country}</div>
                    </>
                )
                }
            </div>))}
        </div>
    )
}

export default Autocomplete
