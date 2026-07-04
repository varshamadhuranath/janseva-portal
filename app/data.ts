export interface Scheme {
  id: string;
  type: 'health' | 'loan' | 'banking';
  image: string;
  title: Record<string, string>;
  pay: Record<string, string>;
  get: Record<string, string>;
  how: Record<string, string>;
}

export const DATA: Scheme[] = [
  {
    id: 'health-card',
    type: 'health',
    image: 'https://assets.thehansindia.com/h-upload/2022/12/16/1325472-digital-ration-cards.webp',
    title: {
      en: "Free Hospital Card (Ayushman Bharat)",
      hi: "मुफ़्त अस्पताल कार्ड (आयुष्मान भारत)",
      kn: "ಉಚಿತ ಆಸ್ಪತ್ರೆ ಕಾರ್ಡ್ (ಆಯುಷ್ಮಾನ್ ಭಾರತ್)"
    },
    pay: { 
      en: "白0 (Totally Free)", 
      hi: "白0 (बिल्कुल मुफ्त)", 
      kn: "白0 (ಸಂಪೂರ್ಣ ಉಚಿತ)" 
    },
    get: {
      en: "Free medical treatment and operations up to 5 Lakh Rupees every year for your entire family.",
      hi: "आपके पूरे परिवार के लिए हर साल 5 लाख रुपये तक का अस्पताल का इलाज और ऑपरेशन बिल्कुल मुफ्त।",
      kn: "ನಿಮ್ಮ ಇಡೀ ಕುಟುಂಬಕ್ಕೆ ಪ್ರತಿ ವರ್ಷ 5 ಲಕ್ಷ ರೂಪಾಯಿಗಳವರೆಗೆ ಉಚಿತ ಆಸ್ಪತ್ರೆ ಚಿಕಿತ್ಸೆ ಮತ್ತು ಆಪರೇಷನ್."
    },
    how: {
      en: "Take your Yellow Ration Card or Aadhaar Card to the nearest large Government Hospital counter.",
      hi: "अपना पीला राशन कार्ड या आधार कार्ड लेकर नजदीकी सरकारी अस्पताल के आयुष्मान काउंटर पर जाएं।",
      kn: "ನಿಮ್ಮ ಹಳದಿ ಪಡಿತರ ಚೀಟಿ ಅಥವಾ ಆಧಾರ್ ಕಾರ್ಡ್ ತೆಗೆದುಕೊಂಡು ಹತ್ತಿರದ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಯ ಕೌಂಟರ್‌ಗೆ ಹೋಗಿ."
    }
  },
  {
    id: 'vendor-loan',
    type: 'loan',
    image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTSukd2KD_R0g6cMVSXon_gjkYrxyMBENSYu8TCbZcDQKwC8eJDdURGLcfHo0sllNoVgfJupSAKKiKntlo',
    title: {
      en: "Street Vendor Cash Loan (PM SVANidhi)",
      hi: "छोटे दुकानदार नकद लोन (पीएम स्वनिधि)",
      kn: "ಬೀದಿ ಬದಿ ವ್ಯಾಪಾರಿ ನಗದು ಸಾಲ (ಪಿಎಂ ಸ್ವನಿಧಿ)"
    },
    pay: { 
      en: "Low monthly returns. No registration fees.", 
      hi: "छोटी मासिक किस्तें। कोई फॉर्म फीस नहीं।", 
      kn: "ಸಣ್ಣ ಮಾಸಿಕ ಕಂತುಗಳು. ಯಾವುದೇ ಅರ್ಜಿ ಶುಲ್ಕವಿಲ್ಲ." 
    },
    get: {
      en: "10,000 to 15,000 Rupees cash in hand to buy goods. No land documents or gold needed to apply.",
      hi: "दुकान का सामान खरीदने के लिए 10,000 से 15,000 रुपये नकद। कोई जमीन या सोना गिरवी नहीं रखना है।",
      kn: "ವ್ಯಾಪಾರ ಮಾಡಲು 10,000 ರಿಂದ 15,000 ರೂಪಾಯಿ ನಗದು ಸಾಲ. ಯಾವುದೇ ಜಮೀನು ಪತ್ರ ಅಥವಾ ಚಿನ್ನ ಇಡಬೇಕಾಗಿಲ್ಲ."
    },
    how: {
      en: "Visit any local government bank counter or ask at your village Panchayat center.",
      hi: "अपने नजदीकी सरकारी बैंक काउंटर पर जाएं या ग्राम पंचायत केंद्र में संपर्क करें।",
      kn: "ನಿಮ್ಮ ಸ್ಥಳೀಯ ಸರ್ಕಾರಿ ಬ್ಯಾಂಕ್ ಕೌಂಟರ್‌ಗೆ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ಗ್ರಾಮ ಪಂಚಾಯತ್ ಕೇಂದ್ರದಲ್ಲಿ ಕೇಳಿ."
    }
  },
  {
    id: 'jan-dhan',
    type: 'banking',
    image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRi7o21bkHg-4KQvEsbjhh0EaHdjUc-IKvZ1zJmYo0dyxS0fXkmhJD3OmUqN_gqxKsxqVHvInqgm_y_zRQ',
    title: {
      en: "Zero-Money Savings Account (Jan Dhan)",
      hi: "जीरो-बैलेंस बचत खाता (जन धन योजना)",
      kn: "ಶೂನ್ಯ ಬ್ಯಾಲೆನ್ಸ್ ಉಳಿತಾಯ ಖಾತೆ (ಜನ ಧನ ಯೋಜನೆ)"
    },
    pay: { 
      en: "白0 Charges (Bank can never fine you for empty balance)", 
      hi: "白0 शुल्क (खाता खाली होने पर बैंक कोई पैसा नहीं काट सकता)", 
      kn: "白0 ಶುಲ್ಕ (ಖಾತೆ ಖಾಲಿಯಾಗಿದ್ದರೂ ಬ್ಯಾಂಕ್ ಯಾವುದೇ ದಂಡ ವಿಧಿಸುವುದಿಲ್ಲ)" 
    },
    get: {
      en: "Get a clean bank passbook, a free ATM card, and all your government scheme money directly.",
      hi: "आपको एक बैंक पासबुक, मुफ्त एटीएम कार्ड मिलेगा और सरकारी योजनाओं का पैसा सीधे इसी में आएगा।",
      kn: "ನಿಮಗೆ ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್, ಉಚಿತ ಎಟಿಎಂ ಕಾರ್ಡ್ ಸಿಗುತ್ತದೆ ಮತ್ತು ಸರ್ಕಾರದ ಹಣ ನೇರವಾಗಿ ಇದಕ್ಕೆ ಬರುತ್ತದೆ."
    },
    how: {
      en: "Walk into any State Bank of India (SBI) or nearby Post Office with your Aadhaar Card.",
      hi: "अपने आधार कार्ड ಮತ್ತು ಫೋಟೋದೊಂದಿಗೆ ಯಾವುದೇ ಸ್ಟೇಟ್ ಬ್ಯಾಂಕ್ (SBI) ಅಥವಾ ಅಂಚೆ ಕಚೇರಿಗೆ ಹೋಗಿ।",
      kn: "ನಿಮ್ಮ ಆಧಾರ್ ಕಾರ್ಡ್‌ನೊಂದಿಗೆ ಯಾವುದೇ ಸ್ಟೇಟ್ ಬ್ಯಾಂಕ್ (SBI) ಅಥವಾ ಹತ್ತಿರದ ಪೋಸ್ಟ್ ಆಫೀಸ್‌ಗೆ ಹೋಗಿ."
    }
  }
];
