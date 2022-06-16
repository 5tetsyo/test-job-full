import React from 'react';

const Inputs = ({setInput, input}) => {
    return (
        <div>
            <input type={'text'} onChange={(e) => setInput({...input, title: e.target.value})} value={input.title}></input>
            <input type={'text'} onChange={(e) => setInput({...input, price: e.target.value})} value={input.price}></input>
            <input type={'text'} onChange={(e) => setInput({...input, description: e.target.value})} value={input.description}></input>
            <input type={'text'} onChange={(e) => setInput({...input, image: e.target.value})} value={input.image}></input>
            <input type={'text'} onChange={(e) => setInput({...input, category: e.target.value})} value={input.category}></input>
        </div>
    );
};

export default Inputs;