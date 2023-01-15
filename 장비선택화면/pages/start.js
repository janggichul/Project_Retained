import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BottomButton from "../src/components/BottomButton";
import { fetchUser } from "../src/modules/api";
import logo from '../public/logo.svg';
import Images from 'next/image'
import styles from './start.module.css'

export default function start() {
  const [name, setName] = useState("")
  const router = useRouter()

  useEffect(() => {
    async function fetch() {
     const res = await fetchUser()
     setName(res.name)
    }
    fetch()
  }, [])

  return (
    <div className="container">
      <div className="wrraper">
        <h3 className="title">
      {name}님, 입사를 축하드립니다! 
      </h3>
      <Title1>
      원하시는 개발 장비를 선택해주세요.
      </Title1>
      </div>
      <div className={styles.text}>
      <Images src={logo} alt='logo' className={styles.Applogo} width={500} height={500}/>
      </div>
      <BottomButton onClick={() => 
      router.push('/device-choice')}>장비 선택 화면으로 넘어가기</BottomButton>
    </div>
  );
}

const Title1 = styled.h2`
`
