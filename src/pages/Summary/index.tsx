import { SummaryCard, SummaryContainer } from './styles'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Summary() {
  const { income, outcome, total } = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard textColor="green">
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(income)}</strong>
      </SummaryCard>
      <SummaryCard textColor="red">
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{'-' + priceFormatter.format(outcome)}</strong>
      </SummaryCard>
      {total < 0 ? (
        <SummaryCard variant="red">
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} color="#fff" />
          </header>
          <strong>{priceFormatter.format(total)}</strong>
        </SummaryCard>
      ) : (
        <SummaryCard variant="green">
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} color="#fff" />
          </header>
          <strong>{priceFormatter.format(total)}</strong>
        </SummaryCard>
      )}
    </SummaryContainer>
  )
}
