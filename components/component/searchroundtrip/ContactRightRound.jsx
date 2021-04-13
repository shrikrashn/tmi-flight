import React from 'react'
import DateScrollbar from './DateScrollbar'
import FlightListingHead from './FlightListingHead'
import ListingRound from './ListingRound'
import FlightBook from './FlightBook'


export default function ContactRightRound() {
    return (
        <>
            <div className="content-right-round w-3/4 pl-5">
                <FlightBook />
                <div className="flex">
                    <div className="left w-1/2 pr-1">
                        <DateScrollbar />
                        <FlightListingHead />
                        <ListingRound />
                        
                    </div>
                    <div className="right w-1/2 pl-1">
                        <DateScrollbar />
                        <FlightListingHead />
                        <ListingRound />
                    </div>
                </div>
            </div>
        </>
    )
}
