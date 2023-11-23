import { useState } from "react";
import { QrReader } from "react-qr-reader";

const QRScannerButton = () => {
  const [showScanner, setShowScanner] = useState(false);

  const handleButtonClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      setShowScanner(true);

      stream.getTracks().forEach((track) => track.stop());
    } catch (error) {
      console.error("Gagal mendapatkan izin kamera:", error);
    }
  };

  const handleScan = (data) => {
    if (data) {
      console.log(`QR Code scanned: ${data}`);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <button onClick={handleButtonClick} className="">
        Scan QR Code
      </button>

      {showScanner && (
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
      )}
    </div>
  );
};

export default QRScannerButton;
