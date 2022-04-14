import React, { useState,useEffect } from 'react'

function HookTimer() {
    const [timer,setTimer]=useState(0)

    useEffect(()=>{
        const interval=setInterval(()=>{
            setTimer(prevTimer =>prevTimer+1)
        },1000)
        return()=>{
            effect
        }
    },[input])
  return (
    <div>

    </div>
  )
}

export default HookTimer