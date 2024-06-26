export const cardData = {
  Checkup: {
    image: require("../../assets/thumbnil.png"),
    isVideo: true,
    data: [
      {
        name: "Aiims",
        desc: "with cheese",
        price: 300,
        tag: "pizza",
        image: require("../../assets/aiims.jpg"),
      },
      {
        name: "Sir Ganga Ram",
        desc: "with strawberry",
        price: 530,
        tag: "cream",
        image: require("../../assets/ganga.jpg"),
      },
      {
        name: "RML",
        desc: "with cheese",
        price: 300,
        tag: "pizza",
        image: require("../../assets/rml.jpg"),
      },
      {
        name: "Safdarjung",
        desc: "with cheese",
        price: 450,
        tag: "burger",
        image: require("../../assets/safdarjung.jpg"),
      },
      {
        name: "LNGP",
        desc: "with cheese",
        price: 349,
        tag: "burger",
        image: require("../../assets/lnjp.jpg"),
      },
      {
        name: "Apollo",
        desc: "with mint",
        price: 450,
        tag: "drinks",
        image: require("../../assets/apollo.jpg"),
      },
      {
        name: "BLK-Max",
        desc: "with cheese",
        price: 600,
        tag: "sweets",
        image: require("../../assets/BLK-Max.jpeg"),
      },
      {
        name: "CK Birla",
        desc: "with mango",
        price: 180,
        tag: "cream",
        image: require("../../assets/ck-birla.jpg"),
      },
      {
        name: "Pant",
        desc: "with mint",
        price: 450,
        tag: "drinks",
        image: require("../../assets/pant.jpg"),
      },
      {
        name: "Jag Parvesh",
        desc: "with cheese",
        price: 520,
        tag: "sweets",
        image: require("../../assets/japParvesh.jpg"),
      },
      {
        name: "Hindu Rao",
        desc: "with cheese",
        price: 520,
        tag: "sweets",
        image: require("../../assets/hindu_rao.jpg"),
      },
      {
        name: "Sant Parmanand",
        desc: "with cheese",
        price: 520,
        tag: "sweets",
        image: require("../../assets/sant.jpg"),
      },
    ],
  },
  generic: {
    image: require("../../assets/medicine.jpg"),
    data: [
      {
        image: require("../../assets/category1.jpeg"),
        type: "supplement"
      },
      {
        image: require("../../assets/category2.jpeg"),
        type: "facewash"
      },
      {
        image: require("../../assets/category3.jpeg"),
        type: "supplement"
      },
      {
        image: require("../../assets/category4.jpeg"),
        type: "supplement"
      },
      {
        image: require("../../assets/category5.jpeg"),
        type: "supplement"
      },
      {
        image: require("../../assets/category6.jpeg"),
        type: "supplement"
      },
      {
        image: require("../../assets/category7.jpeg"),
        type: "supplement"
      },
      {
        image: require("../../assets/category8.jpeg"),
        type: "supplement"
      },
      {
        image: require("../../assets/category9.jpeg"),
        type: "supplement"
      },
      {
        image: require("../../assets/category10.jpeg"),
        type: "supplement"
      },
      {
        image: require("../../assets/category11.jpeg"),
        type: "supplement"
      },
      {
        image: require("../../assets/category12.jpeg"),
        type: "supplement"
      },
    ],
  },
  Video: {
    image: require("../../assets/thumbnil.png"),
    isVideo: true,
    data: [
      {
        name: "5 Reasons You Are Drinking Water the Wrong Way",
        views: "403K",
        image: require("../../assets/thumbnail1.jpg"),
      },
      {
        name: "How to Cleanse Your Liver Naturally?",
        views: "1M",
        image: require("../../assets/thumbnail2.jpg"),
      },
      {
        name: "28 Signs Your Body is Deficient in Vital Nutrients (With Solution)",
        views: "273K",
        image: require("../../assets/thumbnail3.jpg"),
      },
      {
        name: "How to Purify Your Blood Naturally?",
        views: "700K",
        image: require("../../assets/thumbnail4.jpg"),
      },
      {
        name: "Cure Thyroid Problem Permanently in 4 Steps",
        views: "4M",
        image: require("../../assets/thumbnail5.jpg"),
      },
      {
        name: "5 Daily Foods You are Eating the Wrong Way",
        views: "2.5M",
        image: require("../../assets/thumbnail6.jpg"),
      },
      {
        name: "What Will Happen if You Quit Sugar for 21 Days (6 Healthy Alternatives)",
        views: "403K",
        image: require("../../assets/thumbnail7.jpg"),
      },
      {
        name: "Milk in India Ranked from Worst to Best",
        views: "740K",
        image: require("../../assets/thumbnail8.jpg"),
      },
      {
        name: "20 Soaps in India Ranked from Worst to Best",
        views: "428K",
        image: require("../../assets/thumbnail9.jpg"),
      },
      {
        name: "Ayurvedic Diet Plan for Extreme Fat Loss (Healthy & Effective)",
        views: "6M",
        image: require("../../assets/thumbnail10.jpg"),
      },
    ],
  },
  labTest: {
    image: require("../../assets/thumbnil.png"),
    isVideo: true,
    bgImage: require("../../assets/comingSoon.jpg"),
  },
  insurance: {
    image: require("../../assets/thumbnil.png"),
    isVideo: true,
    bgImage: require("../../assets/comingSoon.jpg"),
  },
};

