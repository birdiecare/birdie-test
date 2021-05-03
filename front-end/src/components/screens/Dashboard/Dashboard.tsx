import * as React from 'react';
import { connect } from 'react-redux';
import { Event } from '@App/interface/event';
import { fetchEventsRequest } from '@App/store/actions/events';
import { Dispatch } from 'redux';
import { Link } from 'react-router-dom';
import { Loader } from '@App/components/common/Loaders/Loaders';
import { Paginate } from '@App/interface/paginate';
import FormInput from '@App/components/common/FormInput';
import {
    BodyRow,
    Button,
    CentralizeContainer,
    Column,
    Container,
    ErrorText,
    HeaderColumn,
    HeaderRow,
    Logo,
    Row,
    SubTitle,
    Table,
    Title
} from '@App/components/common';
const LogoUrl = require('../../../assets/images/logo-birdie.svg');

interface Dash {
    events: Array<Event>,
    fetchEventsRequest: (query: Paginate) => void
}

const Dashboard = ({ events, fetchEventsRequest }: Dash) => {

    const [loaderError, setLoaderError] = React.useState({ loader: false, error: '' });
    const [pageAndLimit, setPageAndLimit] = React.useState({ page: 1, limit: 10 });

    const fetchEventData = async () => {
        setLoaderError(oldState => ({ ...oldState, loader: true, error: 'Loading' }));
        await fetchEventsRequest(pageAndLimit);
        setLoaderError(oldState => ({ ...oldState, loader: false, error: '' }));
    }
    React.useEffect(() => {
        fetchEventData()
    }, [fetchEventsRequest]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPageAndLimit(oldState => ({
            ...oldState,
            [event.target.name]: event.target.value,
        }))
    }

    return (
        <Container>
            <Logo src={LogoUrl} />
            <Title>Dashboard</Title>
            <SubTitle>All your records in one place</SubTitle>
            <Row>
                <FormInput
                    label={'Page'}
                    value={pageAndLimit.page}
                    name="page"
                    onChange={handleInputChange}
                />
                <FormInput
                    label={'Limit'}
                    value={pageAndLimit.limit}
                    name="limit"
                    onChange={handleInputChange}
                />
                <Button onClick={fetchEventData}>
                    Filter
                </Button>
            </Row>
            {loaderError.loader ?
                <CentralizeContainer>
                    <Loader />
                </CentralizeContainer>
                :
                <>
                    <Table>
                        <thead>
                            <HeaderRow>
                                <HeaderColumn>Caregiver Recipient</HeaderColumn>
                                <HeaderColumn>Visit ID</HeaderColumn>
                                <HeaderColumn>Event Type</HeaderColumn>
                                <HeaderColumn>Time</HeaderColumn>
                            </HeaderRow>
                        </thead>
                        <tbody>
                            {
                                events.map(({ payload }: Event) => (
                                    <BodyRow key={payload.id}>
                                        <Column>
                                            <Link
                                                to={{
                                                    pathname: '/detail',
                                                    state: { payload }
                                                }}
                                            >
                                                {payload.care_recipient_id}
                                            </Link>
                                        </Column>
                                        <Column>{payload.visit_id}</Column>
                                        <Column>{payload.event_type}</Column>
                                        <Column>{new Date(payload.timestamp).toUTCString()}</Column>
                                    </BodyRow>
                                ))}
                        </tbody>
                    </Table>
                    {events.length === 0 && <ErrorText> No Data </ErrorText>}
                </>
            }
        </Container>
    );
};

const mapStateToProps = (state: {events: Array<Event>} ) => {
    const { events } = state
    return { events };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchEventsRequest: (query: Paginate) => dispatch(fetchEventsRequest(query)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);