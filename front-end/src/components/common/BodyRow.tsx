import styled from 'styled-components';

const BodyRow = styled.tr`
color: #5f615d;
border-bottom: 1px solid #dddddd;
@media (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
&:nth-of-type(odd) { 
    background: #eee; 
  }
}
`;

export default BodyRow;