import React , {useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Avatar from '../../assets/avatar.svg';
import Arrow from '../../assets/arrow.svg';
import Trash from '../../assets/trash.svg'  



import { Container, Image, ContainerItens, H1, Button, User } from './styles'


function Users() {

  // React HOOKS = ferramentas auxiliares
  const [ users , setUsers] = useState([]);
  const history = useHistory()
  console.log(history)

  //Primeirovem o nome da variavél e depois o que vai ajudar a atualizaravariavel 
  

  useEffect(() => {
    async function fetchUsers(){
      const {data:newUsers} = await axios.get("http://localhost:3001/users")

      setUsers(newUsers)
    }
    fetchUsers()

  }, [])
  

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId )
    setUsers(newUsers)
  }

  function goBackPage(){
    history.push('/')
  }
  

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />

      <ContainerItens>
        <H1>Usuários</H1>

        <ul>
          {
              users.map( (user) => (
              <User key={user.id} >
                <p>{user.name}</p>  <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id) }>
                   <img alt='Lixeira' src={Trash} />
                    </button> 
              </User>
            ))}
          
        </ul>

        <Button onClick={goBackPage} ><img alt='seta' src={Arrow} />  Voltar </Button>
      </ContainerItens>
    </Container>
  )
}


export default Users 