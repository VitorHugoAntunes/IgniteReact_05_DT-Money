import { Header } from "../../components/Header";
import { Summary } from "../Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td><PriceHighlight variant="income">R$ 12.000,00</PriceHighlight></td>
            <td>Venda</td>
            <td>10/03/2023</td>
          </tr>
          <tr>
            <td width="50%">Internet</td>
            <td><PriceHighlight variant="outcome">- R$ 100,00</PriceHighlight></td>
            <td>Conta</td>
            <td>10/03/2023</td>
          </tr>
          <tr>
            <td width="50%">Aluguel</td>
            <td>- R$ 2.000,00</td>
            <td>Conta</td>
            <td>05/03/2023</td>
          </tr>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}