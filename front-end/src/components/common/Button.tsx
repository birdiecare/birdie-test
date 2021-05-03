import styled from 'styled-components';

const Button = styled.button`
background-color: #009879;
height: 30px;
color: #ffff;
border: 0;
min-width: 80px;
border-radius: 20px;
@media (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
 margin-top: 10px;
}
`;

export default Button;