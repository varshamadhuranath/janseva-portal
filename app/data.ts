export interface Scheme {
  id: string;
  title: Record<string, string>;
  type: 'health' | 'loan' | 'banking' | 'pf';
  image: string;
  pay: Record<string, string>;
  get: Record<string, string>;
  how: Record<string, string>;
}

export const DATA: Scheme[] = [
  {
    id: 'health-card',
    type: 'health',
    image: 'https://images.thehansindia.com/h-upload/2022/12/16/1325472-digital-ration-cards.webp',
    title: {
      en: "Free Hospital Card (Ayushman Bharat)",
      hi: "मुफ़्त अस्पताल कार्ड (आयुष्मान भारत)",
      kn: "ಉಚಿತ ಆಸ್ಪತ್ರೆ ಕಾರ್ಡ್ (ಆಯುಷ್ಮಾನ್ ಭಾರತ್)"
    },
    pay: { en: "₹0 (Totally Free)", hi: "₹0 (बिल्कुल मुफ्त)", kn: "₹0 (ಸಂಪೂರ್ಣ ಉಚಿತ)" },
    get: {
      en: "Free medical treatment up to ₹5 Lakh every year for your family. Citizens aged 70+ get an extra free card.",
      hi: "आपके परिवार के लिए हर साल ₹5 लाख तक का मुफ्त इलाज। 70 साल से ऊपर के बुजुर्गों को अलग से मुफ्त कार्ड।",
      kn: "ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೆ ಪ್ರತಿ ವರ್ಷ ₹5 ಲಕ್ಷದವರೆಗೆ ಉಚಿತ ಚಿಕಿತ್ಸೆ. 70 ವರ್ಷ ಮೇಲ್ಪಟ್ಟವರಿಗೆ ಪ್ರತ್ಯೇಕ ಉಚಿತ ಕಾರ್ಡ್."
    },
    how: {
      en: "Take your Yellow Ration Card or Aadhaar Card to any big Government Hospital helpdesk.",
      hi: "अपना पीला राशन कार्ड या आधार कार्ड लेकर किसी भी बड़े सरकारी अस्पताल के काउंटर पर जाएं।",
      kn: "ನಿಮ್ಮ ಹಳದಿ ಪಡಿತರ ಚೀಟಿ ಅಥವಾ ಆಧಾರ್ ಕಾರ್ಡ್ ತೆಗೆದುಕೊಂಡು ಯಾವುದೇ ದೊಡ್ಡ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಯ ಕೌಂಟರ್‌ಗೆ ಹೋಗಿ."
    }
  },
  {
    id: 'vendor-loan',
    type: 'loan',
    image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTSukd2KD_R0g6cMVSXon_gjkYrxyMBENSYu8TCbZcDQKwC8eJDdURGLcfHo0sllNoVgfJupSAKKiKntlo',
    title: {
      en: "Street Vendor Cash Loan (PM SVANidhi)",
      hi: "रेहड़ी-पटरी दुकान लोन (पीएम स्वनिधि)",
      kn: "ಬೀದಿ ಬದಿ ವ್ಯಾಪಾರಿ ಸಾಲ (ಪಿಎಂ ಸ್ವನಿಧಿ)"
    },
    pay: { en: "Small monthly returns. No hidden fees.", hi: "छोटी मासिक किस्तें। कोई छुपा हुआ शुल्क नहीं।", kn: "ಸಣ್ಣ ಮಾಸಿಕ ಕಂತುಗಳು. ಯಾವುದೇ ಹೆಚ್ಚುವರಿ ಶುಲ್ಕವಿಲ್ಲ." },
    get: {
      en: "₹10,000 to ₹15,000 cash in hand to buy stock. No gold or land papers needed. Pays back interest rewards.",
      hi: "सामान खरीदने के लिए ₹10,000 से ₹15,000 नकद। कोई जमीन या सोना गिरवी रखने की जरूरत नहीं।",
      kn: "ವ್ಯಾಪಾರ ಮಾಡಲು ₹10,000 ರಿಂದ ₹15,000 ನಗದು ಸಾಲ. ಯಾವುದೇ ಚಿನ್ನ ಅಥವಾ ಆಸ್ತಿ ಪತ್ರಗಳ ಅಗತ್ಯವಿಲ್ಲ."
    },
    how: {
      en: "Visit your local government bank or open jansamarth.in on your phone.",
      hi: "अपने नजदीकी सरकारी बैंक में जाएं या फोन पर jansamarth.in खोलें।",
      kn: "ನಿಮ್ಮ ಹತ್ತಿರದ ಸರ್ಕಾರಿ ಬ್ಯಾಂಕ್‌ಗೆ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ಫೋನ್‌ನಲ್ಲಿ jansamarth.in ತೆರೆಯಿರಿ."
    }
  },
  {
    id: 'jan-dhan',
    type: 'banking',
    image: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRi7o21bkHg-4KQvEsbjhh0EaHdjUc-IKvZ1zJmYo0dyxS0fXkmhJD3OmUqN_gqxKsxqVHvInqgm_y_zRQ',
    title: {
      en: "Zero-Money Bank Account (Jan Dhan)",
      hi: "जीरो-बैलेंस बैंक खाता (जन धन)",
      kn: "ಶೂನ್ಯ ಬ್ಯಾಲೆನ್ಸ್ ಬ್ಯಾಂಕ್ ಖಾತೆ (ಜನ ಧನ)"
    },
    pay: { en: "₹0 Fees (Bank cannot cut money if empty)", hi: "₹0 फीस (खाता खाली होने पर बैंक पैसे नहीं काट सकता)", kn: "₹0 ಶುಲ್ಕ (ಖಾತೆ ಖಾಲಿಯಾಗಿದ್ದರೂ ಬ್ಯಾಂಕ್ ಹಣ ಕಡಿತಗೊಳಿಸುವುದಿಲ್ಲ)" },
    get: {
      en: "A personal bank passbook, a free ATM card, and direct government scheme cash transfers.",
      hi: "एक बैंक पासबुक, मुफ्त एटीएम कार्ड, और सरकारी योजनाओं का पैसा सीधे खाते में।",
      kn: "ಬ್ಯಾಂಕ್ ಪಾಸ್‌ಬುಕ್, ಉಚಿತ ಎಟಿಎಂ ಕಾರ್ಡ್ ಮತ್ತು ಸರ್ಕಾರದ ಹಣ ನೇರವಾಗಿ ನಿಮ್ಮ ಖಾತೆಗೆ ಬರುತ್ತದೆ."
    },
    how: {
      en: "Walk into any State Bank of India (SBI) or Post Office with your Aadhaar Card.",
      hi: "अपने आधार कार्ड के साथ किसी भी स्टेट बैंक (SBI) या डाकघर में जाएं।",
      kn: "ನಿಮ್ಮ ಆಧಾರ್ ಕಾರ್ಡ್‌ನೊಂದಿಗೆ ಯಾವುದೇ ಸ್ಟೇಟ್ ಬ್ಯಾಂಕ್ (SBI) ಅಥವಾ ಪೋಸ್ಟ್ ಆಫೀಸ್‌ಗೆ ಹೋಗಿ."
    }
  }
];
