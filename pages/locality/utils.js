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

export const issueList = {
  reported: [
    {
      name: "Pothole",
      description: `A large pothole has formed on Main Street near the intersection with 2nd Avenue. It's causing significant traffic issues and needs immediate attention.`,
      vote: 1200,
      location: "Chandini chowk",
      isPending: true,
      image: require("../../assets/pathole.jpg"),
    },
    {
      name: "Broken Streetlight",
      description: `The streetlight on Yamuna Vihar near the bus stop
      is not working, creating a safety hazard at night. `,
      vote: 1160,
      location: "Yamuna Vihar Bus Stop",
      isPending: true,
      image: require("../../assets/Streetlight.jpg"),
    },
    {
      name: "Blocked Drain",
      description: `The drain on Oak Street is blocked, causing water to accumulate and flood the sidewalk. `,
      vote: 1200,
      isPending: true,
      location: "Shahdara Metro Station",
      image: require("../../assets/Drain.jpg"),
    },
    {
      name: "Graffiti",
      description: `There is graffiti on the wall of the central park, which needs to be cleaned up.`,
      vote: 1200,
      location: "Central Park (C.P)",
      isPending: true,
      image: require("../../assets/Graffiti.jpg"),
    },
  ],
  inProgress: [],
  completed: [],
};
