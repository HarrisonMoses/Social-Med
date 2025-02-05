import React from "react";
import { BiCloudDownload } from "react-icons/bi";

function DownloadButton({ url, downloadname }) {
  return (
    <a
      className="p-3 bg-green-400 hover:text-white rounded-md transition-all duration-200 cursor-pointer "
      href={url}
      target="_blank"
      alt={downloadname}
      rel="noreferrer"
      // download={downloadname}
    >
      {/* <BsCloudDownload/> */}
      Download 
    </a>
  );
}

export default DownloadButton;
