import React from 'react'

export default function AddTravllerDtl() {
    return (
        <>
            <div className="add-travller pt-5">
                <h2 className="text-2xl text-gray-700 font-semibold mb-1">Add traveller details</h2>
                <div className="form py-10">
                    <form>
                        <div className="form-group">
                            <h4 className="text-xl font-semibold text-gray-700">Adult 1</h4>
                            <p className="text-gray-500">Traveller name and gender</p>
                            <div className="inner flex flex-wrap my-5">
                                <div class="fname w-1/3 pr-2 mb-5">
                                    <input type="text" class="w-full text-base text-gray-800 h-10 border border-gray-200 rounded form-input" name="fname" placeholder="First Name" />
                                </div>
                                <div class="lname w-1/3 pr-2 mb-5">
                                    <input type="text" class="w-full text-base text-gray-800 h-10 border border-gray-200 rounded form-input" name="lname" placeholder="Last Name" />
                                </div>
                                <div class="fname w-1/3 pr-2 mb-5">
                                <select className="appearance-none text-gray-600 w-full form-select border border-gray-200 rounded">
                                    <option>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <h4 className="text-xl font-semibold text-gray-700">Infant 1 <span className="text-xs text-gray-500">(below 2 yrs)</span></h4>
                            <p className="text-gray-500">Traveller name and gender</p>
                            <div className="inner flex flex-wrap my-5">
                                <div class="fname w-1/3 pr-2 mb-5">
                                    <input type="text" class="w-full text-base text-gray-800 h-10 border border-gray-200 rounded form-input" name="fname" placeholder="First Name" />
                                </div>
                                <div class="lname w-1/3 pr-2 mb-5">
                                    <input type="text" class="w-full text-base text-gray-800 h-10 border border-gray-200 rounded form-input" name="lname" placeholder="Last Name" />
                                </div>
                                <div class="fname w-1/3 pr-2 mb-5">
                                    <select className="appearance-none text-gray-600 w-full form-select border border-gray-200 rounded">
                                        <option>Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div class="dob w-1/3 pr-2 mb-5 relative">
                                    <input type="text" class="w-full text-base text-gray-800 h-10 border border-gray-200 rounded form-input pl-8" name="dob" placeholder="Date Of Birth" />
                                    <span className="absolute left-2 top-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="ckeck ">
                            <label class="inline-flex items-center py-2 w-full">
                                <input type="checkbox" class="form-checkbox rounded-sm bg-gray-300 border-0" />
                                <span class="ml-2 text-base text-gray-600 cursor-pointer">Use GSTIN details for this booking</span>
                            </label>
                            <p class="text-sm text-gray-600">NOTE: This number cannot be updated once booking is completed</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
