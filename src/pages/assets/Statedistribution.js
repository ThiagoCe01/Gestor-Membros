

import React from 'react'
import { useState } from 'react';
import Cadastro from '../Cadastro/Index';
import Membros from '../Membros/Index';

const Statedistribution = () => {
const [controlForm, setControlForm] = useState([]);

  return (
    <div>
        <Cadastro setControlForm={setControlForm}/>
        
        <Membros controlForm={controlForm} />
    </div>
  )
}

export default Statedistribution