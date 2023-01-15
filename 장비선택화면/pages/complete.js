import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BottomButton from "../src/components/BottomButton";
import { fetchUser } from "../src/modules/api";
import styles from "./complete.module.css"

export default function complete() {
  const [data, setData] = useState('')
  const [choice, setChoice] = useState({device: "", accessory : "", accessory1 : ""})
  const router = useRouter()


  useEffect(() => {
    async function fetch () {
      const res = await fetchUser()
      setData(res)
    } 
    fetch()
  })

  useEffect(()=> {
    const device = localStorage.getItem('selected_device')
    const accessory = localStorage.getItem('selected_accessory')
    const accessory1 = localStorage.getItem('selected_accessory1')

    setChoice({device, accessory, accessory1})
  },[])
  
  return(
    <div className="container">
    <div className="wrraper">
      <h2 className={styles.title}>
    {data.name}님이 선택하신 목록입니다
    </h2>
    <div className={styles.div1}></div>
    <h2> 장비는 {choice.device} </h2>
    <h2> 모니터는 {choice.accessory} </h2>
    <h2> 키보드는 {choice.accessory1} </h2>
 
    </div>
    <BottomButton onClick={() => 
    router.push('/success')}>제출 완료</BottomButton>
  </div>
    )
}
