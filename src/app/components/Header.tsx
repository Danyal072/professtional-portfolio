import React from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
  import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  
import Link from 'next/link'
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"



export default function Header() {
  return (
    <>
        <div id="navbar" className='w-full h-[10vh] hidden sm:flex gap-[10rem] justify-center items-center p-4 px-8 text-white'>
            <div id="logo" className='w-[20vw]'>
                <h1 className='text-2xl font-bold'>DANYAL</h1>
            </div>
            <div id="menu" className=' w-[60vw] flex justify-end items-center'>
                <NavigationMenu className='w-[100%] h-full flex !justify-end items-center'>
                    <NavigationMenuList className='w-[100%] flex justify-end items-center'>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} no-underline hover:underline transition-all duration-500`}>Home</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/services" legacyBehavior passHref>
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} no-underline hover:underline transition-all duration-500`}>Services</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/portfolio" legacyBehavior passHref>
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} no-underline hover:underline transition-all duration-500`}>Portfolio</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/about" legacyBehavior passHref>
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} no-underline hover:underline transition-all duration-500`}>About</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/contact" legacyBehavior passHref>
                                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} no-underline hover:underline transition-all duration-500`}>Contact</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>

        <div id="navbar" className='w-full h-[10vh flex sm:hidden gap-[10rem] justify-center items-center p-4 px-8 '>
            <div id="logo" className='w-[20vw]'>
                <h1 className='text-2xl font-bold'>DANYAL</h1>
            </div>
            <div id="menu" className=' w-[60vw] flex justify-end items-center'>
            <Drawer>
                <DrawerTrigger><i className='bi bi-list text-4xl'></i></DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle className='w-[100%] h-[5vh] hidden'></DrawerTitle>
                        <div id="close" className='w-[100%] h-[5vh] flex justify-end items-center'>
                            <DrawerClose className='animate-bounce border rounded-full border-white px-3 py-2'><i className='bi bi-x-lg text-2xl font-black'></i></DrawerClose>
                        </div>
                        <NavigationMenu className='w-[100%] h-[100%] flex flex-col justify-center items-center'>
                         <NavigationMenuList className='w-[100%] h-full flex flex-col gap-20 justify-center items-center'>
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref className='w-full h-full'>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} !text-[2rem] font-bold`}>Home</NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/services" legacyBehavior passHref className='w-full h-full'>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} !text-[2rem] font-bold`}>Services</NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/portfolio" legacyBehavior passHref className='w-full h-full'>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} !text-[2rem] font-bold`}>Portfolio</NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/about" legacyBehavior passHref className='w-full h-full'>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} !text-[2rem] font-bold`}>About</NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/contact" legacyBehavior passHref className='w-full h-full'>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} !text-[2rem] font-bold`}>Contact</NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    </DrawerHeader>
                </DrawerContent>
            </Drawer>

            </div>
        </div>

    </>
  )
}
