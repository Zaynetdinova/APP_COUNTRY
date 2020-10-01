import React, {useEffect} from 'react'
import {useInput} from "../../Common/hooks/input.hook";

export function Input({inputChange}) {
  const nameCountry = useInput('')

  useEffect(() => {
    inputChange(nameCountry.value)
  }, [nameCountry])

  return (
    <div>
      <input className="form-control" type='text' {...nameCountry.bind}/>
    </div>
  )
}
