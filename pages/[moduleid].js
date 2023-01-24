import React from 'react';
import { useRouter } from 'next/router';
import data from '../data/data';
import Grid from '../components/Grid';



const View = (props) => {

  const router = useRouter();
  const { id } = router.query;
  const datafetch = data.filter( data => data.id === id );

  const backbtnhandler = ()=>{
    router.push('/')
  }

  return (
    <div className="bg-slate-600">
      <div className="container " style={{ "margin": "auto", "maxWidth": "50vw" }}>
        <div className='h-56 grid grid-cols-1 gap-3 content-center' style={{ "minHeight": "100vh" }}>
          <div className='flex justify-center'>
            <img className='rounded-lg object-cover h-64 w-96 drop-shadow-xl hover:-translate-y-2 transition duration-200 ease-in-out' style={{ "width": "30vw"}} src={datafetch[0].image} alt="" />
          </div>
          <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-200 dark:text-white text-center drop-shadow-xl">{datafetch[0].title}</h5>
          <p className="mb-3 text-gray-200 font-normal dark:text-gray-200 text-center drop-shadow-xl place-self-center" style={{"width": "40vw"}}>{datafetch[0].description}</p>
          <button type="button" className="mt-9 inline-block px-6 py-2 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out place-self-center" onClick={backbtnhandler} style={{"width": "10vw"}}>Back</button>
        </div>
      </div>
    </div>
  )
}

export default View;
