import styled from 'styled-components';

const Column = styled.td`
padding: 12px 15px;
@media (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
    display: block; 
    border: none;
		position: relative;
        padding: 5;
		padding-left: 50%;
        &:before { 
            position: absolute;
            top: 6px;
            left: 6px;
            width: 45%; 
            padding-right: 10px; 
            white-space: nowrap;
        }
    &:nth-of-type(1):before { content: "Caregiver Recipient"; }
	&:nth-of-type(2):before { content: "Visit ID"; }
	&:nth-of-type(3):before { content: "Event Type"; }
	&:nth-of-type(4):before { content: "Time"; }
}
`;
export default Column;