import { useRouter } from "next/router";
import React, { useState } from "react";
import BottomButton from "../src/components/BottomButton";
import Image from "next/image"
import keyboard from '../public/keyboard.jpeg'
import keyboard1 from '../public/keyboard-1.jpeg'
import styles from './accessory-choice-1.module.css'

export default function accessoryChoice() {
  const [selectedAccessory1, setSelectedAccessory1] = useState('')
  const router = useRouter()

  const goNextPage = () => {
    localStorage.setItem('selected_accessory1', selectedAccessory1)
    router.push('/complete')
  }

  const handleOnChange = (e) => {
    setSelectedAccessory1(e.target.value)
    console.log(e.target.value)
  }
  console.log(selectedAccessory1)

  return (
  <div className="container">
  <div className="wrraper">
    <h3 className={styles.title}>
     키보드를 선택해주세요.
  </h3>
  </div>
  <div className={styles.Image}>
    <label className={styles.labelpos}>
      <input type="radio" name="accessory" id="accessory" value="keyboard-1" onChange={handleOnChange}/>
  <Image src={keyboard} width={250} height={250}/>
  </label>
  <label className={styles.labelpos}>
      <input type="radio" name="accessory" id="accessory" value="keyboard-2" onChange={handleOnChange}/>
  <Image src={keyboard1} width={250} height={250}/>
  </label>
  {/* <RadioGroup name="accessory" onChange={state => setSelectedAccessory(state)}>
    <Radio id="monitor" name="accessory" value="monitor" label="monitor" />
    <Radio id="keyboard" name="accessory" value="keyboard" label="keyboard" />
  </RadioGroup> */}
  </div>
  <BottomButton onClick={goNextPage}>제출 화면으로 넘어가기</BottomButton>
</div>
)
}
