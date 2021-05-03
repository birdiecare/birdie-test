import styled from 'styled-components';

const Table = styled.table`
border-collapse: collapse;
margin: 25px 0;
font-size: 0.9em;
font-family: sans-serif;
min-width: 400px;
width: 100%;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
@media (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
    display: block; 
    box-shadow: none;
}
`;

export default Table;