import Project from '@/components/Project';
import savedProjects from '@/pages/projects/projects.json'
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Work() {
  const [filter, setFilter] = useState<Array<string>>([]);
  const [projects, setProjects] = useState<Array<any>>(savedProjects)


  useEffect(()=>{
    if(filter === undefined || filter.length == 0) setProjects([...savedProjects])
    else{
      let lclProjects = [...savedProjects].filter(project => filter.every((r:string) => project.stack.indexOf(r) >= 0)) 
      setProjects(lclProjects)
    }
  },[filter])

  const addFilter = (f:string) => {
    let lclFilter = [...filter]
    lclFilter.push(f)
    setFilter(lclFilter)
  }
  
  const removeFilter = (f:string) => {
    let lclFilter = [...filter].filter(item => item !== f)
    setFilter(lclFilter)
  }

  return (
    <div className="flex bg-zinc-950 md:container mx-auto">
      {/* <img src="/pic1.jpg" className='h-full inline-block' alt="" /> */}
      <div className="w-full p-5 md:p-16 text-zinc-200 text-lg">
        <Link href="/" className='text-zinc-200 mb-5 block rounded-3xl'>/Home</Link>
        <h1 className="font-amiri font-bold text-5xl">Projects</h1>
        <div id="filter" className="w-full bg-zinc-600 p-3 mt-4 rounded-lg outline outline-offset-4 outline-2">
          {filter.length ?(
            filter.map((f, fidx)=>{
              return(<div key={fidx} className={`text-sm inline-block bg-sky-200 text-zinc-900 mr-2 my-1 px-3 py-1 rounded`}>{f} <i onClick={()=>{removeFilter(f)}} className="cursor-pointer bi bi-x-lg ml-4"></i></div>)
            })
          ) : 
            <div className={`text-sm inline-block bg-sky-200 text-zinc-900 mr-2 px-3 py-1 rounded`}>Filter via Labels</div>
            }
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mt-10">
          {
            projects.map((project, pidx)=>{
              return(<Project key={pidx} liveSite={project.link} addFilter={addFilter} slug={project.slug} labels={project.stack} img={`/images/${project.image}`} title={project.text} />)
            })
          }
        </div>
      </div>
    </div>
  )
}
