import React from 'react';
import { Link } from 'react-router-dom';
import HeroLabuanBajo from '../../components/KumpulanHero/HeroLabuanBajo';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import LB from '../../assets/assetsBali/LB.jpg';
import LB2 from '../../assets/assetsBali/oleholehLB.jpg';

const LabuanBajo = () => {
  return (
    <div>
      <Navbar />
      <HeroLabuanBajo />

      <nav className="mx-14 mb-4">
        <ol className="flex items-center text-gray-500">
          <li>
            <Link to="/" className="hover:text-gray-700">Home</Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link to="/destinations" className="hover:text-gray-700">Destinations</Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link to="/cbali" className="hover:text-gray-700">Bali</Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link to="/labuanbajo" className="hover:text-gray-700">Labuan Bajo</Link>
          </li>
        </ol>
      </nav>

      <div className="  mx-14 mb-8">
        <div className="">
          <h1 className="text-6xl font-bold mb-8" style={{ width: '100%' }}>Labuan Bajo, Sepetak Surga yang Terletak di Indonesia Timur</h1>

          <p className="mb-4">Destinasi ini merupakan gerbang menuju Taman Nasional Komodo yang menyimpan keindahan alam yang menakjubkan dan hewan purba yang mendunia. Mulai dari hewan endemik komodo di Pulau Rinca dan Pulau Komodo, deretan pulau eksotis, keragaman hayati bawah laut, hingga pantai aduhai, semua bisa Sobat Pesona temukan dengan memulai perjalanan di Labuan Bajo.</p>

          <p className="mb-4">
          Menikmati pemandangan langit senja juga bisa menjadi cara lain menikmati Labuan Bajo. Spot strategis untuk menikmati keindahan senja ini berada tak jauh dari Bandar Udara Internasional Komodo. Sobat Pesona dapat memilih destinasi Bukit Cinta, Puncak Amelia, dan Puncak Silvia, untuk mengabadikan langit senja yang menentramkan jiwa. Ada juga Gua Rangko yang memiliki pesona bak oasis dengan kolam air asinnya yang begitu menyejukkan.</p>

          <p className="mb-4">
          Kalau Sobat Pesona ingin berpetualang di Labuan Bajo, trekking singkat ke Air Terjun Cunca Wulang bisa jadi pilihan. Jangan lewatkan juga pengalaman seru menjajal live-on-board, yaitu mencoba tinggal di kapal pinisi selama beberapa hari sambil berlayar mengunjungi pulau-pulau yang indah, dan bisa juga menyelam untuk melihat keindahan bawah laut Labuan Bajo yang istimewa.</p>
        </div>


        

        <div className=" mt-14 top-0" style={{ width: '100%' }}>
          <h1 className="text-4xl mt-14 font-bold mb-8">Lokasi Labuan Bajo</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63144.22140844332!2d119.82302736646712!3d-8.449306995284484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2db468a6d47ed641%3A0x87f524333c6a6e8d!2sLabuan%20Bajo%2C%20Kec.%20Komodo%2C%20Kabupaten%20Manggarai%20Barat%2C%20Nusa%20Tenggara%20Tim.!5e0!3m2!1sid!2sid!4v1686233676104!5m2!1sid!2sid" 
            title="Labuan Bajo Map"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="">
          <h1 className="text-4xl mt-14 font-bold mb-8">Gerbang Menuju Surga Dunia</h1>

            <p className="mb-4">
            Labuan Bajo dan Taman Nasional Komodo adalah satu entitas yang tidak dapat terpisahkan. Keduanya saling terhubung sehingga ketika Sobat Pesona berada di Labuan Bajo, perlu mengunjungi Taman Nasional Komodo. Untuk mencapai ke sana, Sobat Pesona bisa menggunakan kapal feri atau kapal cepat. Ada banyak pilihan keberangkatan mulai dari pagi hingga sore hari. </p>

            <p className="mb-4">
            Taman Nasional Komodo yang terdaftar sebagai Situs Warisan Dunia UNESCO pada tahun 1991 ini terdiri dari Pulau Komodo, Pulau Rinca, Pulau Padar, dan beberapa pulau lain di sekitarnya. Kehadiran komodo (Varanus komodoensis) yang merupakan kadal raksasa di dunia ini pertama kali diliput dalam jurnal ilmiah pada tahun 1912. Jurnal tersebut ditulis oleh Pieter Antonie Ouwens, Direktur Museum Zoologi Bogor. Penemuan tersebut menjadi awal mula eksistensi Labuan Bajo di mata dunia karena banyak turis dan ilmuwan yang datang untuk melihat langsung ora, sebutan komodo dari warga lokal.</p>

            <p className="mb-4">
            Ketika Sobat Pesona berada di Taman Nasional Komodo, akan disuguhkan beberapa atraksi yang menakjubkan. Salah satunya adalah berfoto bersama Komodo. Ini akan menjadi pengalaman tidak terlupakan seumur hidup yaitu berfoto bersama hewan langka yang hanya ada di Indonesia. </p>

            <p className="mb-4">
            Selain komodo, taman nasional ini juga terkenal akan panoramanya yang memesona. Sobat Pesona yang hobi fotografi, wajib memasukkan beberapa spot di sini sebagai tempat berfoto. Sebut saja Pulau Padar yang ikonik dengan pulaunya yang berbentuk perbukitan serta gradasi laut biru di latar belakang. Pulau Kelor juga tidak kalah keren lho, pemandangan pulau dan laut biru jernih dari puncak Pulau Kelor terlalu indah untuk dilewatkan. </p>

            <img src={LB} alt="Labuan Bajo" style={{ width: '70%', height: '500px' }} />

            <h1 className="text-4xl mt-14 font-bold mb-8">Oleh-oleh Khas Labuan Bajo</h1>

            <img src={LB2} alt="Oleh-Oleh Labuan Bajo" style={{ width: '70%', height: '500px' }} />

            <p className="mb-4 mt-4">
            Jika Sobat Pesona ingin membawa buah tangan sepulang dari Labuan Bajo, ada beberapa suvenir khas yang tak boleh ketinggalan, salah satunya adalah kain songke khas Tanah Manggarai. Kain ini umumnya berwarna dasar hitam dengan beragam motif warna-warni di atasnya. Sama halnya dengan kain Nusantara lain, motif kain songke sangat beragam dan memiliki maknanya tersendiri, lho! </p>

            <h1 className="text-4xl mt-14 font-bold mb-8">Akses Menuju Labuan Bajo</h1>
            
            <p className="mb-4 ">
            Labuan Bajo dapat diakses melalui jalur darat, laut, dan juga udara. Keindahan Pulau Komodo dengan kekayaan budaya lokal dan pulau-pulau eksotis di sekitarnya membuat Labuan Bajo menjadi tempat wisata yang potensial dan ramai dikunjungi.</p>

            <h1 className="text-4xl mt-14 font-bold mb-8">1.  Jalur Udara</h1>

            <p className="mb-4 ">
            Jika Sobat Pesona ingin menggunakan transportasi udara, maskapai Transnusa Airlines secara langsung menghubungkan Labuan Bajo dengan beberapa kota di Indonesia, seperti Makassar, Semarang, Balikpapan, Kupang, dan Mataram. </p>

            <p className="mb-4 ">
            Jika Sobat Pesona dari Jakarta, dapat menuju Labuan Bajo dengan beberapa maskapai seperti Batik Air dan Citilink. Jadwal keberangkatan antara pagi dan siang hari. Waktu tempuh Jakarta - Labuan Bajo hanya sekitar empat jam. </p>

            <p className="mb-4 ">
            Sobat Pesona juga bisa melakukan perjalanan ke Labuan Bajo dari Bandar Udara Gewayantana di Flores, Bandara Frans Sales Lega di Ruteng, atau Bandar Udara H. Hasan Aroeboesman di Ende. Untuk informasi jadwal penerbangan lebih lanjut, kunjungi situs web maskapai terkait ya, Sobat Pesona!</p>

            <h1 className="text-4xl mt-14 font-bold mb-8">2.  Jalur Darat</h1>

            <p className="mb-4 ">
            Melakukan road trip ke Labuan Bajo via Flores juga menarik untuk dicoba, Sobat Pesona. Rute perjalanannya dimulai dari Flores, Bajawa, Ruteng, Nancar, Mboera, hingga sampai di Labuan Bajo. Alternatif lainnya adalah dari Flores, ke Riung, Wera, Ruteng, Nancar, dan Mboera sebelum berakhir di Labuan Bajo. Perjalanan darat ini bisa memakan waktu hingga 12 jam.  </p>

            <p className="mb-4 ">
            Jika ingin alternatif lain, Sobat Pesona dapat menggunakan bus dari Bali menuju ke Mataram, Lombok. Dari sana, Sobat Pesona akan melanjutkan perjalanan menuju Bima di Sumbawa dan kemudian akan diteruskan melalui perjalanan menuju ke Sape. Saat tiba di Sape, Sobat Pesona dapat menaiki kapal feri menuju Labuan Bajo.</p>
            
            <h1 className="text-4xl mt-14 font-bold mb-8">3.  Jalur Laut </h1>

            <p className="mb-4 ">
            Tertarik menikmati perjalanan dengan transportasi laut ke Labuan Bajo? Sobat Pesona bisa menaiki kapal Leuser dari PELNI yang berlayar dari Makassar, Sulawesi Selatan atau kapal PELNI KM Binaiya yang berangkat dari Denpasar (Benoa) ke Labuan Bajo. Sobat Pesona dapat menemukannya jadwal rincian kapal selengkapnya di www.pelni.co.id.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LabuanBajo;
