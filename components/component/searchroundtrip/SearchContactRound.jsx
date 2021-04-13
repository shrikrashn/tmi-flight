import React from 'react'
import FilterLeft from '../search/FilterLeft'
import ContactRightRound from './ContactRightRound'

export default function SearchContactRound() {
    return (
        <>
            <section className="search-content py-5 ">
                <div className="container px-5 mx-auto flex justify-between">
                    <FilterLeft />
                    <ContactRightRound />
                </div>
            </section>
        </>
    )
}
