import Head from 'next/head'
import Banner from '../components/component/common/Banner'
import HomeBg from '../components/component/common/HomeBg'
import Header from '../components/component/common/Header'
import HomeSlider from '../components/component/common/HomeSlider'
import Form from '../components/component/home/Form'
import FromSearch from '../components/component/home/FromSearch'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Header />
    <Banner />
    <FromSearch />
    <Form />
    <HomeBg />
    <HomeSlider />
    </>
  )
}
