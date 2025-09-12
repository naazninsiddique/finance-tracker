import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function TransactionList() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        const res = await axios.get('http://localhost:5000/api/transactions');
        setTransactions(res.data);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/transactions/${id}`);
        fetchTransactions();
    };

    return (
        <div>
            <Link to="/add" className="add-button">Add Transaction</Link>
            <ul>
                {transactions.map(tx => (
                    <li key={tx._id}>
                        <span>{tx.title} | {tx.amount} | {new Date(tx.date).toLocaleDateString()} | {tx.category}</span>
                        <div>
                            <Link to={`/${tx._id}/edit`} className="edit-button">Edit</Link>
                            <button className="delete-button" onClick={() => handleDelete(tx._id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TransactionList;
