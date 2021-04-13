import React from 'react'
import FromSearch from './FromSearch'
import ToSearch from './ToSearch'
import TravellerSelect from '../common/TravellerSelect'

export default function MultyCity() {
    return (
        <>
            <div className="multy-city bg-white p-10 shadow-lg rounded-xl rounded-tl-none absolute top-0 left-0 w-full">
                <div className="top-form flex items-center mb-2">
                    <div className="input-group flex w-3/5 border border-gray-300 rounded px-4 relative">
                        <div className="input-from w-1/2 pr-4">
                            <input className="w-full text-base text-gray-800 h-14" type="text" name="from" placeholder="From" />
                            <FromSearch />
                        </div>
                        <div className="input-to w-1/2 pl-10 border-l border-gray-300 relative">
                            <input className="h-14 w-full text-base text-gray-800" type="text" name="to" placeholder="To" />
                            <ToSearch />
                            <a href="" className="absolute -left-6 top-3">
                                <img src="/images/fromto.png" alt="icon" />
                            </a>
                        </div>
                    </div>
                    <div className="input-group flex w-1/3 border border-gray-300 rounded ml-2">
                        <div className="input w-full pr-3 pl-14 relative">
                            <input className="w-full text-base text-gray-800 h-14" type="text" name="depart" placeholder="Depart" />
                            <figure className="absolute left-6 top-5">
                                <img src="/images/calendar.svg" alt="icon" />
                            </figure>
                        </div>
                        <div className="input w-full pr-3 pl-14 relative hidden border-l border-gray-300">
                            <input className="w-full text-base text-gray-800 h-14" type="text" name="depart" placeholder="Return" />
                            <figure className="absolute left-6 top-5">
                                <img src="/images/calendar.svg" alt="icon" />
                            </figure>
                        </div>
                    </div>
                    <a className="ml-4" href="">
                    <svg className="text-red-600 w-6" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </a>
                </div>
                <div className="top-form flex items-center mb-2">
                    <div className="input-group flex w-3/5 border border-gray-300 rounded px-4 relative">
                        <div className="input-from w-1/2 pr-4">
                            <input className="w-full text-base text-gray-800 h-14" type="text" name="from" placeholder="From" />
                            <FromSearch />
                        </div>
                        <div className="input-to w-1/2 pl-10 border-l border-gray-300 relative">
                            <input className="h-14 w-full text-base text-gray-800" type="text" name="to" placeholder="To" />
                            <ToSearch />
                            <a href="" className="absolute -left-6 top-3">
                                <img src="/images/fromto.png" alt="icon" />
                            </a>
                        </div>
                    </div>
                    <div className="input-group flex w-1/3 border border-gray-300 rounded ml-2">
                        <div className="input w-full pr-3 pl-14 relative">
                            <input className="w-full text-base text-gray-800 h-14" type="text" name="depart" placeholder="Depart" />
                            <figure className="absolute left-6 top-5">
                                <img src="/images/calendar.svg" alt="icon" />
                            </figure>
                        </div>
                        <div className="input w-full pr-3 pl-14 relative hidden border-l border-gray-300">
                            <input className="w-full text-base text-gray-800 h-14" type="text" name="depart" placeholder="Return" />
                            <figure className="absolute left-6 top-5">
                                <img src="/images/calendar.svg" alt="icon" />
                            </figure>
                        </div>
                    </div>
                    <a className="ml-4" href="">
                    <svg className="text-red-600  w-6" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </a>
                </div>
                <div className="top-form flex items-center mb-2">
                    <div className="input-group flex w-3/5 border border-gray-300 rounded px-4 relative">
                        <div className="input-from w-1/2 pr-4">
                            <input className="w-full text-base text-gray-800 h-14" type="text" name="from" placeholder="From" />
                            <FromSearch />
                        </div>
                        <div className="input-to w-1/2 pl-10 border-l border-gray-300 relative">
                            <input className="h-14 w-full text-base text-gray-800" type="text" name="to" placeholder="To" />
                            <ToSearch />
                            <a href="" className="absolute -left-6 top-3">
                                <img src="/images/fromto.png" alt="icon" />
                            </a>
                        </div>
                    </div>
                    <div className="input-group flex w-1/3 border border-gray-300 rounded ml-2">
                        <div className="input w-full pr-3 pl-14 relative">
                            <input className="w-full text-base text-gray-800 h-14" type="text" name="depart" placeholder="Depart" />
                            <figure className="absolute left-6 top-5">
                                <img src="/images/calendar.svg" alt="icon" />
                            </figure>
                        </div>
                        <div className="input w-full pr-3 pl-14 relative hidden border-l border-gray-300">
                            <input className="w-full text-base text-gray-800 h-14" type="text" name="depart" placeholder="Return" />
                            <figure className="absolute left-6 top-5">
                                <img src="/images/calendar.svg" alt="icon" />
                            </figure>
                        </div>
                    </div>
                    <a className="ml-4" href="">
                    <svg className="text-red-600 w-6" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </a>
                </div>
                <div className="bottom-form lg:pt-10 pt-5 flex justify-between items-center flex-wrap">
                    <div className="left-side w-full lg:w-1/2">
                        <a href="" className="text-sm font-bold text-white flex items-center bg-green-500 rounded-full py-2 px-4 w-32 hover:bg-green-600">+ Add More</a>
                    </div>
                    <div className="right-side w-full lg:w-1/2 flex lg:justify-end justify-center items-center">
                    <div className="select-group flex">
                            <div className="adult relative w-20 mr-4">
                                <a href="javascript:void(0)" className="select-travlr font-semibold w-full cursor-pointer px-1">Adults</a>
                                <TravellerSelect />
                                <figure className="absolute right-0 top-3">
                                    <img src="/images/down.svg" alt="icon" />
                                </figure>
                            </div>
                            <div className="childen relative w-24 mr-4">
                                <a href="javascript:void(0)" className="select-travlr font-semibold w-full cursor-pointer px-1">Children</a>
                                <TravellerSelect />
                                <figure className="absolute right-0 top-3">
                                    <img src="/images/down.svg" alt="icon" />
                                </figure>
                            </div>
                            <div className="infants relative w-20 mr-4">
                                <a href="javascript:void(0)" className="select-travlr font-semibold w-full cursor-pointer px-1">Infants</a>
                                <TravellerSelect />
                                <figure className="absolute right-0 top-3">
                                    <img src="/images/down.svg" alt="icon" />
                                </figure>
                            </div>
                        </div>
                        <a className="text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 px-7 py-2 rounded-full font-semibold ml-4" href="/searchflight">SEARCH</a>
                    </div>
                </div>
            </div>
        </>
    )
}
