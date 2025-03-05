import React from "react";
import Link from "next/link";

const HomePage = () => {
    return (
      <div>
        <h1>Selamat Datang di Website Rayhan!</h1>
        <p>Ini adalah halaman utama</p>
        <Link href="/about"> Tentang Saya </Link>
      </div>
    );
};

export default HomePage;
