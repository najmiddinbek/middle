import Link from 'next/link'
import React from 'react'


export default function Tahrirlash({ id }) {
    const handleOorganish = async () => {
        try {
            const res = await fetch(`/api/oorganish/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // You can include a request body if needed
                // body: JSON.stringify({ /* your data here */ }),
            });

            if (!res.ok) {
                throw new Error('O`rganishda xatolik');
            }

            // Handle success, e.g., update UI or state
            console.log('O`rganish muvaffaqiyatli amalga oshirildi');
        } catch (error) {
            console.error('O`rganish xatolik: ', error);
        }
    };

    return (
        <button className='green text-white border py-2 px-4 cursor-pointer' onClick={handleOorganish}>
            O`rganish
        </button>
    );
}
