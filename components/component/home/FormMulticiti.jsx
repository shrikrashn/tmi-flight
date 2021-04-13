import React from 'react'
import MultyCity from './MultyCity'
import TabMenu from './TabMenu'
export default function FormMulticiti() {
    return (
        <>
            <section className="form mb-24 relative -mt-32">
                <div className="container px-5 mx-auto">
                    <TabMenu />
                    <form className="relative">
                        <MultyCity />
                    </form>
                </div>
            </section>
        </>
    )
}
