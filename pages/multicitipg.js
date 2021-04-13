import React from 'react'
import Banner from '../components/component/common/Banner'
import HomeBg from '../components/component/common/HomeBg'
import Header from '../components/component/common/Header'
import HomeSlider from '../components/component/common/HomeSlider'
import FromSearch from '../components/component/home/FromSearch'
import FormMulticiti from '../components/component/home/FormMulticiti'
export default function multicitipg() {
    return (
        <>
            <Header />
            <Banner />
            <FromSearch />
            <FormMulticiti />
            <HomeBg />
            <HomeSlider />
        </>
    )
}
