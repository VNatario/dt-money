import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

import { Container } from "./styles";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1.859,96</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong> - R$ 1.238,25</strong>
      </div>

      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 735,76</strong>
      </div>
    </Container>
  );
}
