import React from 'react'
import Nav from '../components/Nav'
import DownloadButton from '../components/downloadButton'

export default function Artifacts() {
  return (
    <div className="">
      <Nav />
      <div className="mt-6 m-auto flex flex-wrap justify-center  gap-2  md:flex-row  ">
        <div className="ml-2 size-45 bg-red-300  flex flex-col justify-between rounded-lg">
        <h2 className='p-2 font-semibold'>Software System Requirements </h2>
          <DownloadButton url="../artifacts/java.pdf" downloadname="RSS.pdf" />
        </div>
        <div className="ml-2 size-200 text-wrap bg-red-300  flex flex-col justify-between rounded-lg">
        <h2 className='p-2 font-semibold'>Software Design Document</h2>
          <DownloadButton url="../artifacts/java.pdf" downloadname="RSS.pdf" />
        </div>
        <div className="ml-2 size-45 text-wrap bg-red-300  flex flex-col justify-between rounded-lg">
        <h2 className='m-2 font-semibold'>System Report</h2>
          <DownloadButton url="../artifacts/java.pdf" downloadname="RSS.pdf" />
        </div>
        <div className="ml-2 size-45 text-wrap bg-red-300  flex flex-col justify-between rounded-lg">
        <h2 className='m-2 font-semibold'>System User Manual</h2>
          <DownloadButton url="../artifacts/java.pdf" downloadname="RSS.pdf" />
        </div>
        
      </div>
    </div>
  );
}
