import Link from "next/link";

function getRandomInt(max:number) {
  return Math.floor(Math.random() * max);
}
export default function Home() {
  return (
    // <div className="container mx-auto px-12">
    <div className=" bg-zinc-950 w-screen">
    <div className="flex flex-col md:flex-row bg-zinc-950 md:h-screen">
      {/* <img src={`/pic${getRandomInt(4)}.jpg`} className='mx-4 shadow-[0_0_0_32px_rgba(9,9,11),8px_0_0_36px_rgba(255,255,255)] h-full inline-block' alt="" /> */}
      <img src={`/pic${getRandomInt(4)}.jpg`} className='hidden md:inline-block h-full' alt="" />
      <div className="mt-5 md:mt-0 p-5 md:p-16 text-zinc-200 text-lg grow relative flex justify-center items-center">
        <div className="">
        <div className="hidden md:block md:absolute bottom-0 right-0 px-2 py-2 text-zinc-700">Try Refreshing Page</div>
        <h1 className="font-amiri font-bold text-3xl md:text-5xl mb-4">I'm Jay Ganatra,<br className="block md:hidden"/> a developer</h1>
        <p className='font-poppins font-light mb-8'>Currently a student at <span className='text-orange-400'>Syracuse University</span></p>
        <div className="mb-14 flex flex-col md:flex-row">
          <Link href="/work" className='bg-zinc-200 text-zinc-900 px-8 py-2 rounded-3xl md:mr-5 mb-5 md:mb-0'><i className="bi bi-files mr-4"></i>Projects</Link>
          <Link target="_blank" href="/resume.pdf" className="text-zinc-200 border border-zinc-200 border-2 px-8 py-2 rounded-3xl"><i className="bi bi-box-arrow-up-right mr-4 "></i>Resume</Link>
        </div>
        <h2 className='font-poppins text-2xl mb-8'>Contact</h2>
        <div className="flex flex-col md:flex-row md:items-center mb-5 md:mb-0">
          <div className="mb-5 md:mb-0">
          <Link className="bg-zinc-200 text-zinc-900 px-3 py-2 mr-5 rounded-full" href="https://www.linkedin.com/in/jay-ganatra/"><i className="fa-brands fa-linkedin-in"></i></Link>
          <Link className="bg-zinc-200 text-zinc-900 px-3 py-2 mr-5 rounded-full" href="https://github.com/GanatraJay2000"><i className="fa-brands fa-github"></i></Link>
          </div>
          <Link className='text-zinc-200 border border-zinc-200 border-2 px-8 py-2 rounded-3xl' href="mailto:ganatrajay2000@gmail.com"><i className="bi bi-envelope mr-4"></i>Email Me</Link>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}
