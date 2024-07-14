import { ChangeEvent, FormEvent } from 'react';
import style from '../sass/Rsvp.module.scss';

interface IRsvpForm {
    formData: {
        firstName: string;
        lastName: string;
        guests: number;
    }
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (e: FormEvent) => void
}

export const RsvpForm = ({formData, handleChange, handleSubmit}: IRsvpForm) => {


    return(
        <div className={style.container}>
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.formGroup}>
                <label htmlFor="firstName">Firstname:</label>
                <input type="text"
                 name='firstName'
                 value={formData.firstName}
                 onChange={handleChange}
                 />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="lastname">Lastname:</label>
                <input type="text"
                 name='lastName'
                 value={formData.lastName}
                 onChange={handleChange}
                 />
            </div>
            <div className={style.formGroup}>
                <label htmlFor="guests">Number of guests:</label>
                <input 
                type="number"
                 name='guests'
                 value={formData.guests}
                 onChange={handleChange}
                  />
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
    )
}