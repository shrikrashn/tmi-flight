import React from 'react'
import Link from 'next/link'

export default function FooterMenu() {
    return (
        <>
            <div className="footer-menu bg-gray-800 w-full mt-32 inline-block">
                <div className="container mx-auto px-5">
                    <div className="menu-sec w-full bg-white rounded-2xl sm:px-16 px-3 py-2 -mt-24 shadow">
                        <div className="logo-footer lg:block hidden">
                            <div className="flex items-center justify-between py-5 border-b border-gray-200">
                                <div className="left-side flex items-center">
                                    <a href="">
                                        <img src="images/tmi_footer_logo.svg" alt="logo" />
                                    </a>
                                    <p className="text-base text-gray-800 pl-5">India'a fastest growing Hotel Booking Platform</p>
                                </div>
                                <div className="right-side">
                                    <button type="button" class="text-base text-white rounded-full bg-blue-500 hover:bg-blue-600 px-6 py-3 leading-3"> List Your Property</button>
                                </div>
                            </div>
                        </div>
                        <div className="menu-bottom py-5 flex justify-around flex-wrap">
                            <div className="menu-repeat lg:w-1/4 sm:w-1/2 w-1/2 mb-3">
                                <h4 className="text-sm text-blue-500 uppercase font-bold mb-2">Company</h4>
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">We Are Hiring</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">TMI Reviews</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Terms & Conditions</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Privacy Policies</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Copyright Policies</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Support</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-repeat lg:w-1/4 sm:w-1/2 w-1/2 mb-3">
                                <h4 className="text-sm text-blue-500 uppercase font-bold mb-2">PROPERTY TYPE</h4>
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Homes</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Apartments</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Resorts</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Hostels</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">B&Bs</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Guest houses</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Villas</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-repeat lg:w-1/4 sm:w-1/2 w-1/2 mb-3">
                                <h4 className="text-sm text-blue-500 uppercase font-bold mb-2">INTERESTED AREAS</h4>
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Wildlife</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Heritage</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Pilgrimage</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Hill Station</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Adventure</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Beach</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-repeat lg:w-1/4 sm:w-1/2 w-1/2 mb-3">
                                <h4 className="text-sm text-blue-500 uppercase font-bold mb-2">OTHER SERVICES</h4>
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Destination Weddings
MICE</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a className="text-sm text-gray-600 py-1 font-medium hover:text-blue-500">Medical Tourism</a>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="social-menu mt-5">
                                    <ul className="flex items-center">
                                        <li>
                                            <a href="" className="flex items-center justify-center w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full mr-2">
                                                <img src="images/twitter.svg" alt="twitter"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="flex items-center justify-center w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full mr-2">
                                                <img src="images/facebook.svg" alt="twitter"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="flex items-center justify-center w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full mr-2">
                                                <img src="images/linkden.svg" alt="twitter"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" className="flex items-center justify-center w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full mr-2">
                                                <img src="images/youtube.svg" alt="twitter"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
