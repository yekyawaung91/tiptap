const USER_INFO: Liveblocks["UserMeta"][] = [
  {
    id: "giraffe@example.com",
    info: {
      name: "Giraffe",
      color: "#D583F0",
      avatar: "/avatars/Giraffe.png",
    },
  },
  {
    id: "octopus@example.com",
    info: {
      name: "Octopus",
      color: "#F08385",
      avatar: "/avatars/Octopus.png",
    },
  },
  {
    id: "falcon@example.com",
    info: {
      name: "Falcon",
      color: "#F0D885",
      avatar: "/avatars/Panda.png",
    },
  },
  {
    id: "koala@example.com",
    info: {
      name: "Koala",
      color: "#85EED6",
      avatar: "/avatars/Koala.png",
    },
  },
  {
    id: "panda@example.com",
    info: {
      name: "Panda",
      color: "#85BBF0",
      avatar: "/avatars/Panda.png",
    },
  },
  {
    id: "otter@example.com",
    info: {
      name: "Otter",
      color: "#8594F0",
      avatar: "/avatars/Otter.png",
    },
  },
  {
    id: "sloth@example.com",
    info: {
      name: "Sloth",
      color: "#85DBF0",
      avatar: "/avatars/Panda.png",
    },
  },
  {
    id: "Hedgehog@example.com",
    info: {
      name: "hedgehog",
      color: "#87EE85",
      avatar: "/avatars/Panda.png",
    },
  },
];

export function getRandomUser() {
  return USER_INFO[Math.floor(Math.random() * 10) % USER_INFO.length];
}

export function getUser(id: string) {
  return USER_INFO.find((u) => u.id === id) || null;
}

export function getUsers() {
  return USER_INFO;
}
