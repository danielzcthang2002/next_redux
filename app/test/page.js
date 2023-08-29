"use client";
import { useDispatch, useSelector } from "react-redux";

function TestPage(){
  const count = useSelector((state) => state.counter.count);
  return (
    <div>{count}</div>
  )
}

export default TestPage