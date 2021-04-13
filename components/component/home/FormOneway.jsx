import React from 'react'
import TabMenu from './TabMenu'
import OneWay from './OneWay'
export default function FormOneway() {
    return (
        <>
            <section className="form mb-24 relative -mt-32">
                <div className="container px-5 mx-auto">
                    <TabMenu />
                    <form className="relative">
                        <OneWay />
                    </form>
                </div>
            </section>
        </>
    )
}
