import React from 'react'
import styles from './page.module.css';
import {Carter_One} from 'next/font/google';

const carter_font = Carter_One({
  weight:'400',
  subsets:['latin']
})
const page = () => {
  return (
   <div>
   { /* Greeting And Capablity Content Holder */ } 
   <div className={`Greeting-and-Suggesstion-Content-Holder ${styles.centerGreetingAndSuggessitionDiv} `}>
   {/*  Heading Text  */ }
   <div className="gradient-text-container w-[250px]">
   <h1 className={`text-2xl font-black ${styles.greetingTextColorStyle} ${carter_font.className}`}>
   Hello, from Xsoz.Ai
   </h1>
   </div>
   {/* Capablity */ }
   
   </div>
   
   
   
   </div>
  )
}

export default page