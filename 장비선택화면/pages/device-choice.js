import { useRouter } from "next/router";
import React, { useState } from "react";
import BottomButton from "../src/components/BottomButton";
import Image from "next/image"
import mac from '../public/mac.jpeg'
import imac from '../public/imac.jpeg'
import styles from './device-choice.module.css'
import styled from "styled-components";

export default function deviceChoice() {
  const [selectedDevice, setSelectedDevice] = useState('')

  const goNextPage = () => {
    localStorage.setItem('selected_device', selectedDevice)
    router.push('/accessory-choice')
  }

  const router = useRouter()

  const handleOnChange = (e) => {
    setSelectedDevice(e.target.value)
    console.log(e.target.value)
  }

  return (
  <div className="container">
  <div className="wrraper">
    <h3 className={styles.title}>
      원하는 장비를 선택해주세요.
  </h3>
  </div>
  <div className={styles.Image}>
    <label className={styles.labelpos}>
      <input type="radio" name="device" id="device" value="mac" onChange={handleOnChange}/>
  <Image src={mac} width={300} height={300}/>
  </label>
  <label className={styles.labelpos}>
      <input type="radio" name="device" id="device" value="imac" onChange={handleOnChange}/>
  <Image src={imac} width={300} height={200}/>
  </label>
  </div>
  <BottomButton onClick={goNextPage}>모니터 선택 화면으로 넘어가기</BottomButton>
</div>
)
}

const Title = styled.h3`
text-align: center
`