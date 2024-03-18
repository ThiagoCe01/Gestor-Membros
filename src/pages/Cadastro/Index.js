import React, { useState } from 'react'
import Header from '../Header/Index'
const Cadastro = ({setControlForm}) => {
 const [cadMembers, setCadMembers ] = useState({
  name: '',tel:'', email:'', dateBirth:'', dateBatism:'', dateMember:'', jobChurch:'', congregation:'', linkFacebook:'', linkInsta:'', comentary:'' });
 const handleSubmitForm =(event)=>{
event.preventDefault();
setControlForm(cadMembers);
console.log(cadMembers)
 setCadMembers (''); };

 const handleSubmitCamps =(event)=>{
  setCadMembers({...cadMembers, [event.target.name]:event.target.value})
 };
  return (
    <div className='containerPartnersOne'>
      <Header />
      <div className="content">
      <div className="containerPartnersTwo">
    <form className='layoutForm' onSubmit={handleSubmitForm}>
      <div className="titleandSubmit">
        <div className="titleForm">
          <h1>Cadastro de Membros</h1>
        </div>
        <div className="blockbtn">
      <button type="submit">Enviar</button>
    </div>
      </div>
      <div className="sectionForm">
        <div className="titleSectionForm">
          <h3>Dados Pessoais</h3>
        </div>
          <div className="BlocForm">
            <label className="campForm">
              <p>Nome</p>
              <input type="text" placeholder='Insira seu nome completo' name='name' value={cadMembers.name || ''}        onChange={handleSubmitCamps} />
              </label>    
            <label className="campForm">
              <p>Telefone</p>
              <input type="tel" placeholder='(00) 00000-0000' name='tel' value={cadMembers.tel || ''} onChange={handleSubmitCamps} />
              </label>    
            <label className="campForm">
              <p>E-mail</p>
              <input type="email" placeholder='email@email.com' name='email' value={cadMembers.email || ''} onChange={handleSubmitCamps} />
              </label>    
            <label className="campForm">
              <p>Data de nascimento</p>
              <input 
              type="date"
              name='dateBirth'
              value={cadMembers.dateBirth || ''}
              onChange={handleSubmitCamps} 
               />
              </label>    
            <label className="campForm">
              <p>Data de batismo</p>
              <input 
              type="date" 
              name='dateBatism'
              value={cadMembers.dateBatism || ''}
              onChange={handleSubmitCamps} 
              
               />
              </label>    
            <label className="campForm">
              <p>Quando se tornou membro do ministério</p>
              <input 
              type="date" 
              name='dateMember'
              value={cadMembers.dateMember || ''}
              onChange={handleSubmitCamps} 
              
              />
              </label>    
            <label className="campForm">
              <p>Qual cargo exerce no ministério</p>
              <input 
              type="text" 
              placeholder='Cargo'
              name='jobChurch'
              value={cadMembers.jobChurch || ''}
              onChange={handleSubmitCamps}  />
              </label>    
            <label className="campForm">
              <p>Qual a congregação</p>
              <select 
              name="congregation" 
              value={cadMembers.congregation || ''} 
              onChange={handleSubmitCamps} >
                <option value="">Escolha</option>
                <option value="105">105</option>
                <option value="110">110</option>
                <option value="Qnq">Qnq</option>
                <option value="Recanto">Recanto das Emas</option>
                <option value="Sede">Sede</option>
              </select>
              </label>    
          </div>
      </div>
      <div className="sectionForm">
            <div className="titleSectionForm">
              <h3>Contatos</h3>
            </div>
            <div className="BlocForm">
              <label className="campForm">
                <p>Facebook</p>
                <input 
                type="url" 
                name="linkFacebook"                
                value={cadMembers.linkFacebook || ''} 
                onChange={handleSubmitCamps}
                 />
              </label>
              <label className="campForm">
                <p>Instagram</p>
                <input
                type="url"
                name="linkInsta"                
                value={cadMembers.linkInsta || ''} 
                onChange={handleSubmitCamps}
                 />
              </label>
              
            </div>
      </div>
      <div className="sectionForm">
            <div className="titleSectionForm">
              <h3>Dados do Ministério</h3>
            </div>
            <div className="BlocForm">
              <label className="campForm">
                <p>Anotações</p>
                <textarea 
                name="comentary" 
                cols="265" rows="10" 
                placeholder='Descrição'
                value={cadMembers.comentary || ''} 
                onChange={handleSubmitCamps}>
                 
                </textarea>
              </label>
          
              
            </div>
      </div>
   

    </form>
      </div>
      </div>
    </div>
  )
}

export default Cadastro