import React from 'react'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Posts from '../Components/Posts/Posts'
import SignUpPage from './SignUpPage'

function Home() {
  return (
    <div>
   <Header/>
   {/* <SignUpPage/> */}
    <Banner />
   <Posts/>
   <Footer />
    


    </div>
  )
}

export default Home