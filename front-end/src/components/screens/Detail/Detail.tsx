import * as React from 'react';
import { Event } from '@App/interface/event';
import { SubTitle, CentralizeContainer, Title, Button, Logo } from '@App/components/common';
import { useHistory } from 'react-router';
const LogoUrl = require('../../../assets/images/logo-birdie.svg');

const Detail = ({ location }: { location: { state: Event } }) => {
    const { payload } = location.state;
    const keys = Object.keys(payload);
    const history = useHistory();

    const handleHomeNavigation = () => {
        history.goBack();
    }

    return (
        <CentralizeContainer>
            <div>
                <Logo src={LogoUrl} />
                <Title>Full Details for {payload.id}</Title>
                {
                    keys.map(key => (
                        <SubTitle key={key}>{`${key.toUpperCase().replace(/_/g, ' ')}: ${payload[key]}`}</SubTitle>
                    ))
                }
                <Button onClick={handleHomeNavigation}>Go Back</Button>
            </div>
        </CentralizeContainer>
    );
};

export default Detail;
