import React from "react";
import Link from "next/link";

const Users = ({ posts }) => {
    return (
        <div>
            <h1>Daftar Pengguna</h1>
            {posts.map((post) => (
                <div key={post.id}>        
                    <h2>
                        <Link href={`/users/${post.id}`}>
                            {post.name}, &quot;{post.username}&quot;
                        </Link>
                    </h2>
                </div>
            ))}
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    };
}

export default Users;
