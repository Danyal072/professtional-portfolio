'use client'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Header_Contact from '../components/contact_sections/Header_Contact'
import SideBar from '../components/post_detail/SideBar'
import Form_Section from '../components/contact_sections/Form_Section'

export default function page() {
  return (
    <>
        <div id="main_area" className='w-full h-full'>
            <Header />
            <div id="contact-page-elements">
                <div id="header_Hero">
                    <Header_Contact />
                </div>
                <div id="form-area" className='flex flex-row gap-4 justify-center items-center h-[60vh]'>
                    <div id="side-bar" className='w-1/4 h-full hidden xl:block'>
                        <SideBar />
                    </div>
                    <div id="f_section" className='relative top-[8rem] w-full xl:w-[75%] h-full flex justify-center items-center'>
                        
                        <div id="inner_section" className='w-11/12 lg:w-10/12 xl:w-1/2 h-full'>
                            <Form_Section />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
  )
}
