import React from 'react'
import FromSearch from '../home/FromSearch'
import ToSearch from '../home/ToSearch'
import TravellerSelect from './TravellerSelect'

export default function TopSearchFilter() {
    return (
        <>
            <section className="top-search-filter bg-gray-100 py-4 relative z-30">
                <div className="container px-5 mx-auto flex items-center ">
                    <div className="trip relative mr-2 w-36">
                        <select className="appearance-none font-normal w-full cursor-pointer px-1 form-select border border-gray-200 rounded-md">
                            <option>One Way</option>
                            <option>Round Trip</option>
                            <option>One Way</option>
                        </select>
                    </div>
                    <div className="input-from relative mr-2 w-1/5">
                        <input type="search" name="from" placeholder="From"  className="font-normal w-full px-3 form-input border border-gray-200 rounded-md h-11"/>
                        <FromSearch />
                    </div>
                    <a href="" className="to relative mx-1">
                        <img src="/images/switch.svg" alt="icon" />
                    </a>
                    <div className="input-to relative mr-2 w-1/5">
                        <input type="search" name="from" placeholder="To"  className="font-normal w-full px-3 form-input border border-gray-200 rounded-md h-11"/>
                        <ToSearch />
                    </div>
                    <div className="depart relative mr-2 w-36">
                        <input type="date" name="depart" placeholder="depart"  className="font-normal w-full px-3 form-input  border border-gray-200 rounded-md h-11"/>
                    </div>
                    <div className="Return relative mr-2 w-36">
                        <input type="date" name="Return" placeholder="depart"  className="font-normal w-full px-3 form-input border border-gray-200 rounded-md h-11"/>
                    </div>
                    <div className="travller relative mr-2 w-36">
                        <input type="text" name="Return" placeholder=""  className="font-normal w-full px-3 form-select border border-gray-200 rounded-md h-11"/>
                        <TravellerSelect />
                    </div>
                    <a className="text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 px-7 py-2 rounded-full font-normal ml-2" href="">Search</a>
                </div>
            </section>
        </>
    )
}
