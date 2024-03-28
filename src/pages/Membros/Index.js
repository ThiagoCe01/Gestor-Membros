import Header from '../Header/Index'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { DataBaseContext } from '../assets/Database';
import { useContext } from 'react';





const Membros = () => {
  const {constForm} = useContext(DataBaseContext);
  
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
              <input type="search" placeholder='Buscar Membros' />
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
                {constForm.map((data, index)=>(
                  <tr key={index}>
                    <td>{data.name}</td>
                    <td>{data.tel}</td>
                    <td>{data.email}</td>
                    <td>{data.dateBirth}</td>
                    <td>{data.dateBatism}</td>
                    <td>{data.dateMember}</td>
                    <td>{data.jobChurch}</td>
                    <td>{data.congregation}</td>
                    <td>{data.linkFacebook}</td>
                    <td>{data.linkInsta}</td>
                    <td>{data.comentary}</td>
                  </tr>
                ))}
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