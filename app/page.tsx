import { Inter } from "next/font/google";
import Shots from "@/components/home/shots";
import { Button } from "@/components/ui/button";
import P from "@/components/ui/p";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const inter = Inter({
  weight: "300",
  subsets: ["latin"],
});

const blackInter = Inter({
  weight: "800",
  subsets: ["latin"],
});

const works = [
  {
    name: "ScriptyLabs Inc",
    href: "https://scriptylabs.com",
  },
  {
    name: "Uzabox Ltd.",
    href: "https://uzabox.com",
  },
  {
    name: "Visdom Inc.",
    href: "https://visdom.app",
  },
  {
    name: "Tvet Career Portal",
    href: "https://tvetcareerportal.rtb.gov.rw",
  },
  {
    name: "TVET Management platforms",
    href: "https://tvetmanagement.rtb.gov.rw",
  },
  {
    name: "Rwandair Catering Ltd.",
    href: "https://rwandaircatering.rw",
  },
  {
    name: "Invictus RMF.",
    href: "https://invictus.rmf.gov.rw",
  },
];

export default function Home() {
  return (
    <div>
      <div className="px-[5vw] md:px-[20vw] lg:px-[30vw] py-10 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <p
            className="text-xl md:text-2xl font-semibold text-brand"
            style={blackInter.style}
          >
            Hi, I&apos;m Regis <span className="opacity-20">#</span>
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <P>
            I&apos;m Regis and I&apos;m a software engineer, a UXologist, a
            mentor, and tech-blogger. My current focus is building high
            experience software applications and coding tools.
          </P>
          <P>
            I&apos;ve been building software for over 3 years now. Most recently
            I&apos;ve been working on
            <Link
              href="https://scriptylabs.com"
              target="_blank"
              className="spanlink"
            >
              &nbsp;ScriptyLabs&nbsp;
            </Link>
            which allows domain management and web hosting.
          </P>
          <P>
            I&apos;m excited about tech ideas and open source devtools. If you
            have something you&apos;d like to craft together, don&apos;t
            hesitate to reach out at{" "}
            <Link href="mailto:hey@regisrex.me" className="spanlink">
              hey@regisrex.me
            </Link>
            .
          </P>
        </div>

        <div className="mt-10">
          <p
            className="text-xl mb-4 md:text-2xl font-semibold text-brand"
            style={blackInter.style}
          >
            Works <span className="opacity-20">#</span>
          </p>
          <P>
            This is what I would include in my resume if I were to write one.
            Most of these projects were freelance work, where I contributed to
            frontend, backend, design, or sometimes all three. If you&apos;re
            curious about what I worked on for each project{" "}
            <a
              target="_blank"
              href={
                "https://docs.google.com/document/d/1vrGbvP8AUydz1PsbqKyt24F_pjLdEmYHUo4E2Qe0j54/edit?usp=sharing"
              }
              className="underline underline-offset-4 text-decoration-slate-50"
            >
              check out my full resume.
            </a>
          </P>
          <div className="mt-6">
            {works.map((work, index) => (
              <Link
                key={index}
                href={work.href}
                target="_blank"
                className="w-full hover:bg-[#00000003] hover:px-1 transition-all duration-50 px-0 border-y py-2 border-slate-10 justify-between flex items-center"
              >
                <P>{work.name}</P>
                <ArrowUpRightIcon className="w-4 h-4 stroke-slate-600" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <p
            className="text-xl md:text-2xl font-semibold text-brand"
            style={blackInter.style}
          >
            Shots <span className="opacity-20">#</span>
          </p>
          <P>
            I took a few shots with my phone just to make this site less boring.
          </P>
        </div>
        <Shots />
      </div>
      <div>
        <footer className="px-[5vw] md:px-[20vw] py-6 lg:px-[30vw] pt-4 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <P>© 2021 Regis N. A little wierd is a good thing.</P>
        </footer>
      </div>
    </div>
  );
}
