import { useEffect, useState } from "react"
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "./Firebase";



const AdminPanel = () => {
    const [result, setResult] = useState<any>([])
    const getAllContacts = async () => {

        const q = query(collection(db, "contacts"));
        const querySnapshot = await getDocs(q);
        let arr: any = []
        let index = 0
        querySnapshot.forEach((doc) => {
            index++
            //@ts-ignore
            arr.push({ ...doc.data(), id: index })
        });
        console.log(arr)
        setResult([...arr])
    }
    useEffect(() => {
        getAllContacts()
    }, [])
    return (
        <div style={{ backgroundImage: "url('./assets/Wave.svg')" }} className="min-h-screen bg-cover">
            <h2 className="text-center font-bold text-3xl p-10">All Contacts</h2>
            <div className="flex gap-x-4 w-[90%] sm:w-full max-w-[900px] mx-auto border text-sm border-gray-400 font-bold">
                <span className="w-[100px] border-r border-r-gray-400 p-1 sm:p-4 overflow-x-auto">S.No.</span>
                <span className="w-[200px] border-r border-r-gray-400 p-1 sm:p-4 overflow-x-auto">Name </span>
                <span className="w-[200px] border-r border-r-gray-400 p-1 sm:p-4 overflow-x-auto">Email</span>
                <span className="w-[200px] border-r border-r-gray-400 p-1 sm:p-4 overflow-x-auto">Phone </span>
                <span className="w-[200px]  p-1 sm:p-4 overflow-x-auto">Message</span>
            </div>

            {
                result.map((item: {
                    phone: string,
                    message: string,
                    email: string,
                    name: string,
                    id: number
                }) => <div key={item?.id} className="flex gap-x-4 w-[90%] sm:w-full max-w-[900px] mx-auto border text-sm border-gray-400">
                        <span className="w-[100px] border-r border-r-gray-400 p-1 sm:p-4 overflow-x-auto">{item?.id}.</span>
                        <span className="w-[200px] border-r border-r-gray-400 p-1 sm:p-4 overflow-x-auto">{item?.name} </span>
                        <span className="w-[200px] border-r border-r-gray-400 p-1 sm:p-4 overflow-x-auto">{item?.email}</span>
                        <span className="w-[200px] border-r border-r-gray-400 p-1 sm:p-4 overflow-x-auto">{item?.phone} </span>
                        <span className="w-[200px]  p-1 sm:p-4 overflow-x-auto">{item?.message}</span>
                    </div>)


            }
        </div>
    )
}

export default AdminPanel