export const tagsData = [
  {
    name: "Checkup",
    key: "Checkup",
    icon: require("../../assets/checkUp.png"),
  },
  {
    name: "Generic",
    key: "generic",
    icon: require("../../assets/genericMedicine.png"),
  },
  {
    name: "Test",
    key: "labTest",
    icon: require("../../assets/labTest.png"),
  },
  {
    name: "Video",
    key: "Video",
    icon: require("../../assets/healthyVideo.png"),
  },
  {
    name: "insurance",
    key: "insurance",
    icon: require("../../assets/insurance.png"),
  },
];

export const departmentList = [
  {
    name: "General",
    desc: "Infections, chronic diseases, and preventive care.",
    tag: "pizza",
    image: require("../../assets/checkup.jpg"),
    doctorImg: require("../../assets/doctor1.jpg"),
  },
  {
    name: "Gynecology",
    desc: "Pregnancy, childbirth, and women's reproductive health.",
    tag: "cream",
    image: require("../../assets/gynecology.png"),
    doctorImg: require("../../assets/doctor2.jpg"),
  },
  {
    name: "Pediatrics",
    desc: "Health and medical care of children",
    tag: "cream",
    image: require("../../assets/Pediatrics.jpeg"),
    doctorImg: require("../../assets/doctor3.jpg"),
  },
  {
    name: "Surgery",
    desc: "General surgery, orthopedic surgery, cardiovascular surgery, neurosurgery, and more.",
    tag: "cream",
    image: require("../../assets/surgery.png"),
    doctorImg: require("../../assets/doctor4.jpg"),
  },
  {
    name: "Anesthesiology",
    desc: "Managing pain during surgical procedures or medical interventions.",
    tag: "cream",
    image: require("../../assets/anesthesiology.jpeg"),
    doctorImg: require("../../assets/doctor5.jpg"),
  },
  {
    name: "Radiology",
    desc: "X-rays, CT scans, MRI scans, ultrasound, and other imaging modalities.",
    tag: "cream",
    image: require("../../assets/radiology.jpg"),
    doctorImg: require("../../assets/doctor6.jpg"),
  },
  {
    name: "Ophthalmology",
    desc: "Health of the eye",
    tag: "cream",
    image: require("../../assets/ophthalmology.jpeg"),
    doctorImg: require("../../assets/doctor7.jpg"),
  },
  {
    name: "Dermatology",
    desc: "Skin, hair, and nails, including acne, psoriasis, and skin cancer.",
    tag: "cream",
    image: require("../../assets/skin.jpeg"),
    doctorImg: require("../../assets/doctor8.jpg"),
  },
  {
    name: "Cardiology",
    desc: "Heart diseases and conditions",
    tag: "cream",
    image: require("../../assets/cardiology.jpeg"),
    doctorImg: require("../../assets/doctor1.jpg"),
  },
];

