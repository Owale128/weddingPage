'use client'
import style from '../sass/Rsvp.module.scss';
import { Form } from '../model/Form';
import React, { ChangeEvent, FormEvent, useState } from 'react';
                                                                
const RsvpPage = () => {
    const [formData, setFormData] = useState<Form>({
        firstName: '',
        lastName: '',
        guests: 0
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        try {
            const response = await fetch('/api/rsvp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if(response.ok) {
                alert('RSVP recived');
            } else {
                const error = await response.json();
                alert(error.message || 'Failed to send RSVP');
            }
        } catch (error) {
            console.error('Error sending RSVP:', error)
            alert('Server error')
        }
        setFormData({
            firstName:'',
            lastName:'',
            guests: 0
        })

        console.log(formData)
    }
    return(
        <div className={style.container}>
            <h1>RSVP</h1>
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
export default RsvpPage