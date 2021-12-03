import { useState } from "react";
import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyles } from "./styles/global";
import { TransactionsProvider } from "./TransactionContext";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, SetIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    SetIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    SetIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyles />
    </TransactionsProvider>
  );
}
