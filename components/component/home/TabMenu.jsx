import React from 'react'

export default function TabMenu() {
    return (
        <>
            <nav>
                <ul className="flex mb-1">
                    <li>
                        <a className="bg-white px-12 text-lg py-5 rounded-tr-3xl rounded-tl-3xl flex items-center text-blue-500 shadow-inner" href="/">
                            <figure className="mr-2">
                                <img src="/images/active-tab.svg" alt="icon" />
                            </figure>
                            One way
                        </a>
                    </li>
                    <li>
                        <a className="px-12 text-lg py-5 rounded-tr-3xl rounded-tl-3xl flex items-center text-white" href="/roundtrippg">
                            <figure className="mr-2">
                                <img src="/images/normal-tab.svg" alt="icon" />
                            </figure>
                            Round trip
                        </a>
                    </li>
                    <li>
                        <a className="px-12 text-lg py-5 rounded-tr-3xl rounded-tl-3xl flex items-center text-white " href="/multicitipg">
                            <figure className="mr-2">
                                <img src="/images/normal-tab.svg" alt="icon" />
                            </figure>
                            Multi-city
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
