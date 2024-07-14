'use client'
import { Form } from '../model/Form';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { RsvpForm } from '../components/RsvpForm';
                                                                
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
        <>
        <RsvpForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
        </>
    )
}
export default RsvpPage