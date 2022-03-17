import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
const Short = () => {
    const {link} = useParams();
    const [valid, setValid] = useState(true)
    const redirectTo = async()=>{
        const host = `https://linkshortnerbackend.herokuapp.com/${link}`;
        const response = await fetch(host, {
            method:'GET'
        })
        const data = await response.json();
        if(data.success){
            if(data.data.originalUrl){
                window.location.href = data.data.originalUrl
            }else{
                setValid(false)
            }
        }
        else{
            console.log('link not found')
        }
    }
    useEffect(()=>{
        redirectTo();
        //eslint-disable-next-line
    }, [])
  return (
    <>
        {link && <>
            <div style={{minHeight:'calc(100vh - 64px)'}} className='w-full bg-gradient-to-tl from-cyan-300 to-blue-400 text-center'>
            <p>Redirecting to {`${window.location.protocol}//${window.location.host}/${link}`}</p>
            </div>
        </>}
        {
            valid &&
            <>
                <div style={{minHeight:'calc(100vh - 64px)'}} className='w-full bg-gradient-to-tl from-cyan-300 to-blue-400 text-center'>
                <p>{`${window.location.protocol}//${window.location.host}/${link}`} is invalid</p>
                </div>
            </>
        }
    </>
  )
}

export default Short