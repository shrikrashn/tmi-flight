import React from 'react'

export default function AddContactDtl() {
    return (
        <>
            <div className="add-contact pt-5">
                <h2 className="text-2xl text-gray-700 font-semibold mb-1">Add contact details</h2>
                <p className="text-gray-600">E-ticket will be sent to this email address and phone number</p>
                <div className="form py-10">
                    <form>
                        <div class="phone w-4/6 pr-3 pl-2 relative border border-gray-200 rounded mb-5 flex items-center">
                            <div className="select-code border-r mr-2">
                                <select className="appearance-none form-select border-0 text-sm text-gray-800 pl-1 pr-7 focus:outline-none">
                                    <option>+91</option>
                                </select>
                            </div>
                            <div className="input-mob relative w-full">
                                <input type="text" class="w-full text-base text-gray-800 h-10" name="phone" placeholder="Your Phone Number" />
                            </div>
                        </div>
                        <div class="mail w-4/6 pr-3 pl-10 relative border border-gray-200 rounded mb-5">
                            <input type="text" class="w-full text-base text-gray-800 h-10" name="mail" placeholder="Email Address" />
                            <span class="absolute left-3 top-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>
                        </div>
                        <div className="ckeck ">
                            <label class="inline-flex items-center py-2 w-full">
                                <input type="checkbox" class="form-checkbox rounded-sm bg-gray-300 border-0" />
                                <span class="ml-2 text-base text-gray-600 cursor-pointer">I am an existing Tourmyindia user</span>
                            </label>
                            <label class="inline-flex items-center py-2 w-auto">
                                <input type="checkbox" class="form-checkbox rounded-sm bg-gray-300 border-0" />
                                <span class="ml-2 text-base text-gray-600 cursor-pointer">Send me travel offers, deals, and news by email</span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
