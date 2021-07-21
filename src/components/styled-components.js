import styled from 'styled-components'

// ############ HOME ############
export const HomeMain = styled.main`
    display: flex;
    margin-top: 60px;
    width: 1800px;
    height: 800px;
    background-color: #7487b8;
    border-radius: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-shadow: 0 0 1em black;
`

export const FirstRow = styled.div`
  width: 90%;
  height: 40%;
  margin: 0;
  /* align-items: center;
  justify-content: center; */
  transform: translate(0%, -5%);
`

export const SecondRow = styled.div`
  width: 90%;
  height: 40%;
  margin: 0;
  /* align-items: center;
  justify-content: center; */
  transform: translate(0%, 5%);
`

export const RowItems = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

// ############ CADASTRO DE PRODUTOS ############

export const GlobalContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 98%;
    height: 98%;
    background-color: whitesmoke;
    padding: 20px;
    color: rgba(0, 0, 0, 0.5);
    border-radius: 2rem;
    font-size: 2rem;
    max-height: 90%;
`

export const HeaderBanner = styled.div`
    display: flex;
    padding: 5px;
    font-size: 1.5rem;
    text-align: center;
`

export const CentralColumn = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`