import React from 'react';

interface Params {
    id: string;
}

interface TransactionsProps {
    params: Params;
}

const Transactions: React.FC<TransactionsProps> = ({ params }) => {
    return <span>Transactions Page: {params.id}</span>;
}

export default Transactions;
