
function PdfBlock({ url, downloadname}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-2 m-6">
      <h3 className="text-xl font-semibold text-start text-gray-900 mb-2">
        {downloadname}
      </h3>
      <embed
        src={url}
        type="application/pdf"
        className="w-full h-56 rounded-md"
      />
      <a
        href={url}
        target="_blank"
        className="block mt-3 text-orange-500 font-semibold hover:underline"
      >
        View Full PDF
      </a>
    </div>
  );
}

export default PdfBlock;
