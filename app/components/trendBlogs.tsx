import React from 'react'


type Blog = {
  id:number;
  title: string;
  author: string;
}


const TrendBlogs = () => {
  return (
    <section className="section section-trend-blogs">
     <div>
        <div className=' px-10'>
            <p className=' ml-[5vw]'>Trending Blogs</p>
            <div className="stripe dark:bg-white bg-gray-800"></div>
        </div>
        <div className=''>

        </div>
     </div>
    </section>
  )
}

export default TrendBlogs