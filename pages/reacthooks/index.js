import { useState, useEffect, useRef } from "react";
import router from "next/router";
import Link from "next/link";
import Head from "next/head";

export default function ReactHooks(){
    //Fungsi (tidak ditampilkan), yg ditampilkan di web hanya pada fungsi return
    const pemberitahuan = () => {
        alert("Halooo")
    };

    const [status, setStatus] = useState();

    const [angka, setAngka] = useState(0); 
    const penjumlahan = () => {
        setAngka(angka + 1);
    };

    const [text, setText] = useState("");

    // mengubah/terjadi sesuatu di web maka useEffect dijalankan, contohnya ngeklik tombol
    useEffect(() => {
        console.log("useEffect pertama")
    });
    useEffect(() => {
        console.log("useEffect kedua")
        refInput.current.value= "tes"; // ketika angka berubah maka nilai input akan berubah menjadi "tes"
    }, [angka]) // useEffect kedua hanya dijalankan jika angka berubah

    const refInput = useRef();

    return (
        <>
            <Head>
                <title>Pelatihan WebDev | Hari Ketiga</title>
            </Head>
            <div className="flex flex-col items-center justify-center gap-[10px]">
                <button onClick={pemberitahuan}>klik saya1</button>
                <button onClick={() => alert("Halo")}>klik saya2</button>

                <button onClick={() => setStatus("Libur")}>Set status jadi libur</button>
                <button onClick={() => setStatus("Online")}>Set status jadi online</button>

                <p>Status: {status}</p>

                <button onClick={penjumlahan}>Tambah 1</button>
                <p>Angka: {angka}</p>

                <input 
                    type="text" 
                    onChange={(e)=>setText(e.target.value)} 
                    className="ring-[3px] ring-inset ring-red-400 p-[5px]" 
                    ref={refInput} // mengisi nilai awal dengan "tes"
                />

                <p>{text}</p>

                <button onClick={()=>{
                    router.push("/")
                }}>Tombol ke beranda
                </button>

                <button onClick={()=>{
                    router.push("/modal")
                }}>Tombol ke halaman modal
                </button>

                <Link href="/">
                    <button>Tombol ke beranda pakai tag Link</button>
                </Link>

                <Link href="/modal">
                    <button>Tombol ke halaman modal pakai tag Link</button>
                </Link>

                <a href="https://www.youtube.com/">
                    <button>Tombol ke YouTube</button>
                </a>

                <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
                    <button>Tombol ke YouTube pakai tab baru</button>
                </a>
            </div>
        </>
    );
}
