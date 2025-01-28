import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  

export default function Header_Contact() {
  return (
    <>
        <div id="header_contact" className='h-[40vh] w-full bg-secondary/20 flex flex-col justify-center items-center gap-4 relative object-cover'>
            <div className="absolute -top-12 left-0 border-r-2 w-[10vw] h-[20vh] rounded-full -translate-x-20 rotate-[40deg] object-cover"></div>
            <h1 className="text-4xl md:text-5xl xl:text-8xl font-serif font-semibold">Contact Me</h1>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/contact" className="active:text-white">Contact </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    </>
  )
}
