import React from "react";

const UserDetail = ({ user }) => {
    if (!user) {
        return <h1>Pengguna tidak ditemukan</h1>;
    }

    return (
        <div>
            <h1>DETAIL PENGGUNA</h1>
            <h2><b>Name:</b> {user.name} </h2>
            <p><b>Username:</b> {user.username} </p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Address:</b></p>
            <p><b>Street:</b> {user.address.street}</p>
            <p><b>Suite:</b> {user.address.suite}</p>
            <p><b>City:</b> {user.address.city}</p>
            <p><b>Zipcode:</b> {user.address.zipcode}</p>
            <p><b>Phone Number:</b> {user.phone}</p>
            <p><b>Website:</b> {user.website}</p>
            <p><b>Company:</b></p>
            <p><b>Name:</b> {user.company.name}</p>
            <p><b>Catch Phrase:</b> {user.company.catchPhrase}</p>
            <p><b>bs:</b> {user.company.bs}</p>

        </div>
    );
};

export async function getStaticPaths() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    const paths = users.map((user) => ({
        params: { id: user.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();

    return {
        props: {
            user,
        },
    };
}

export default UserDetail;
