export const tagsData = [
  {
    name: "Reported",
    key: "reported",
    bgColor: "#FEC9CB",
    color: "#5A0005",
  },
  {
    name: "In Progress",
    key: "inProgress",
    bgColor: "#FFFBC7",
    color: "#67611B",
  },
  {
    name: "Completed",
    key: "completed",
    bgColor: "#CBF0C7",
    color: "#256C1D",
  },
];

export const issueData = {
  reported: [
    {
      name: "Road Damage",
      description: `A large tree has fallen due to heavy rain on Shahdara Road, blocking traffic and causing potential safety hazards.`,
      vote: 1580,
      location: "Shahdara Road",
      isPending: false,
      image: require("../../assets/tree.jpg"),
    },
    {
      name: "Pothole",
      description: `A large pothole has formed on Main Street near the intersection with 2nd Avenue. It's causing significant traffic issues and needs immediate attention.`,
      vote: 1220,
      location: "Chandini chowk",
      isPending: true,
      image: require("../../assets/pathole2.jpg"),
    },
    {
      name: "Blocked Drain",
      description: `The drain on Oak Street is blocked, causing water to accumulate and flood the sidewalk. `,
      vote: 1198,
      isPending: false,
      location: "Shahdara Metro Station",
      image: require("../../assets/Drain2.jpg"),
    },
    {
      name: "Graffiti",
      description: `There is graffiti on the wall of the central park, which needs to be cleaned up.`,
      vote: 1800,
      location: "Central Park (C.P)",
      isPending: false,
      image: require("../../assets/Graffiti.jpg"),
    },
    {
      name: "Water Supply",
      description: `Residents on Maple Street are experiencing low water pressure, affecting daily activities.`,
      vote: 1740,
      location: "Central Park (C.P)",
      isPending: true,
      image: require("../../assets/waterSupply.jpg"),
    },
    {
      name: "Broken Streetlight",
      description: `The streetlight on Yamuna Vihar near the bus stop is not working, creating a safety hazard at night. `,
      vote: 1160,
      location: "Yamuna Vihar Bus Stop",
      isPending: true,
      image: require("../../assets/Streetlight.jpg"),
    },
  ],
  inProgress: [],
  completed: [
    {
      name: "Garbage",
      description: `There is a large pile of waste accumulated on Nehru Road. It is causing a bad odor and attracting pests, posing a health risk to residents.`,
      vote: 1160,
      location: "Ghonda Gali No.10",
      isPending: true,
      image: require("../../assets/garbage.jpeg"),
    },
    {
      name: "Sidewalk",
      description: `There is an obstruction on the sidewalk at Nehru Place, making it difficult for pedestrians to pass through. `,
      vote: 1160,
      location: "Nehru Place",
      isPending: true,
      image: require("../../assets/sidewalk.jpeg"),
    },
    {
      name: "Cleanliness",
      description: `The public Tiolet at the bus station is extremely dirty and needs immediate cleaning.`,
      vote: 1160,
      location: "Kashmeeri Gate Bus Station",
      isPending: true,
      image: require("../../assets/clean.jpg"),
    },
    {
      name: "Park Maintenance",
      description: `The grass in the city park has not been cut for weeks, making it look untidy and attracting pests.`,
      vote: 1160,
      location: "DDA Park Shastri Park",
      isPending: true,
      image: require("../../assets/park.jpg"),
    },
  ],
};


export const priorityList = [
    {
      name: "Large pothole on Krishna Nagar",
      vote: 1520,
      isPending: false,
      image: require("../../assets/pathole.jpg"),
    },
    {
      name: "Blocked drain on Shahdara",
      vote: 1500,
      isPending: true,
      image: require("../../assets/Drain.jpg"),
    },
    {
      name: "Water Supply on Chandni chowk",
      vote: 1480,
      isPending: false,
      image: require("../../assets/waterSupply2.jpg"),
    },
    {
      name: "Large Garbage on Dilshad Garden",
      vote: 1320,
      isPending: true,
      image: require("../../assets/garbage2.jpeg"),
    },
  ];