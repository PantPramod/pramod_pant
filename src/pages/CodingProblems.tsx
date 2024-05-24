import codingQuestion from "../data/codingQuestion"

const CodingProblems = () => {
  return (
    <div className="w-[90%] mx-auto">
      <p className="text-center text-2xl md:text-3xl font-bold mb-4 text-gray-700 py-5">Coding Questions</p>
      <div className="py-10 ">
        {
          codingQuestion.map((item, index) => <div key={item?.que} className="mt-10">
            <p><strong>{index + 1}.</strong>{" "}{item?.que}</p>
            <iframe src={item.ans}
         
              title="JS coding question"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              className="w-[100%] mt-5 h-[400px] rounded"
            ></iframe>
          </div>)
        }
      </div>
    </div>
  )
}

export default CodingProblems
