import React from 'react';
import TransactionForm from '../components/transactionForm';

function Edit() {
    return (
        <div>
            <h2>Edit Transaction</h2>
            <TransactionForm isEdit={true} />
        </div>
    );
}

export default Edit;
