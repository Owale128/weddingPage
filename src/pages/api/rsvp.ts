import pool from "../../app/utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
        const {firstName, lastName, guests} = req.body;

        try {
            await pool.query(
                'INSERT INTO guests (first_name, last_name, number_of_guests) VALUES ($1, $2, $3)',
                [firstName, lastName, guests]
            );
            res.status(200).json({ message: 'RSVP stored'});
        } catch (error) {
            console.error('Error storing RSVP:', error);
            res.status(500).json({ message: 'Error storing RSVP'})
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}