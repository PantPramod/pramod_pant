
import { useParams } from "react-router-dom"
import CodeComponent from "../components/Code/CodeComponent"
import codingQuestion from "../data/codingQuestion"
import { RxCodesandboxLogo } from "react-icons/rx"

const Questions = () => {
    const { id } = useParams()
    return (
        <div className="w-[90%] mx-auto">
            <p className="text-center text-2xl md:text-3xl font-bold mb-4 text-gray-700 py-5 capitalize">{id} {" "} Questions</p>

            <div className="py-10 ">
                {
                    codingQuestion.map((item, index) => <div key={item?.que} className="">
                        {id === item.category
                            &&
                            <>
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

                                <CodeComponent code={item?.code} />

                            </>
                        }
                    </div>)
                }
            </div>
        </div>
    )
}

export default Questions
