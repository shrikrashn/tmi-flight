import React from 'react'
import AddFlightBaggeg from './AddFlightBaggeg'
import AddinFlightMeals from './AddinFlightMeals'

export default function ChooseAddOn() {
    return (
        <>
            <div className="choose-addon mt-10">
                <h2 className="text-2xl text-gray-800 font-semibold mb-1">Choose add-ons</h2>
                <p className="text-gray-600">No meal and additional check-in baggage selected</p>
                <div className="coupon-code mt-10 py-4 px-5 bg-white rounded  border-gray-200 border flex justify-between items-center">
                    <div className="flex items-center">
                        <figure>
                            <img src="/images/dinner.svg" />
                        </figure>
                        <p className="text-xl font-semibold text-gray-700 ml-3 leading-6">
                            Add delicious meals
                            <span className="text-sm text-green-500 block font-normal">Meals are cheaper when pre-booked</span>
                        </p>
                    </div>
                    <a href="" className="view-menu bg-white text-blue-500 rounded-full px-10 py-3 leading-3 border border-blue-500">View Menu</a>
                    <AddinFlightMeals />
                </div>
                <div className="coupon-code mt-5 py-4 px-5 bg-white rounded  border-gray-200 border flex justify-between items-center">
                    <div className="flex items-center">
                        <figure>
                            <img src="/images/suitcase.svg" />
                        </figure>
                        <p className="text-xl font-semibold text-gray-700 ml-3 leading-6">
                        Carrying more luggage? Get extra check-in baggage
                            <span className="text-sm text-green-500 block font-normal">Baggage is cheaper when pre-booked</span>
                        </p>
                    </div>
                    <a href="" className="view-menu bg-white text-blue-500 rounded-full px-10 py-3 leading-3 border border-blue-500">Baggage Options</a>
                    <AddFlightBaggeg />
                </div>
            </div>
        </>
    )
}
