import * as React from 'react'
import styles from './styles.module.css'
import {useEffect, useRef, useState} from "react";

interface Props {
  text: string
}

export const ExampleComponent = ({text}: Props) => {
  const [value, setValue] = useState('Ксения');
  const divRef = useRef(null);

  useEffect(() => {
    setValue('Александра')
  }, [])

  return (
    <div ref={divRef} className={styles.test}>
      <p>Example Component: {text}</p>
      <p>{value}</p>
      <p>{divRef.current && (divRef.current! as HTMLElement).className}</p>
    </div>
  )
}
