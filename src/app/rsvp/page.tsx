import style from '../sass/Rsvp.module.scss';
import React from 'react';
                                                                
const RsvpPage = () => {

    return(
        <div className={style.container}>
            <h1>RSVP</h1>
            <form className={style.form}>
                <div className={style.formGroup}>
                    <label htmlFor="firstName">Firstname:</label>
                    <input type="text" name='firstName' />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="lastname">Lastname:</label>
                    <input type="text" name='lastName' />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="guests">Number of guests:</label>
                    <input type="number" id='guests' name='guests' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default RsvpPage