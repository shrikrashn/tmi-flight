import React from 'react'

export default function RedeemCoupon() {
    return (
        <>
            <div className="coupon-code my-5 py-3 px-7 bg-gray-200 rounded border-l-2 border-r-2 border-dotted border-gray-50 flex justify-between items-center">
                <p className="text-gray-700 text-lg">Redeem coupon code or gift card</p>
                <label className="flex relative">
                    <span className="absolute left-2 top-0 m-auto bottom-0 h-5">
                        <img src="/images/voucher.svg" alt="voucher"/>
                    </span>
                    <input className="form-input border-0 rounded-full px-10 h-8 w-96 mr-3 text-sm" type="text" name="code" placeholder="Enter your cupon code/card number"/>
                    <a href="" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white rounded-full px-8 py-2 leading-3 text-sm">Apply</a>
                </label>
            </div>
        </>
    )
}
