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
        <div>
            <h1>{status}</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5" 
            onClick={() => revalidate()}>Revalidate</button>
        </div>
    )
}