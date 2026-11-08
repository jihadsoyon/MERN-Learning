import React from 'react';

const AppsDetailsPage =async ({params}) => {
    const {id} = await params
    console.log(id);
    return (
        <div>
            This is app details page
        </div>
    );
};

export default AppsDetailsPage;