
import { useState } from "react";

const games = [
  { id: "pubg", name: "PUBG Mobile" },
  { id: "freefire", name: "Free Fire" },
  { id: "codm", name: "Call of Duty Mobile" },
];

const packages = {
  pubg: [
    { id: "60uc", label: "60 UC", price: 1 },
    { id: "300uc", label: "300 UC", price: 5 },
  ],
  freefire: [
    { id: "100gems", label: "100 جواهر", price: 1 },
    { id: "500gems", label: "500 جواهر", price: 5 },
  ],
  codm: [
    { id: "80cp", label: "80 CP", price: 1 },
    { id: "420cp", label: "420 CP", price: 5 },
  ],
};

export default function Home() {
  const [selectedGame, setSelectedGame] = useState("pubg");
  const [selectedPackage, setSelectedPackage] = useState("60uc");
  const [playerId, setPlayerId] = useState("");

  const handleTopUp = () => {
    alert(
      `سيتم شحن ${selectedPackage} للعبة ${selectedGame} على الحساب ${playerId}. يرجى تحويل USDT إلى العنوان المعروض.`
    );
  };

  const packageOptions = packages[selectedGame];
  const selected = packageOptions.find((p) => p.id === selectedPackage);

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>عيسى السالم</h1>
      <img src="/bulldozer.jpg" alt="بلدوزر" style={{ width: '300px', marginBottom: '20px' }} />
      <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>شحن ألعاب باستخدام USDT</h2>

      <div style={{ marginBottom: '10px' }}>
        <label>اختر اللعبة:</label>
        <select value={selectedGame} onChange={(e) => setSelectedGame(e.target.value)}>
          {games.map(game => (
            <option key={game.id} value={game.id}>{game.name}</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>اختر الباقة:</label>
        <select value={selectedPackage} onChange={(e) => setSelectedPackage(e.target.value)}>
          {packageOptions.map(pkg => (
            <option key={pkg.id} value={pkg.id}>{pkg.label} - {pkg.price} USDT</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>معرّف اللاعب:</label>
        <input
          type="text"
          value={playerId}
          onChange={(e) => setPlayerId(e.target.value)}
          placeholder="أدخل ID الخاص بك"
        />
      </div>

      <button onClick={handleTopUp} style={{ padding: '10px 20px', marginTop: '10px' }}>شحن الآن</button>
    </div>
  );
}
