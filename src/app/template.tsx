"use client";

import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    const [state, setState] = useState(0);
    return (
        <div>
            {/* <h1>Hello World {state}</h1>
            <button onClick={() => setState(state +1)}>Klick</button> */}
            {children}
        </div>
    );
}