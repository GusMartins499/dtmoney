import { createContext, useEffect, useState } from "react";

import { api } from "./services/api";

interface ITransaction {
  id: number;
  title: string;
  category: string;
  amount: number;
  type: string;
  createdAt: string;
}

interface ITransactionsProviderProps {
  children: React.ReactNode;
}

export const TransactionsContext = createContext<ITransaction[]>([]);

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}
