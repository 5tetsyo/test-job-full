import React from 'react';

const Sort = ({dispatch}) => {
    return (
        <div>
            <select onChange={(e) => dispatch({type: 'SORT_BY', payload: e.target.value})}>
                <option value={'description'}>By description</option>
                <option value={'title'}>By Name</option>
                <option value={'price'}>By price</option>
            </select>
        </div>
    );
};

export default Sort;