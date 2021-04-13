import React from 'react'
import NonRefundable from './NonRefundable'

export default function ThankYou() {
    return (
        <>
            <section style={bgimg} className="thank-you bg-white py-28">
                <div className="container px-5 mx-auto">
                    <div className="head text-center">
                        <figure className="mx-auto">
                            <img className="mx-auto" src="/images/thankyou.svg" />
                            <figcaption className="text-green-600 font-bold text-4xl mt-5">Thank You</figcaption>
                        </figure>
                        <p className="text-gray-700 font-semibold text-4xl mt-5 w-1/2 mx-auto">Your Flight  - Delhi to Mubail Has been Booked, </p>
                    </div>
                    <div className="bg-green-50 mx-auto w-4/6 px-5 rounded-md none-ref my-10">
                        <NonRefundable />
                    </div>
                    <div className="text-center">
                        <a href="/" class="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white rounded-full px-16 py-2 leading-3 text-base">Explore More</a>
                        <a href="/" className="text-green-600 font-semibold text-lg flex items-center justify-center mt-5"><img src="./images/dticket.svg" alt="ticket" /> Download Ticket</a>
                    </div>
                </div>
            </section>
        </>
    )
}
const bgimg = {
    width: "100%",
    background:"URL(/images/airplane-thanku.svg)",
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    
  };