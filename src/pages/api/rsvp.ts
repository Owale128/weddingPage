import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!; 
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
        const {firstName, lastName, guests} = req.body;

        try {
            const {error} = await supabase
            .from ("WeddingTable")
            .insert([{first_name: firstName, last_name: lastName, number_of_guests: guests}])
        
            if(error) {
                console.error('Error storing RSVP:', error);
                return res.status(500).json({ message: 'Error storing RSVP'}) 
            }
            
            return res.status(200).json({ message: 'RSVP stored'});
            
        } catch (error) {
            console.error('Error storing RSVP:', error);
            res.status(500).json({ message: 'Error storing RSVP'})
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}