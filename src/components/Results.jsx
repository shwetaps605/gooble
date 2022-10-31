import React, { useEffect, useState } from 'react'
import { useResultContext } from '../contexts/ResultContextProvider'
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Loading } from './Loading';


const Results = () => {
  const { isLoading, getResults, searchTerm, results } = useResultContext();
  const location = useLocation();
  const [isFetching, setIsFetching] = useState(false)

  if (isLoading) {
    <Loading />
  }

  useEffect(() => {
    console.log(isLoading, "****")
    if (searchTerm) {
      if (location.pathname === '/videos') {
        getResults(`/search/q=${searchTerm} videos`)
      } else {
        console.log("Request made for", searchTerm, "in format", location.pathname)
        getResults(`${location.pathname}/q=${searchTerm}&num=40`)
        console.log(isLoading, "#####")
      }
    }
  }, [searchTerm, location.pathname])


  switch (location.pathname) {
    case '/search':
      return (
        <>
          {
            isLoading ? <Loading /> :
              <div className='flex flex-wrap justify-between space-y-6 sm:px-56 '>
                {results?.results?.map(({ link, title }, index) => (
                  <div key={index} className='md:w-2/5 w-full' >
                    <a href={link} target="_blank" rel='noreferrer'>
                      <p className='text-sm'>
                        {link.length > 30 ? link.substring(0, 30) : link}
                      </p>
                      <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                        {title}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
          }
        </>

      )
      break;
    case '/image':
      return (
        <>
          {
            isLoading ? <Loading /> :
              <div className='flex flex-wrap justify-center items-center'>
                {
                  results?.image_results.map(({ image, link: { href, title } }, index) => (
                    <a className='sm:p-3 p-5' href={href} target="_blank" rel="noreferrer" key={index}>
                      <img src={image?.src} alt={title} loading="lazy" />
                      <p className='w-36 break-words text-sm mt-2'>{title}</p>
                    </a>
                  ))
                }
              </div>
          }
        </>
      )
      break;
    case "/news":
      return (
        <>
          {
            isLoading ? <Loading /> :
              <div className='flex flex-wrap justify-between space-y-6 sm:px-56 items-center'>
                {
                  results.map(({ links, id, source, title }) => (
                    <div key={id} className='md:w-2/5 w-full' >
                      <a href={links?.[0].href} target="_blank" rel='noreferrer' className='hover:underline'>
                        <p className='text-lg dark:text-blue-300 text-blue-700'>
                          {title}
                        </p>
                      </a>
                      <div className='flex gap-4'>
                        <a href={source?.href} target="_blank" rel="noreferrer">
                          {source}
                        </a>
                      </div>

                    </div>
                  ))
                }
              </div>
          }
        </>

      )
      break;

    case "/videos":
      return (
        <>
          {
            isLoading ? <Loading /> :
              <div className='flex flex-wrap'>
                {results?.results?.map((video, index) => (
                  <div key={index} className='p-2'>
                    <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />
                  </div>
                ))}
              </div>
          }
        </>

      )
      break;
    default:
      break;
  }

}

export default Results