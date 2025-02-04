import React from "react";
import { BiCloudDownload } from "react-icons/bi";

function DownloadButton({ downloadurl, downloadname }) {
  return (
    <a
      className="bg-green-400 text-stone-600 p-4 gap-2  rounded-md"
      href={downloadurl}
      target="_blank"
      alt={downloadname}
      rel="noreferrer"
      // download={downloadname}
    >
      <span>
        {/* <BsCloudDownload/> */}
        Download {downloadname}{" "}
      </span>
    </a>
  );
}

export default DownloadButton;
