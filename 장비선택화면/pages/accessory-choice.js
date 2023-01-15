import { useRouter } from "next/router";
import React, { useState } from "react";
import BottomButton from "../src/components/BottomButton";
import Image from "next/image"
import monitor from '../public/monitor.jpeg'
import monitor1 from '../public/monitor-2.png'
import styles from './accessory-choice.module.css'


export default function accessoryChoice() {
  const [selectedAccessory, setSelectedAccessory] = useState('')
  const router = useRouter()

  const goNextPage = () => {
    localStorage.setItem('selected_accessory', selectedAccessory)
    router.push('/accessory-choice-1')
  }

  const handleOnChange = (e) => {
    setSelectedAccessory(e.target.value)
    console.log(e.target.value)
  }
  console.log(selectedAccessory)

  return (
  <div className="container">
  <div className="wrraper">
    <h3 className={styles.title}>
      모니터를 선택해주세요.
  </h3>
  </div>
  <div className={styles.Image}>
    <label className={styles.labelpos}>
      <input type="radio" name="accessory" id="accessory" value="developoer-monitor-1" onChange={handleOnChange}/>
  <Image src={monitor} width={200} height={200}/>
  </label>
  <label className={styles.labelpos}>
      <input type="radio" name="accessory" id="accessory" value="developer-moniter-2" onChange={handleOnChange}/>
  <Image src={monitor1} width={200} height={200}/>
  </label>
  {/* <RadioGroup name="accessory" onChange={state => setSelectedAccessory(state)}>
    <Radio id="monitor" name="accessory" value="monitor" label="monitor" />
    <Radio id="keyboard" name="accessory" value="keyboard" label="keyboard" />
  </RadioGroup> */}
  </div>
  <BottomButton onClick={goNextPage}>키보드 화면으로 넘어가기</BottomButton>
</div>
)
}


