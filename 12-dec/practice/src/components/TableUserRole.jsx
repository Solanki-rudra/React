import React from 'react'
import { Table, Tbody, Td, Th, Thead, BigTitle, Tr, Div} from '../styles/Styled_component'
import { useNavigate } from 'react-router-dom'

function TableUserRole({userData}) {
  const navigate = useNavigate()
  return (
    <Div>
          {
      userData.length !== 0 ? <Table>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Name</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          userData.map((user,index)=>(
            <Tr cursor='pointer' onClick={()=>navigate(`/role-management/${user.id}`)} key={index}>
              <Td>{user.id}</Td>
              <Td>{user.role}</Td>
              <Td>{user.status}</Td>
            </Tr>
          ))
        }
      </Tbody>
    </Table> : <BigTitle>Data is Empty</BigTitle>
    }
    </Div>
  )
}

export default TableUserRole
