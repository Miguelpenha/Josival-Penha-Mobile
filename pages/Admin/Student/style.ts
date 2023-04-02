import styled from 'styled-components/native'

export const Container = styled.View`
    width: 90%;
    padding: 5%;
    margin-top: 10%;
    align-self: center;
    margin-bottom: 10%;
    border-radius: 10px;
    background-color: ${props => props.theme.backgroundColorSecondary};
`