import React from 'react';


export const metadata = {
  title: "Career || The Dragon News",
  description: "Dragoon News is a responsive front-end web application build with react that delivers real-time news articles on a variety of topics, complete with user authentication for personalized access. Built with modern web technologies, the app ensures a seamless user experience across devices and secure login functionality using firebase authentication.let's build the project together.",
};

const CareerPage = () => {
    return (
        <div className='min-h-[80vh] bg-white'>
            <section className='max-w-4xl mx-auto px-4 py-16'>
                <p className='text-red-600 font-semibold tracking-widest text-xs uppercase mb-3'>
                    Careers
                </p>

                <h1 className='font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4'>
                    Join The Dragon News
                </h1>

                <div className='w-16 h-1 bg-red-600 mb-8'></div>

                <p className='text-gray-700 text-base md:text-lg leading-relaxed mb-6'>
                    We are always looking for curious, driven, and talented people who care about journalism and want to make a difference. If you believe in accurate reporting and fast, responsible storytelling, we would love to hear from you.
                </p>

                <h2 className='font-serif text-2xl md:text-3xl font-semibold text-gray-900 mt-10 mb-4'>
                    Why Work With Us
                </h2>
                <ul className='list-disc pl-6 text-gray-700 leading-relaxed mb-6 space-y-2'>
                    <li>A newsroom that values accuracy, independence, and integrity</li>
                    <li>Opportunities to grow across editorial, design, and technology roles</li>
                    <li>A collaborative team that supports learning and new ideas</li>
                    <li>A workplace that respects work-life balance</li>
                </ul>

                <h2 className='font-serif text-2xl md:text-3xl font-semibold text-gray-900 mt-10 mb-4'>
                    Open Positions
                </h2>
                <p className='text-gray-700 leading-relaxed mb-6'>
                    We do not have any open positions listed right now, but we welcome applications for future opportunities. Please send your resume and a short introduction to our team.
                </p>

                <h2 className='font-serif text-2xl md:text-3xl font-semibold text-gray-900 mt-10 mb-4'>
                    How to Apply
                </h2>
                <p className='text-gray-700 leading-relaxed mb-6'>
                    Send your CV, portfolio or writing samples, and a brief cover letter to{' '}
                    <a href='mailto:careers@thedragonnews.com' className='text-red-600 hover:underline'>
                        careers@thedragonnews.com
                    </a>
                    . Please put the position name in the subject line.
                </p>

                <div className='mt-10 p-6 border-l-4 border-red-600 bg-gray-50'>
                    <p className='font-serif text-lg font-semibold text-gray-900 mb-2'>
                        Equal Opportunity
                    </p>
                    <p className='text-gray-600 text-sm leading-relaxed'>
                        The Dragon News welcomes applicants from all backgrounds and does not discriminate on the basis of gender, religion, ethnicity, or disability.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default CareerPage;