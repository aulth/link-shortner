import React, {useState, useEffect} from 'react'
const Home = () => {
    const [link, setLink] = useState({long:'', short:''});
    const [button, setButton] = useState('Copy')
    const copy = (e)=>{
        e.preventDefault()
        const elem = document.getElementById('short');
        elem.select();
        navigator.clipboard.writeText(link.short)
        setButton('Copied')
    }
    const handleOnChange = (e)=>{
        e.preventDefault();
        setLink({...link, long:e.target.value})
        console.log(link)
    }
    const short = async(e)=>{
        e.preventDefault();
        console.log(link.long)
        const host = 'https://linkshortnerbackend.herokuapp.com/short'
        const response = await fetch(host, {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({originalUrl:link.long})
            },
        )
        const data = await response.json()
        console.log(data)
        const shortLink = `${window.location.protocol}//${window.location.host}/${data.link.shortUrlId}`;
        setLink({...link, short:shortLink})
    }
    useEffect(() => {
      console.log(`${window.location.protocol}`)
    }, [])
    
  return (
    <>
    <div style={{minHeight:'calc(100vh - 64px)'}} className="w-full flex justify-center box-border p-5 bg-gradient-to-tl from-cyan-300  to-blue-400">
        <form className='md:w-1/2 w-full flex flex-col box-border p-2 justify-center items-center' >
            <input type="text" onChange={handleOnChange} className='w-full box-border focus:outline-0 p-1 rounded bg-gray-200 border border-gray-500' placeholder='Paste your long url..' />
            <div style={{display:link.short?'flex':'none'}} className="w-full bg-gray-200 rounded my-2 flex  border border-gray-500 ">
                <input value={link.short} readOnly type="text" id="short" className='w-full box-border focus:outline-0 p-1  bg-transparent cursor-pointer'/>
                <button className="w-16 bg-gray-800 p-2 text-white" onClick={copy}>{button}</button>
            </div>
            <button onClick={short} className="w-16 rounded text-white my-2 hover:bg-gray-700 p-2 bg-gray-800 text-center">
                Short
            </button>
        </form>
    </div>
    </>
  )
}

export default Home