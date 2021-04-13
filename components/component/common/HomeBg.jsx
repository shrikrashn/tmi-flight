import React from 'react'

export default function HomeBg() {
    return (
        <>
            <section className="sm:block hidden mt-80" style={bgimg}>
                <div className="container px-5 mx-auto flex flex-wrap py-24">
                    <div className="w-full sm:w-1/3 text-white text-center sm:py-0 py-5">
                        <figure>
                            <img className="mx-auto animate-pulse" src="/images/booking-mode.svg" />
                            <figcaption>
                                <p className="text-lg">
                                    <span className="block text-4xl font-bold py-1">214K+</span>
                                    Bookings made
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="w-full sm:w-1/3 text-white text-center sm:py-0 py-5">
                        <figure>
                            <img className="mx-auto animate-pulse" src="/images/flight-took.svg" />
                            <figcaption>
                                <p className="text-lg">
                                    <span className="block text-4xl font-bold py-1">214K+</span>
                                    Flights took off
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="w-full sm:w-1/3 text-white text-center sm:py-0 py-5">
                        <figure>
                            <img className="mx-auto animate-pulse" src="/images/airplane.svg" />
                            <figcaption>
                                <p className="text-lg">
                                    <span className="block text-4xl font-bold py-1">214K+</span>
                                    Passengers flew
                                </p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}
const bgimg = {
    width: "100%",
    background:"URL(/images/banner2.jpg)",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };