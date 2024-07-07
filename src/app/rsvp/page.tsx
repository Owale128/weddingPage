import style from '../sass/Rsvp.module.scss';
import React from 'react';

const RsvpPage = () => {

    return(
        <div className={style.container}>
            <h1>RSVP</h1>
            <form className={style.form}>
                <div className={style.formGroup}>
                    <label htmlFor="name">Namn:</label>
                    <input type="text" id='name' name='name' />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id='email' name='email' />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="guests">Antal gäster:</label>
                    <input type="number" id='guests' name='guests' />
                </div>
                <button type='submit'>Skicka</button>
            </form>
        </div>
    )
}
export default RsvpPage