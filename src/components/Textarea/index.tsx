import { useId } from 'react'
import { Sinput, Slabel } from '../@ui'
import { Scontainer } from '../Input/styles'

const TextArea = ({ label }: { label: string }) => {
  const id = useId()
  return (
    <Scontainer>
      <Slabel htmlFor={id}>{label}</Slabel>

      <Sinput $as={'textarea'} id={id} />
    </Scontainer>
  )
}

export default TextArea
