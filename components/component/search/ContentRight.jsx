import React from 'react'
import DateScrollbar from './DateScrollbar'
import FlightsListing from './FlightsListing'

export default function ContentRight() {
    return (
        <>
            <div className="content-right w-3/4 pl-5">
                <DateScrollbar />
                <FlightsListing />
            </div>
        </>
    )
}
