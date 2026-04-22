"use client";

export default function TransactionsPage() {

    async function handleClick() {
        await fetch("/api/transactions", {
            method: "POST",
            body: JSON.stringify({
                amount: 100,
                category: "food"
            })
        });
    }

    return (
        <div>
            <h1>Transactions</h1>

            <button onClick={handleClick}>
                Agregar gasto
            </button>
        </div>
    );
}