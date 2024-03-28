import React from 'react'
import { DataBaseInform } from './Database'
import Membros from '../Membros/Index';
import Cadastro from '../Cadastro/Index';
const FormProvider = () => {
  return (
   <DataBaseInform>
    <Membros />
    <Cadastro />
   </DataBaseInform>
  )
}

export default FormProvider