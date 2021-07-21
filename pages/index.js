import styled from 'styled-components'
import { Tile } from '../src/components/Tile'

import {HomeMain, FirstRow, SecondRow, RowItems} from '../src/components/styled-components'

// const HomeMain = styled.main`
//     display: flex;
//     margin-top: 60px;
//     width: 1800px;
//     height: 800px;
//     background-color: #7487b8;
//     border-radius: 2rem;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     text-align: center;
//     box-shadow: 0 0 1em black;
// `

// const FirstRow = styled.div`
//   width: 90%;
//   height: 40%;
//   margin: 0;
//   /* align-items: center;
//   justify-content: center; */
//   transform: translate(0%, -5%);
// `

// const SecondRow = styled.div`
//   width: 90%;
//   height: 40%;
//   margin: 0;
//   /* align-items: center;
//   justify-content: center; */
//   transform: translate(0%, 5%);
// `

// const RowItems = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100%;
// `

export default function Home() {
  return (
    <>
      {/* <HomeBody> */}
        <HomeMain>
          <FirstRow>
            <RowItems>
              <Tile name="Estoque" iconName="box-open" href="/estoque" />
              <Tile name="Caixa" iconName="cash-register" href="/caixa" />
              <Tile name="Vendas" iconName="dollar-sign" href="/vendas" />
              <Tile name="Categoria de Produtos" iconName="boxes" href="/categoria-produtos" />
              <Tile name="Cadastro de Produtos" iconName="cart-plus" href="/cadastro-produtos" />
              <Tile name="Trocas e Devoluções" iconName="exchange-alt" href="/trocas-devolucoes" />
            </RowItems>

          </FirstRow>
          <SecondRow>
            <RowItems>
              <Tile name="Clientes" iconName="users" href="/clientes" />
              <Tile name="Vendedores" iconName="id-card-alt" href="/vendedores"></Tile>
              <Tile name="Fornecedores" iconName="truck-loading" href="/fornecedores"></Tile>
              <Tile name="Método de Pagamento" iconName="hand-holding-usd" href="/metodos-pagamento"></Tile>
              <Tile name="Permutas" iconName="people-carry" href="/permutas"></Tile>
              <Tile name="Etiquetas" iconName="tags" href="/etiquetas"></Tile>
            </RowItems>
          </SecondRow>
        </HomeMain>
      {/* </HomeBody> */}
    </>
  )
}
