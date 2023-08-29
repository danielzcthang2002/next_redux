"use client";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";
import Link from "next/link";

function HomePage() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button className="border-2 p-2" onClick={()=>dispatch(increment())}>increment</button>
      <button className="border-2 p-2" onClick={()=>dispatch(decrement())}>decrement</button>
      <button className="border-2 p-2" onClick={()=>dispatch(incrementByAmount(21))}>increment by 21</button>
      <Link href={'/test'}>Go to anther page</Link>
    </div>
  )
}

export default HomePage