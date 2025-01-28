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
        <div id="main_area">
            <Header />
            <div id="contact-page-elements">
                <div id="header_Hero">
                    <Header_Contact />
                </div>
                <div id="form-area" className='flex flex-col lg:flex-row gap-4'>
                    <div id="side-bar" className='w-1/4 h-full hidden lg:block'>
                        <SideBar />
                    </div>
                    <div id="f_section" className='w-[75%] h-full'>
                        <Form_Section />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
  )
}
