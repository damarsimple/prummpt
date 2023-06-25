"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handle = async () => {
    if (prompt.length === 0) {
      setResponse("Please enter a prompt");

      return;
    }

    setLoading(true);

    const res = await fetch("/api", {
      body: JSON.stringify({ prompt }),
      method: "POST",
    });

    const data = await res.text();

    setResponse(data);

    setLoading(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        Welcome to our chat document app
      </p>

      {/* input */}

      <p className={`m-0  text-sm opacity-50 my-10`}>{text}</p>

      <hr />

      {loading && <p className={`m-0  text-sm opacity-50 my-10`}>Loading...</p>}
      <p className={`m-0  text-sm opacity-50 my-10`}>{response}</p>
      <label htmlFor="chat"></label>
      <input
        type="text"
        name="chat"
        id="chat"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        disabled={loading}
        placeholder="What do you want to ask?"
        className="w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 text-black"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg my-2 w-full"
        onClick={handle}
        disabled={loading}
      >
        Send
      </button>
    </main>
  );
}

const text = `Indonesia (pengucapan bahasa Indonesia: [in.ˈdo.nɛ.sja]), dikenal dengan
        nama resmi Republik Indonesia atau lebih lengkapnya Negara Kesatuan
        Republik Indonesia, adalah negara kepulauan di Asia Tenggara yang
        dilintasi garis khatulistiwa dan berada di antara daratan benua Asia dan
        Oseania, sehingga dikenal sebagai negara lintas benua, serta antara
        Samudra Pasifik dan Samudra Hindia. Indonesia merupakan negara terluas
        ke-14 sekaligus negara kepulauan terbesar di dunia dengan luas wilayah
        sebesar 1.904.569 km²,[13] serta negara dengan pulau terbanyak ke-6 di
        dunia, dengan jumlah 17.504 pulau.[14] Nama alternatif yang dipakai
        untuk kepulauan Indonesia disebut Nusantara.[15] Selain itu, Indonesia
        juga menjadi negara berpenduduk terbanyak ke-4 di dunia dengan penduduk
        mencapai 277.749.853 jiwa pada tahun 2022,[16] serta negara dengan
        penduduk beragama Islam terbanyak di dunia, dengan penganut lebih dari
        238.875.159 jiwa atau sekitar 86,9%.[17][18] Indonesia adalah negara
        multiras, multietnis, dan multikultural di dunia, seperti halnya Amerika
        Serikat.[19] Indonesia berbatasan dengan sejumlah negara di Asia
        Tenggara dan Oseania. Indonesia berbatasan di wilayah darat dengan
        Malaysia di Pulau Kalimantan dan Sebatik, dengan Papua Nugini di Pulau
        Papua, dan dengan Timor Leste di Pulau Timor. Negara yang hanya
        berbatasan laut dengan Indonesia adalah Singapura, Filipina, Australia,
        Thailand, Vietnam, Palau, dan wilayah persatuan Kepulauan Andaman dan
        Nikobar, India. Indonesia adalah negara kesatuan dengan bentuk
        pemerintahan republik berdasarkan konstitusi yang sah, yaitu
        Undang-Undang Dasar Negara Republik Indonesia Tahun 1945 (UUD 1945).[20]
        Berdasarkan UUD 1945 pula, Dewan Perwakilan Rakyat (DPR), Dewan
        Perwakilan Daerah (DPD), dan Presiden dicalonkan lalu dipilih dalam
        pemilihan umum. Ibu kota Indonesia saat ini adalah Jakarta. Pada tanggal
        18 Januari 2022, pemerintah Indonesia menetapkan Ibu Kota Nusantara yang
        berada di Pulau Kalimantan, yang menempati wilayah Kabupaten Penajam
        Paser Utara, untuk menggantikan Jakarta sebagai ibu kota yang baru.[21]
        Hingga tahun 2022, proses peralihan ibu kota masih berlangsung. Sejarah
        Indonesia banyak dipengaruhi oleh bangsa-bangsa pendatang dan penjajah.
        Kepulauan Indonesia menjadi wilayah perdagangan penting sejak abad ke-7,
        yaitu sejak berdirinya Sriwijaya, kerajaan bercorak Hinduisme-Buddhisme
        yang berpusat di Palembang. Kerajaan Sriwijaya menjalin hubungan agama
        dan perdagangan dengan bangsa Tionghoa, India, dan juga Arab. Agama dan
        kebudayaan Hinduisme-Buddhisme tumbuh, berkembang, dan berasimilasi di
        kepulauan Indonesia pada awal abad ke-4 hingga abad ke-13 Masehi.
        Setelah itu, para pedagang dan ulama dari Jazirah Arab yang membawa
        agama dan kebudayaan Islam sekitar abad ke-8 hingga abad ke-16. Pada
        akhir abad ke-15, bangsa-bangsa Eropa datang ke kepulauan Indonesia dan
        berperang untuk memonopoli perdagangan rempah-rempah di Maluku semasa
        Zaman Penjelajahan. Setelah berada di bawah kolonial Belanda, Indonesia
        yang saat itu bernama Hindia Belanda, memproklamasikan kemerdekaan di
        akhir Perang Dunia II, tepatnya pada tanggal 17 Agustus 1945.
        Selanjutnya, Indonesia mendapat berbagai tantangan dan persoalan berat,
        mulai dari bencana alam, praktik korupsi yang masif, konflik sosial,
        gerakan separatisme, proses demokratisasi, dan periode pembangunan,
        perubahan dan perkembangan sosial–ekonomi–politik, serta modernisasi
        yang pesat. Indonesia terdiri dari berbagai suku bangsa, bahasa, dan
        agama. Berdasarkan rumpun bangsa, Indonesia terdiri atas bangsa asli
        pribumi yakni Austronesia dan Melanesia di mana bangsa Austronesia yang
        terbesar jumlahnya dan lebih banyak mendiami Indonesia bagian barat.
        Dengan suku Jawa dan Sunda membentuk kelompok suku bangsa terbesar
        dengan persentase mencapai 57% dari seluruh penduduk Indonesia.[22]
        Semboyan nasional Indonesia, Bhinneka Tunggal Ika (Berbeda-beda tetapi
        tetap satu), bermakna keberagaman sosial-budaya yang membentuk satu
        kesatuan negara. Selain memiliki penduduk yang padat dan wilayah yang
        luas, Indonesia memiliki alam yang mendukung tingkat keanekaragaman
        hayati terbesar ke-2 di dunia. Indonesia merupakan anggota dari
        Perserikatan Bangsa-Bangsa (PBB), Perhimpunan Bangsa-Bangsa Asia
        Tenggara (ASEAN), Gerakan Non-Blok (GNB), Konferensi Asia–Afrika (KAA),
        Kerja Sama Ekonomi Asia Pasifik (APEC), Organisasi Kerja Sama Islam
        (OKI), dan G20.`;
