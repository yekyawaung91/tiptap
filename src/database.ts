const USER_INFO: Liveblocks["UserMeta"][] = [
  {
    id: "cat@example.com",
    info: {
      name: "Cat",
      color: "#D583F0",
      avatar: "/avatars/cat.png",
    },
  },
  {
    id: "fox@example.com",
    info: {
      name: "Fox",
      color: "#F08385",
      avatar: "/avatars/fox.png",
    },
  },
  {
    id: "giraffe@example.com",
    info: {
      name: "Giraffe",
      color: "#F0D885",
      avatar: "/avatars/giraffe.png",
    },
  },
  {
    id: "gorilla@example.com",
    info: {
      name: "Gorilla",
      color: "#85EED6",
      avatar: "/avatars/gorilla.png",
    },
  },
  {
    id: "koala@example.com",
    info: {
      name: "Koala",
      color: "#85BBF0",
      avatar: "/avatars/koala.png",
    },
  },
  {
    id: "lion@example.com",
    info: {
      name: "Lion",
      color: "#8594F0",
      avatar: "/avatars/lion.png",
    },
  },
  {
    id: "panda@example.com",
    info: {
      name: "Panda",
      color: "#85DBF0",
      avatar: "/avatars/panda.png",
    },
  },
  {
    id: "tiger@example.com",
    info: {
      name: "Tiger",
      color: "#87EE85",
      avatar: "/avatars/tiger.png",
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
