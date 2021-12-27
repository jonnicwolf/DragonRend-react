import React from 'react'

const NewGameForm = () => {
    return (
        <form>
            <label for="heroName">What is your name, Hero?</label>
            <input required type="text" name="heroName"/>

            <label for="email">An email account, please!</label>
            <input required type="text" name="email"/>
            {/* when email is input, render "Would you like to recieve game and account updates?"
            also optional recovery email */}

            <button>Onto adventure</button>
        </form>
    )
};

export default NewGameForm;

