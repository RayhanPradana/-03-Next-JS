export default async function handler(req, res) {
    const { city } = req.query;
    const API_KEY = "783f0956123c52a35d091d99db2ade33";
    if (!city) {
        return res.status(400).json({ message: "Nama kota harus diisi" });
    }

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error("Gagal mengambil data cuaca. Periksa nama kota!");
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
