import React from 'react'
import Nav from '../components/Nav'
import srs from '../artifacts/java.pdf'
import PdfBlock from '../components/downloadButton'

export default function Artifacts() {
  return (
    <div className="">
      <div className=" sticky top-0 z-50">
        <Nav />
      </div>
      <div className="mt-6 ">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 gradient_bg">Project Documents</h2>
        <div className="grid md:grid-cols-3 gap-12">
            <PdfBlock url={srs} downloadname="SRS"/>
            <PdfBlock url={srs} downloadname="Final report" />
            <PdfBlock url={srs} downloadname="SDD" />
        </div>
    </div>
    </div>
  );
}
