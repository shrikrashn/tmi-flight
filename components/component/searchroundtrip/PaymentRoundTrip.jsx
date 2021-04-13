import React from 'react'
import CouponCode from '../payment/CouponCode'
import Itinerary from './Itinerary'
import RedeemCoupon from '../payment/RedeemCoupon'
import SelectFare from '../payment/SelectFare'
import TotalPrice from '../payment/TotalPrice'
import ChooseAddOn from './ChooseAddOn'

export default function PaymentRoundTrip() {
    return (
        <>
            <section className="payment-step py-10">
                <div className="container px-5 mx-auto flex">
                    <div className="w-3/4 left-pymnt pr-8">
                        <CouponCode />
                        <Itinerary />
                        <SelectFare />
                        <RedeemCoupon />
                        <ChooseAddOn />
                        <div className="continue-btn py-10">
                            <a href="/paymentstep2" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white rounded-full px-12 py-3 leading-3 text-base">Continue</a>
                        </div>
                    </div>
                    <div className="w-1/4 right-pymnt">
                        <TotalPrice/>
                    </div>
                </div>
            </section>
        </>
    )
}
