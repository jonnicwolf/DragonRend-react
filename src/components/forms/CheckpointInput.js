import React from 'react';

const CheckpointInput = () => {
    return (
        <form>
            <label for="checkpoint">Enter your checkpoint key</label>
            <input name='checkpoint' type="number"/>
            <button type='submit'>Done</button>
        </form>
    )
};

export default CheckpointInput;
