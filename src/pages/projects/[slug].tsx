import { useRouter } from 'next/router'
import savedProjects from '@/pages/projects/projects.json'

export default function Work() {
  const router = useRouter()
  const { slug } = router.query
  const project = savedProjects.filter(p => p.slug == slug)[0]
  return (
    <div className="flex bg-zinc-950 md:container mx-auto">
      {/* <img src="/pic4.jpg" className='h-full inline-block' alt="" /> */}
      <div className="p-5 md:p-16 text-zinc-200 text-lg">
        <div className="flex">
          <a href="/" className='text-zinc-100 mb-5 block rounded-3xl'>/Home</a>
          <a href="/work" className='ml-3 text-zinc-100 mb-5 block rounded-3xl'>/Projects</a>
        </div>
        {
          project ? (
            <div className="">
              <h1 className="font-amiri font-bold text-3xl md:text-5xl mb-10">{project.text}</h1>
              <div className="flex gap-8 flex-col-reverse lg:flex-row">
                <div className="lg:w-10/12">
                  <img src={`/images/${project.image}`} alt={project.text} className="rounded-lg mb-8" />
                  <p className='mb-14'>
                    {project.desc}
                  </p>
                  <div className="mb-14">
                    <h2 className='text-4xl mb-5 font-amiri'>Images</h2>
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                      {
                        project.images.map(image=>{
                          return(<a target="image" href={`/images/${image}`}><img src={`/images/${image}`} alt={image} className="rounded-lg" /></a>)
                        })
                      }
                    </div>
                  </div>
                  {
                    project.link && (
                      <div className="">
                        <h2 className='text-4xl mb-5 font-amiri'>Live Site</h2>
                        <a target='_blank' href={project.link}>{project.link}</a>
                      </div>
                    )
                  }
                </div>
                <div className="flex flex-wrap lg:flex-col">
                  {
                    project.stack.map(label=>{
                      return (
                        <div className="">
                          <div className={`text-sm lg:inline-block bg-zinc-200 text-zinc-900 mr-2 mb-2 lg:mb-4 px-3 py-1 rounded lg:rounded-full shrink`}>{label}</div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          ) : (
            <div className="">
              <h1 className="font-amiri font-bold text-5xl mb-2">Loading...</h1>
              <p>If stuck on Loading, please check URL or return to <a href="/work" className='text-sky-400'>Works</a> page...</p>
            </div>
          )
        }
      </div>
    </div>
  )
}