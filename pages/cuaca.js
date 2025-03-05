import { useState } from "react";

const Cuaca = () => {
    const [city, setCity] = useState("");
    const [cuaca, setCuaca] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCuaca = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/cuaca?city=${city}`);
            if (!response.ok) {
                throw new Error("Gagal mengambil data cuaca. Periksa nama kota!");
            }

            const data = await response.json();
            setCuaca(data);
        } catch (error) {
            setError(error.message);
            setCuaca(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h1>Informasi Cuaca</h1>
            <form onSubmit={fetchCuaca} className="form">
                <input 
                    type="text" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    placeholder="Masukkan nama kota" 
                    required
                    className="input"
                />
                <button type="submit" className="button">Cek Cuaca</button>
            </form>

            {loading && <p>Memuat data cuaca...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {cuaca && (
                <div>
                    <h2><b>{cuaca.name}</b></h2>
                    <p>Suhu: {cuaca.main.temp}°C</p>
                    <p>Kelembaban: {cuaca.main.humidity}%</p>
                    <p>Kecepatan Angin: {cuaca.wind.speed} m/s</p>
                    <p>Cuaca: {cuaca.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default Cuaca;
