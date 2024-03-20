import { useState } from "react"
import Cadastro from "../Cadastro/Index";
import Membros from "../Membros/Index";



const Statedistribution = () => {
  const [controlMember, setControlMember] = useState ([]);


  const  addMember =(newMember) =>{
    setControlMember( (prevMember) =>[...prevMember, newMember]);
  };
  

  return ( 
    <div>
      <Cadastro addMember={addMember}/>
      {controlMember.length > 0 && <Membros controlMember={controlMember} />}
    </div>
  )
}

export default Statedistribution
