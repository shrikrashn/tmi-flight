import React from 'react'
import ContentRight from './ContentRight'
import FilterLeft from './FilterLeft'

export default function SearchContent() {
    return (
        <>
            <section className="search-content py-5 ">
                <div className="container px-5 mx-auto flex justify-between">
                    <FilterLeft />
                    <ContentRight />
                </div>
            </section>
        </>
    )
}
