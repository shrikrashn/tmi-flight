import React from 'react'
import CouponCode from './CouponCode'
import TotalPrice from './TotalPrice'
import NonRefundable from './NonRefundable'
import AddContactDtl from './AddContactDtl'


export default function Payment2() {
    return (
        <>
            <section className="payment-step py-10">
                <div className="container px-5 mx-auto flex">
                    <div className="w-3/4 left-pymnt pr-8">
                        <CouponCode />
                        <NonRefundable />
                        <AddContactDtl />
                        <div className="continue-btn py-10">
                            <a href="/paymentstep2next" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white rounded-full px-12 py-3 leading-3 text-base">Continue</a>
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
