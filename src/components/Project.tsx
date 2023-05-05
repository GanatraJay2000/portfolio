type ProjectProps = {
  title: string;
  img:string;
  labels:Array<string>;
  accent?:string;
  slug:string;
  addFilter:any;
  liveSite?:string;
}

export default function Project({img, title, labels, accent='sky', slug, addFilter, liveSite}:ProjectProps) {
  return (
    <div className="relative bg-zinc-700 overflow-hidden rounded-lg flex flex-col">
      <a href={`/projects/${slug}`} >
      <img src={img} alt={title} className="rounded-tr-lg rounded-tl-lg" />
      </a>
      <div className="flex flex-col grow">
        <a href={`/projects/${slug}`} className="text-2xl px-3 pt-2 pb-3 text-white bg-zinc-600">{title}</a>
        <div className={`px-3 pt-3 pb-3`}>
          {
            labels.map(label=>{
              return(<div onClick={()=>addFilter(label)} className={`cursor-pointer text-sm inline-block bg-${accent}-200 text-zinc-900 mr-2 mb-2 px-3 py-1 rounded`}>{label}</div>)
            })
          }
        </div>
        <div className="mt-auto mb-3  px-2 flex">
          <a href={`/projects/${slug}`} className="bg-zinc-100 rounded text-zinc-800 px-3 py-1 text-sm">Read More <i className="bi bi-arrow-right ml-2"></i></a>
          {
            liveSite && (
              <a href={liveSite} target="_blank" className="ml-2 bg-zinc-100 rounded text-zinc-800 px-3 py-1 text-sm">Live Site <i className="bi bi-box-arrow-up-right ml-2 "></i></a>
            )
          }
        </div>
      </div>
    </div>
  )
}

