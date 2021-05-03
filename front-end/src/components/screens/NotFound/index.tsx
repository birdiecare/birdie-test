import * as React from 'react'
import { Button, CentralizeContainer, Title } from '@App/components/common'
import { useHistory } from 'react-router'

const NotFound = () => {
    const history = useHistory();
    const handleHomeNavigation = () => {
        history.push('/');
    }
    return (
        <CentralizeContainer>
            <Title>404</Title>
            <Button onClick={handleHomeNavigation}>Return Home</Button>
        </CentralizeContainer>
    );
};
export default NotFound
