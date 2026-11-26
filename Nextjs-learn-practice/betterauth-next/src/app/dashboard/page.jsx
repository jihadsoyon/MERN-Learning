import { auth } from '@/lib/auth';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const DashboardPage = async() => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    console.log("session data in dashboard Page:", session);
    const user = session?.user;
    if(!user){
        redirect('/auth/signin');
        return <div>Plaease sign in to access the dashboard</div>
    }

    return (
        <div>
            <h2>This is Dashing Board</h2>
        </div>
    );
};

export default DashboardPage;