
import { useParams } from "react-router-dom"
import CodeComponent from "../components/Code/CodeComponent"
import codingQuestion from "../data/codingQuestion"
import { RxCodesandboxLogo } from "react-icons/rx"
import { RiFileCopyLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const Questions = () => {
    const { id } = useParams()
    const que = codingQuestion.filter((item) => item.category === id)
    const [showCopyMessage, setShowCopyMessage] = useState(false)
    const [copyId, setCopyId] = useState(-1)
    const copyCode = (txt: string, id: number) => {
        setCopyId(id)
        setShowCopyMessage(true)
        navigator.clipboard.writeText(txt)
    }

    useEffect(() => {
        let timerId: any
        if (showCopyMessage) {
            timerId = setTimeout(() => {
                setShowCopyMessage(false)
            }, 1000)
        }

        return () => {
           timerId && clearTimeout(timerId)
        }
    }, [showCopyMessage])
    return (
        <div className="w-[90%] mx-auto">
            <p className="text-center text-2xl md:text-3xl font-bold mb-4 text-gray-700 py-5 capitalize">{id} {" "} Questions</p>

            <div className="py-10 ">
                {que.map((item, index) => <div key={item?.que} className="">
                    <p className="py-10"><strong>{index + 1}.</strong>{" "}{item?.que}
                        {
                            item?.ans &&
                            <a href={item?.ans} target="_blank">
                                <RxCodesandboxLogo
                                    size={22}
                                    color="blue"
                                    className="inline-block ml-2 cursor-pointer"
                                />
                            </a>
                        }
                    </p>

                    <div
                        onClick={() => copyCode(item?.code, index)}
                        className="relative cursor-pointer w-7 h-7 flex items-center justify-center bg-gray-200 rounded-md ml-auto mr-2">
                        {showCopyMessage && (index === copyId) && <span className="absolute right-[120%] text-green-600">Copied</span>}
                        <RiFileCopyLine size={22} className="text-gray-700" />
                    </div>

                    <CodeComponent code={item?.code} />
                </div>)
                }
            </div>
        </div>
    )
}

export default Questions
