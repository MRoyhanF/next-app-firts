"use client";

import { useState } from "react";

export default function AdminProduct() {
    const [status, setStatus] = useState("");
    const revalidate = async () => {
        const res = await fetch(
            "http://localhost:3000/api/revalidate?tag=product&secret=1234567890", 
            {
                method: "POST",
            }
        );
        if (!res.ok) {
            setStatus("Revalidate failed");
        }else{
            const response = await res.json();
            if(response.revalidate) {
                setStatus("Revalidate success");
            }
        }
    }

    return (
        <div className="w-3/6 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center mr-5">
            <h1>{status}</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5" 
            onClick={() => revalidate()}>Revalidate</button>
        </div>
    )
}