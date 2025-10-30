import React, { useState } from "react";
import styles from "./InfoSection.module.css";

const InfoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("what-is-bmi");

  const tabs = [
    { id: "what-is-bmi", label: "Apa itu BMI?", icon: "📊" },
    { id: "how-to-calculate", label: "Cara Menghitung", icon: "🧮" },
    { id: "ideal-weight", label: "Berat Ideal", icon: "⚖️" },
    { id: "health-risks", label: "Risiko Kesehatan", icon: "⚠️" },
  ];

  const content = {
    "what-is-bmi": {
      title: "Apa itu BMI (Body Mass Index)?",
      content: `
        <p>BMI adalah singkatan dari Body Mass Index atau Indeks Massa Tubuh. Ini adalah ukuran yang digunakan untuk menilai apakah berat badan seseorang sehat atau tidak berdasarkan tinggi badannya.</p>
        <p>BMI diperkenalkan oleh seorang ahli statistik Belgia bernama Adolphe Quetelet pada abad ke-19. Meskipun bukan ukuran yang sempurna, BMI masih menjadi alat yang paling umum digunakan untuk mengklasifikasikan status berat badan.</p>
        <div class="highlight">
          <strong>Rumus BMI:</strong> Berat Badan (kg) ÷ [Tinggi Badan (m)]²
        </div>
      `,
      image: "📊",
    },
    "how-to-calculate": {
      title: "Cara Menghitung BMI dan Berat Badan",
      content: `
        <h4>1. Mengukur Berat Badan</h4>
        <p>Gunakan timbangan digital yang akurat. Pastikan Anda mengukur di pagi hari sebelum makan, dengan pakaian minimal.</p>

        <h4>2. Mengukur Tinggi Badan</h4>
        <p>Gunakan pengukur tinggi yang standar. Berdiri tegak, tumit menyentuh dinding, dan pandangan lurus ke depan.</p>

        <h4>3. Menghitung BMI</h4>
        <p>Konversi tinggi badan dari cm ke meter (bagi 100), lalu gunakan rumus: BMI = berat (kg) ÷ tinggi² (m).</p>

        <h4>4. Menentukan Kategori</h4>
        <ul>
          <li><strong>Kurus:</strong> BMI < 18.5</li>
          <li><strong>Normal:</strong> BMI 18.5 - 24.9</li>
          <li><strong>Gemuk:</strong> BMI 25 - 29.9</li>
          <li><strong>Obesitas:</strong> BMI ≥ 30</li>
        </ul>
      `,
      image: "🧮",
    },
    "ideal-weight": {
      title: "Berat Badan Ideal dan Cara Mencapainya",
      content: `
        <p>Berat badan ideal bukan hanya tentang penampilan, tapi juga tentang kesehatan. Berat badan yang ideal membantu mengurangi risiko berbagai penyakit.</p>

        <h4>Faktor yang Mempengaruhi Berat Ideal:</h4>
        <ul>
          <li>Usia dan jenis kelamin</li>
          <li>Tinggi badan</li>
          <li>Komposisi tubuh (rasio otot vs lemak)</li>
          <li>Level aktivitas</li>
          <li>Kondisi kesehatan</li>
        </ul>

        <h4>Cara Mencapai Berat Ideal:</h4>
        <div class="tips-grid">
          <div class="tip">
            <span class="tip-icon">🏃‍♂️</span>
            <strong>Olahraga Teratur:</strong> Lakukan aktivitas fisik minimal 150 menit per minggu
          </div>
          <div class="tip">
            <span class="tip-icon">🍎</span>
            <strong>Makan Seimbang:</strong> Konsumsi nutrisi lengkap dengan defisit/kalori surplus yang tepat
          </div>
          <div class="tip">
            <span class="tip-icon">💧</span>
            <strong>Hidrasi Cukup:</strong> Minum air minimal 2 liter per hari
          </div>
          <div class="tip">
            <span class="tip-icon">😴</span>
            <strong>Istirahat Cukup:</strong> Tidur 7-9 jam per malam
          </div>
        </div>
      `,
      image: "⚖️",
    },
    "health-risks": {
      title: "Risiko Kesehatan Jika Berat Tidak Ideal",
      content: `
        <p>Berat badan yang tidak ideal dapat meningkatkan risiko berbagai penyakit kronis. Penting untuk menjaga BMI dalam rentang normal.</p>

        <h4>Risiko Berat Kurang (Underweight):</h4>
        <ul>
          <li>Sistem kekebalan tubuh lemah</li>
          <li>Kekurangan nutrisi</li>
          <li>Osteoporosis (tulang keropos)</li>
          <li>Masalah kesuburan</li>
          <li>Anemia</li>
        </ul>

        <h4>Risiko Berat Berlebih (Overweight/Obese):</h4>
        <ul>
          <li>Penyakit jantung koroner</li>
          <li>Diabetes tipe 2</li>
          <li>Hipertensi (tekanan darah tinggi)</li>
          <li>Stroke</li>
          <li>Beberapa jenis kanker</li>
          <li>Sleep apnea</li>
          <li>Osteoarthritis</li>
        </ul>

        <div class="warning">
          <strong>⚠️ PENTING:</strong> BMI bukan satu-satunya indikator kesehatan. Konsultasikan dengan dokter untuk penilaian menyeluruh.
        </div>
      `,
      image: "⚠️",
    },
  };

  return (
    <section id="info" className={styles.infoSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Informasi Lengkap tentang BMI</h2>
          <p className={styles.subtitle}>
            Pelajari lebih dalam tentang Body Mass Index dan pentingnya menjaga berat badan ideal
          </p>
        </div>

        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.active : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className={styles.tabIcon}>{tab.icon}</span>
              <span className={styles.tabLabel}>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className={styles.content}>
          <div className={styles.contentCard}>
            <div className={styles.contentHeader}>
              <span className={styles.contentIcon}>
                {content[activeTab as keyof typeof content].image}
              </span>
              <h3 className={styles.contentTitle}>
                {content[activeTab as keyof typeof content].title}
              </h3>
            </div>

            <div
              className={styles.contentBody}
              dangerouslySetInnerHTML={{
                __html: content[activeTab as keyof typeof content].content,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
