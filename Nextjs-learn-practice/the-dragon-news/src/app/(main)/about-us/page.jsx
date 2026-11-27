import React from 'react';

const AboutusPage = () => {
    return (
        <div className='min-h-[80vh] bg-white'>
            <section className='max-w-4xl mx-auto px-4 py-16'>
                <p className='text-red-600 font-semibold tracking-widest text-xs uppercase mb-3'>
                    About Us
                </p>

                <h1 className='font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4'>
                    The Dragon News
                </h1>

                <div className='w-16 h-1 bg-red-600 mb-8'></div>

                <p className='text-gray-700 text-base md:text-lg leading-relaxed mb-6'>
                    The Dragon News is a digital news platform dedicated to delivering accurate, timely, and well-researched stories to readers around the world. We cover a wide range of topics, including national and international news, sports, entertainment, business, technology, and culture.
                </p>

                <h2 className='font-serif text-2xl md:text-3xl font-semibold text-gray-900 mt-10 mb-4'>
                    Our Mission
                </h2>
                <p className='text-gray-700 leading-relaxed mb-6'>
                    Our mission is to keep readers informed with reliable journalism that is free from bias. We believe every reader deserves access to facts presented clearly, so they can form their own opinions and make informed decisions in their daily lives.
                </p>

                <h2 className='font-serif text-2xl md:text-3xl font-semibold text-gray-900 mt-10 mb-4'>
                    What We Do
                </h2>
                <p className='text-gray-700 leading-relaxed mb-4'>
                    Our editorial team works around the clock to verify information, check sources, and present stories in a clear and balanced way. We organize our coverage into categories so you can quickly find the news that matters most to you.
                </p>
                <ul className='list-disc pl-6 text-gray-700 leading-relaxed mb-6 space-y-2'>
                    <li>National and international news coverage</li>
                    <li>Sports, entertainment, and culture updates</li>
                    <li>In-depth features and expert analysis</li>
                    <li>Breaking news alerts as events unfold</li>
                </ul>

                <h2 className='font-serif text-2xl md:text-3xl font-semibold text-gray-900 mt-10 mb-4'>
                    Our Values
                </h2>
                <p className='text-gray-700 leading-relaxed mb-6'>
                    Accuracy, independence, and respect for our readers guide everything we publish. We correct our mistakes openly, separate news from opinion, and treat every story with the care it deserves.
                </p>

                <h2 className='font-serif text-2xl md:text-3xl font-semibold text-gray-900 mt-10 mb-4'>
                    Contact Us
                </h2>
                <p className='text-gray-700 leading-relaxed'>
                    Have a question, feedback, or a story tip? Reach out to us at{' '}
                    <a href='mailto:contact@thedragonnews.com' className='text-red-600 hover:underline'>
                        contact@thedragonnews.com
                    </a>
                    . We would be glad to hear from you.
                </p>
            </section>
        </div>
    );
};

export default AboutusPage;