import React from 'react'
import Banner from '../components/component/common/Banner'
import HomeBg from '../components/component/common/HomeBg'
import Header from '../components/component/common/Header'
import HomeSlider from '../components/component/common/HomeSlider'
import FromSearch from '../components/component/home/FromSearch'
import FormRoundtrip from '../components/component/home/FormRoundtrip'

export default function roundtrippg() {
    return (
        <>
            <Header />
            <Banner />
            <FromSearch />
            <FormRoundtrip />
            <HomeBg />
            <HomeSlider />
        </>
    )
}
