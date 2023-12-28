import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormData {
    name: string;
    email: string;
    contact: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
        // Handle your form submission here
    };

    return (
        <>

            <div
                id="contactme"
                className="w-[95%] sm:w-full max-w-4xl mx-auto mt-10 p-4 sm:p-6  rounded-md">
                <h2 className='text-center text-2xl md:text-3xl font-bold mb-4 text-gray-700'>Contact Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name *</label>
                        <input
                            type="text"
                            id="name"
                            {...register('name', { required: 'Name is required' })}
                            className={`w-full px-3 py-2 border rounded-md border-gray-400 outline-none`}
                        />
                        {errors.name && <p className="text-red-500 text-sm font-semibold">{errors.name.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email *</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                            className={`w-full px-3 py-2 border rounded-md  border-gray-400 outline-none`}
                        />
                        {errors.email && <p className="text-red-500 text-sm font-semibold">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="contact" className="block text-gray-700 font-semibold mb-2">Contact *</label>
                        <input
                            type="number"
                            {...register('contact', { required: 'Contact is required' })}
                            className={`w-full px-3 py-2 border rounded-md border-gray-400 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none`}
                        />
                        {errors.contact && <p className="text-red-500 text-sm font-semibold">{errors.contact.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message *</label>
                        <textarea
                            id="message"
                            {...register('message', { required: 'Message is required' })}
                            className={`w-full px-3 py-2 border rounded-md border-gray-400 outline-none`}
                            rows={4}
                        ></textarea>
                        {errors.message && <p className="text-red-500  text-sm font-semibold">{errors.message.message}</p>}
                    </div>

                    <button type="submit" className="mx-auto block bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded">Submit</button>
                </form>
            </div>
        </>
    );
};

export default ContactForm;
