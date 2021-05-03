import styled from 'styled-components';

const Row = styled.div`
display: flex;
align-items: flex-end;
@media (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
}
`;

export default Row;