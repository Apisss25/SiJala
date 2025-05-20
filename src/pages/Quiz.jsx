import React, { useState } from "react";

// Data soal dan jawaban
const questions = [
  {
    id: 1,
    text: "Jika terjadi kecelakaan kecil, apa yang harus dilakukan?",
    options: [
      { label: "A. Marah-marah", value: false },
      { label: "B. Lari dari tempat kejadian", value: false },
      { label: "C. Saling menyalahkan", value: false },
      { label: "D. Tetap tenang dan selesaikan dengan damai", value: true },
    ],
  },
  {
    id: 2,
    text: "Apa arti lampu lalu lintas berwarna merah?",
    options: [
      { label: "A. Jalan terus", value: false },
      { label: "B. Hati-hati", value: false },
      { label: "C. Berhenti", value: true },
      { label: "D. Belok kanan", value: false },
    ],
  },
  {
    id: 3,
    text: "Apa warna dasar rambu peringatan di jalan raya?",
    options: [
      { label: "A. Hijau", value: false },
      { label: "B. Kuning", value: true },
      { label: "C. Merah", value: false },
      { label: "D. Biru", value: false },
    ],
  },
  {
    id: 4,
    text: "Bagaimana posisi yang benar saat menyeberang jalan?",
    options: [
      { label: "A. Lari cepat-cepat", value: false },
      {
        label: "B. Menyeberang di zebra cross sambil melihat kiri-kanan",
        value: true,
      },
      { label: "C. Menyeberang di tengah jalan sembarangan", value: false },
      { label: "D. Ikut saja orang lain", value: false },
    ],
  },
  {
    id: 5,
    text: "Apa yang harus dilakukan jika melihat rambu “STOP”?",
    options: [
      { label: "A. Kurangi kecepatan", value: false },
      { label: "B. Tetap jalan terus", value: false },
      { label: "C. Berhenti total", value: true },
      { label: "D. Klakson 3 kali", value: false },
    ],
  },
  {
    id: 6,
    text: "Mengapa penting mengecek kendaraan sebelum bepergian jauh?",
    options: [
      { label: "A. Supaya tidak bosan", value: false },
      { label: "B. Biar tampak keren", value: false },
      { label: "C. Untuk keamanan dan mencegah kerusakan", value: true },
      { label: "D. Agar irit bahan bakar", value: false },
    ],
  },
  {
    id: 7,
    text: "Apa yang harus dilakukan saat ada kendaraan darurat (ambulans, pemadam) dengan sirene berbunyi?",
    options: [
      { label: "A. Tetap di tengah jalan", value: false },
      { label: "B. Mendahuluinya", value: false },
      { label: "C. Memberi jalan secepat mungkin", value: true },
      { label: "D. Klakson balik", value: false },
    ],
  },
  {
    id: 8,
    text: "Kapan waktu yang tidak aman untuk berkendara cepat?",
    options: [
      { label: "A. Jalan tol kosong", value: false },
      { label: "B. Siang hari", value: false },
      { label: "C. Jalan ramai, hujan, atau gelap", value: true },
      { label: "D. Saat tidak ada polisi", value: false },
    ],
  },
  {
    id: 9,
    text: "Mengapa harus menjaga jarak saat mengemudi di belakang kendaraan lain?",
    options: [
      { label: "A. Supaya tidak didekati orang", value: false },
      { label: "B. Biar bisa cepat belok", value: false },
      {
        label: "C. Agar bisa mengerem dengan aman jika terjadi sesuatu",
        value: true,
      },
      { label: "D. Supaya terlihat keren", value: false },
    ],
  },
  {
    id: 10,
    text: "Apa tujuan utama dari adanya aturan lalu lintas?",
    options: [
      { label: "A. Agar jalan tidak sepi", value: false },
      { label: "B. Untuk keselamatan dan ketertiban bersama", value: true },
      { label: "C. Agar polisi punya kerjaan", value: false },
      { label: "D. Supaya jalanan ramai", value: false },
    ],
  },
];
const Quiz = () => {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  const percentage = Math.round((score / questions.length) * 100);
  const getMessage = () => {
    if (percentage === 100) return "Sangat Memahami!";
    if (percentage >= 80) return "Memahami dengan Baik";
    if (percentage >= 60) return "Perlu Perbaikan";
    return "Perlu Belajar Lagi";
  };

  return (
    <div className="min-h-screen bg-[#EFEEEA] flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8">
        {!started ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Quiz Lalu Lintas
            </h2>
            <p className="text-gray-600 mb-6">
              Uji pengetahuanmu mengenai aturan dan rambu lalu lintas.
            </p>
            <button
              onClick={() => setStarted(true)}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Mulai Quiz
            </button>
          </div>
        ) : !showResult ? (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Pertanyaan {current + 1} dari {questions.length}
              </h2>
              <p className="mt-2 text-gray-600">{questions[current].text}</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {questions[current].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(opt.value)}
                  className="w-full text-left px-4 py-2 border border-gray-300 rounded hover:bg-green-100 transition"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Hasil Quiz
            </h2>
            <p className="text-lg text-green-600 mb-2">
              Skor: {score} / {questions.length} ({percentage}%)
            </p>
            <p className="text-gray-700 mb-4">{getMessage()}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Ulangi Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
