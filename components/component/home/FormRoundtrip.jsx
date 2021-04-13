import React from 'react'
import TabMenu from './TabMenu'
import RoundTrip from './RoundTrip'
export default function FormRoundtrip() {
    return (
        <>
            <section className="form mb-24 relative -mt-32">
                <div className="container px-5 mx-auto">
                    <TabMenu />
                    <form className="relative">
                        <RoundTrip />
                    </form>
                </div>
            </section>
        </>
    )
}
