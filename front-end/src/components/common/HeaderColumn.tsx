import styled from 'styled-components';

const HeaderColumn = styled.td`
padding: 12px 15px;
@media (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
    display: block; 
    position: absolute;
    top: -9999px;
    left: -9999px;
}
`;
export default HeaderColumn;