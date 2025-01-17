import Link from "next/link"
import P from "./ui/p"
import { Button } from "./ui/button"
import { ArrowUpRightIcon } from "@heroicons/react/20/solid"
import { DM_Serif_Text, Jersey_15 } from "next/font/google"

const headfont = DM_Serif_Text({
    weight: '400',
    subsets: ['latin']
})

const socials = [
    {
        name: "Blog",
        href: "https://blog.regisrex.me"
    },
    {
        name: "Designs",
        href: "https://www.behance.net/nregis"
    },
    {
        name: "Email",
        href: "mailto:hey@regisrex.me"
    },
    {
        name: "Github",
        href: "https://github.com/regisrex",
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/regisndizihiwe/",
    },
    {
        name: "Twitter",
        href: "https://twitter.com/regissrex",
    },


]
export default function NavBar() {
    return (
        <div className="flex flex-col gap-10 items-center justify-between px-[5vw] md:px-[20vw] lg:px-[28vw] py-10 w-full border-b  border-slate-50">
            <div className="flex items-center flex-wrap justify-center gap-4">
                <img src="https://github.com/regisrex.png" alt="" className="w-10 h-10 rounded-full object-cover" />
                <span className="md:text-4xl  text-2xl font-black" style={headfont.style}>NDIZIHIWE Regis</span>
            </div>
            <div className="flex flex-wrap items-center justify-center   gap-4">
                {socials.map((social, index) => (
                    <Link key={index} href={social.href}>
                        <Button variant={"linkButton"}>
                            {social.name} <ArrowUpRightIcon className="w-4 h-4" />
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
    )
}