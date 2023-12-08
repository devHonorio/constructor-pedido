import Input from '@/components/Input'
import TextArea from '@/components/Textarea'

export default function Home() {
  return (
    <>
      <Input label="WhatsApp" type="tel" />
      <Input label="Nome completo" />
      <Input label="Data" type="date" />
      <Input label="Hora" type="time" />
      <TextArea label="Observações" />

      <Input label="Rua" />
      <Input label="Número" />
      <Input label="Bairro" />
      <Input label="Cidade" />
    </>
  )
}
