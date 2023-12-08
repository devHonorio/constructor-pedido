import { useId } from 'react'
import { Sinput, Slabel } from '../@ui'
import { Scontainer } from './styles'

interface InputInterface {
  label: string
  type?: 'text' | 'number' | 'password' | 'tel' | 'date' | 'time' | 'text'
}

const Input = ({ label, type = 'text' }: InputInterface) => {
  const id = useId()
  return (
    <Scontainer>
      <Slabel htmlFor={id}>{label}</Slabel>

      <Sinput id={id} type={type} />
    </Scontainer>
  )
}

export default Input
