import styled from "styled-components";

export const Table = styled.table`
width: 100%;
background-color: #FFF;
padding-top: 10px;
box-shadow: 0px 0px 5px #CCC;
border-radius: 10px;
text-align: center;
align-items: center;
margin-top: 20px;
`;

export const TableHeadColumn = styled.th<{width?:number}>`
    width: ${props => props.width ? `${props.width}` : 'auto'};
    padding:10px;
    
    

`