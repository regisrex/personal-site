import { Inter } from "next/font/google";
import Shots from "@/components/home/shots";
import { Button } from "@/components/ui/button";
import P from "@/components/ui/p";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";


const inter = Inter({
  weight:'400',
  subsets: ['latin']
})

const socials = [
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

export default function Home() {
  return (
    <div>
      <div className="px-[5vw] md:px-[20vw] lg:px-[30vw] py-10 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <p className="text-xl md:text-2xl font-bold text-brand" style={inter.style}>
            Regis N.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <P>
            I&apos;m Regis and I&apos;m a software engineer, a UX Designer, a mentor, and tech-blogger. My current focus is building high experience software applications and coding tools.
          </P>
          <P>
            I&apos;ve been building software for over 3 years now. Most recently I&apos;ve been working on
            <Link href="https://scriptylabs.com" className="spanlink">
              &nbsp;ScriptyLabs&nbsp;
            </Link>
            which allows  domain management and web hosting.
          </P>
          <P>
            I&apos;m excited about tech ideas and open source devtools. If you have something you&apos;d like to craft together, don&apos;t hesitate to reach out at{" "}
            <Link href="mailto:hey@regisrex.me" className="spanlink">
              hey@regisrex.me
            </Link>.
          </P>
        </div>

        <Shots />
      </div>

      <div>
        <footer className="px-[5vw] md:px-[20vw] lg:px-[30vw] pt-4 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <P>© 2021 Regis N. All rights reserved.</P>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {socials.map((social, index) => (
              <Link key={index} href={social.href}>
                <Button variant={"linkButton"}>
                  {social.name} <ArrowUpRightIcon className="w-4 h-4" />
                </Button>
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
