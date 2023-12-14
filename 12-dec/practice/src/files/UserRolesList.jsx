import React, { useContext } from 'react'
import { Button, Container, Row, Title } from '../styles/Styled_component'
import TableUserRole from '../components/TableUserRole'
import { userRoleContext } from '../App';
import { Link } from 'react-router-dom';

function UserRolesList() {
    const {userRoleData, setUserRoleData} = useContext(userRoleContext);
  return (
    <Container>
        <Row>
            <Title>User Roles</Title>
            <Link to='/role-management'> <Button width='fit-content'>Create New Role</Button></Link>
        </Row>
        <TableUserRole userData={userRoleData} />
    </Container>
  )
}

export default UserRolesList