export const productsList = {
  supplement: {
    category: [
      {
        name: "",
        image: require("../../assets/vitamin1.jpeg"),
      },
      {
        name: "",
        image: require("../../assets/vitamin2.jpeg"),
      },
      {
        name: "",
        image: require("../../assets/vitamin3.jpeg"),
      },
      {
        name: "",
        image: require("../../assets/vitamin4.jpeg"),
      },
      {
        name: "",
        image: require("../../assets/vitamin5.jpeg"),
      },
      {
        name: "",
        image: require("../../assets/vitamin6.jpeg"),
      },
    ],
    data: [
      {
        name: "HealthCart Calcium + Vitamin D3",
        image: require("../../assets/supplement1.png"),
        rating: 5,
        discountPercent: 20,
        review: 1563,
        price: 399.0,
        discountedPrice: 207.48,
      },
      {
        name: "ZInga Vita MUlti supplement",
        image: require("../../assets/supplement3.png"),
        rating: 4,
        discountPercent: 30,
        review: 863,
        price: 230.0,
        discountedPrice: 140.48,
      },
      {
        name: "1mg Advanced Calcium + Vitamin D3",
        image: require("../../assets/supplement4.png"),
        rating: 5,
        discountPercent: 26,
        review: 1023,
        price: 420.0,
        discountedPrice: 400.0,
      },
      {
        name: "ENO Powder | Regular Flavour",
        image: require("../../assets/supplement5.png"),
        rating: 4,
        discountPercent: 40,
        review: 763,
        price: 120.0,
        discountedPrice: 102.22,
      },
      {
        name: "NutraBay Gold L-ARGININE",
        image: require("../../assets/supplement6.png"),
        rating: 4,
        discountPercent: 24,
        review: 438,
        price: 399.0,
        discountedPrice: 207.48,
      },
      {
        name: "Shelcal 500 Calcium + Vitamin D3",
        image: require("../../assets/supplement7.png"),
        rating: 3,
        discountPercent: 25,
        review: 1523,
        price: 343.0,
        discountedPrice: 248.0,
      },
      {
        name: "ENO Powder | Lemon Flavour",
        image: require("../../assets/supplement8.png"),
        rating: 4,
        discountPercent: 15,
        review: 1341,
        price: 1200.0,
        discountedPrice: 1240.2,
      },
      {
        name: "1mg Calcium 500mg & Vitamin D3",
        image: require("../../assets/supplement2.png"),
        rating: 5,
        discountPercent: 10,
        review: 1063,
        price: 1023.0,
        discountedPrice: 954.48,
      },
      {
        name: "Supradyn immunity",
        image: require("../../assets/supplement9.png"),
        rating: 5,
        discountPercent: 10,
        review: 1029,
        price: 400.0,
        discountedPrice: 320.2,
      },
      {
        name: "Centrum Men",
        image: require("../../assets/supplement10.png"),
        rating: 4,
        discountPercent: 20,
        review: 843,
        price: 670.48,
        discountedPrice: 530.0,
      },
    ],
    banner: require('../../assets/vitaminBanner.jpeg'),
    label: "Supplement"
  },
  facewash: {
    category: [
      {
        name: "",
        image: require("../../assets/faceCategory1.jpeg"),
      },
      {
        name: "",
        image: require("../../assets/faceCategory2.jpeg"),
      },
      {
        name: "",
        image: require("../../assets/faceCategory3.jpeg"),
      },
      {
        name: "",
        image: require("../../assets/faceCategory4.jpeg"),
      },
      {
        name: "",
        image: require("../../assets/faceCategory5.jpeg"),
      },
      {
        name: "",
        image: require("../../assets/faceCategory6.jpeg"),
      },
    ],
    data: [
      {
        name: "Khadi Herbal",
        image: require("../../assets/facewash1.png"),
        rating: 5,
        discountPercent: 20,
        review: 1563,
        price: 399.0,
        discountedPrice: 207.48,
      },
      {
        name: "Salijic Face Wash",
        image: require("../../assets/facewash3.png"),
        rating: 4,
        discountPercent: 30,
        review: 863,
        price: 230.0,
        discountedPrice: 140.48,
      },
      {
        name: "1mg Advanced Calcium + Vitamin D3",
        image: require("../../assets/facewash4.png"),
        rating: 5,
        discountPercent: 26,
        review: 1023,
        price: 420.0,
        discountedPrice: 400.0,
      },
      {
        name: "ENO Powder | Regular Flavour",
        image: require("../../assets/facewash5.png"),
        rating: 4,
        discountPercent: 40,
        review: 763,
        price: 120.0,
        discountedPrice: 102.22,
      },
      {
        name: "NutraBay Gold L-ARGININE",
        image: require("../../assets/facewash6.png"),
        rating: 4,
        discountPercent: 24,
        review: 438,
        price: 399.0,
        discountedPrice: 207.48,
      },
      {
        name: "Shelcal 500 Calcium + Vitamin D3",
        image: require("../../assets/facewash7.png"),
        rating: 3,
        discountPercent: 25,
        review: 1523,
        price: 343.0,
        discountedPrice: 248.0,
      },
      {
        name: "ENO Powder | Lemon Flavour",
        image: require("../../assets/facewash8.png"),
        rating: 4,
        discountPercent: 15,
        review: 1341,
        price: 1200.0,
        discountedPrice: 1240.2,
      },
      {
        name: "1mg Calcium 500mg & Vitamin D3",
        image: require("../../assets/facewash2.png"),
        rating: 5,
        discountPercent: 10,
        review: 1063,
        price: 1023.0,
        discountedPrice: 954.48,
      },
      {
        name: "Supradyn immunity",
        image: require("../../assets/facewash9.png"),
        rating: 5,
        discountPercent: 10,
        review: 1029,
        price: 400.0,
        discountedPrice: 320.2,
      },
      {
        name: "Centrum Men",
        image: require("../../assets/facewash10.png"),
        rating: 4,
        discountPercent: 20,
        review: 843,
        price: 670.48,
        discountedPrice: 530.0,
      },
    ],
    banner: require('../../assets/faceWashBanner.jpeg'),
    label: "Personal Care"
  },
};
