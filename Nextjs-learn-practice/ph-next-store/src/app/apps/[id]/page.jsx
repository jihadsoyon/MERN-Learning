import React from 'react';

const AppsDetails = async({params}) => {

    const {id} = await params

    console.log(id);
    return (
        <div>
            This is apps details page
        </div>
    );
};

export default AppsDetails;