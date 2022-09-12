import { React, createContext, useState, useRef, useEffect } from "react";
export const ctx = createContext()

export default function Context({children}) {

    const something = true;

    return (
        <ctx.Provider value={something} >
            {children}
        </ctx.Provider>
    )
}