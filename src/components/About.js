import React from 'react'

const About = () => {
  return (
    <div style={{minHeight:'calc(100vh - 64px)'}} className="w-full bg-gradient-to-tl from from-cyan-300  to-blue-400 flex flex-col items-center py-5 ">
        <h2>Link Shortner</h2>
        <p>Created with <i class="bi bi-heart-fill text-red-500"></i> by <a className='text-white' href="https://aulth.github.io/usman"> Mohd Usman</a></p>
    </div>
  )
}

export default About