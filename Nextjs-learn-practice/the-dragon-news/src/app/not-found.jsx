import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className='min-h-[80vh] flex flex-col justify-center items-center px-4 text-center bg-white'>
            <p className='text-red-600 font-semibold tracking-widest text-xs uppercase mb-3'>
                Error 404
            </p>

            <h1 className='font-serif text-7xl md:text-9xl font-bold text-gray-900 leading-none mb-2'>
                404
            </h1>

            <div className='w-16 h-1 bg-red-600 mb-6'></div>

            <h2 className='font-serif text-2xl md:text-3xl font-semibold text-gray-900 mb-3'>
                This page is not found
            </h2>

            <p className='text-gray-500 text-sm md:text-base max-w-md mb-8'>
                The page you are looking for may have been removed, renamed, or is temporarily unavailable.
            </p>

            <div className='flex flex-wrap justify-center gap-3'>
                <Link
                    href='/'
                    className='px-6 py-2.5 rounded bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition'
                >
                    Back to Home
                </Link>

                <Link
                    href='/latest'
                    className='px-6 py-2.5 rounded border border-gray-300 text-gray-800 text-sm font-medium hover:bg-gray-100 transition'
                >
                    Latest News
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;