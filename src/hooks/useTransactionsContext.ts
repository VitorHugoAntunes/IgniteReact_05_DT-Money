import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useTransactionsContext() {
  const { transactions, fetchTransactions, createTransaction } =
    useContext(TransactionsContext)
  return { transactions, fetchTransactions, createTransaction }
}
