import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function TransactionForm({ isEdit = false }) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (isEdit && id) {
            axios.get(`http://localhost:5000/api/transactions/${id}`)
                .then(res => {
                    const tx = res.data;
                    setTitle(tx.title);
                    setAmount(tx.amount);
                    setDate(tx.date.split('T')[0]);
                    setCategory(tx.category);
                });
        }
    }, [isEdit, id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { title, amount, date, category };
        if (isEdit) {
            await axios.put(`http://localhost:5000/api/transactions/${id}`, data);
        } else {
            await axios.post('http://localhost:5000/api/transactions', data);
        }
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
            <input type="number" placeholder="Amount (+/-)" value={amount} onChange={e => setAmount(e.target.value)} required />
            <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
            <input type="text" placeholder="Category (e.g., Income, Expense)" value={category} onChange={e => setCategory(e.target.value)} required />
            <button type="submit">{isEdit ? 'Update' : 'Add'} Transaction</button>
        </form>
    );
}

export default TransactionForm;
