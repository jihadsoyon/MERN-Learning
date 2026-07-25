import UsersList from "@/components/UsersList";
import { Suspense } from "react";


const getUsers = async () => {
    const res = await fetch('http://localhost:8000/users');
    return res.json();
}

const Users2Page = async () => {
    const userPromise = getUsers();
    return (
        <div>
            <h2>Users2: with suspense</h2>
            <Suspense fallback={<div>Loading...</div>}>
            <UsersList usersPromise={userPromise}></UsersList>
            </Suspense>
        </div>
    );
};

export default Users2Page;