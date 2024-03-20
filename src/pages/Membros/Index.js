import React from 'react'
import Header from '../Header/Index'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const Membros = ({controlMember}) => {
  return (
    <div className='containerPartnersOne'>
      <Header />
      <div className="content">
        <div className="containerPartnersTwo">
        <div className="titleandBtn">
          <div className="containerTitleMemberes">
            <h1>Membros</h1>
            <p>Área de cadastro dos membros</p>
            </div>
            <div className="searchMembers">
              <input type="search" placeholder='Buscar Membros'/>
              <button type='submit'><FontAwesomeIcon icon={faSearch} /></button>
            </div>
              <div className="btnMembers">
                <button><Link to="/cadastro"> Criar</Link></button>
                <button>Excluir</button>
                <button>Desativar</button>
              </div>
          </div> 
          <div className="members">
              <table>
                <thead>
                  <tr>
                    <td>Nome</td>
                    <td>Telefone</td>
                    <td>Email</td>
                    <td>Dada de nascimento</td>
                    <td>Data de Batismo</td>
                    <td>Congregação</td>
                    <td>Data de Membro</td>
                    <td>Cargo</td>
                    <td>Facebook</td>
                    <td>Instagram</td>
                    <td>Comentarios</td>
                  </tr>  
                </thead>
                <tbody>
                  {controlMember.map((item, index) =>(
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.tel}</td>
                      <td>{item.email}</td>
                      <td>{item.dateBirth}</td>
                      <td>{item.dateBatism}</td>
                      <td>{item.dateMember}</td>
                      <td>{item.jobChurch}</td>
                      <td>{item.congregation}</td>
                      <td>{item.linkFacebook}</td>
                      <td>{item.linkInsta}</td>
                      <td>{item.comentary}</td>

                    </tr>
                  ))};
                </tbody>
              </table>
              </div>
              </div>
              <Footer />
              </div>
    </div>
  )
}

export default Membros