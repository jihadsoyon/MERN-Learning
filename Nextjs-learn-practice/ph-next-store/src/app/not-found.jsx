import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            this page is not found
            <Link href={"/"}><button className='btn'>Back to home</button></Link>
        </div>
    );
};

export default NotFoundPage;