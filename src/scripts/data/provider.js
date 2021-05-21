const apiURL = "http://localhost:3000";
const applicationElement = document.querySelector(".giffygram");

const applicationState = {
  currentUser: {},
  feed: {
    chosenUser: null,
    displayFavorites: false,
    displayMessages: false,
  },
  users: [],
  posts: [],
  likes: [],
  messages: [],
};

// Getter Functions:

export const getUsers = () => {
  return [...applicationState.users];
};

export const getPosts = () => {
  return [...applicationState.posts];
};

export const getLikes = () => {
  return [...applicationState.likes];
};

export const getMessages = () => {
  return [...applicationState.messages];
};

export const getCurrentUser = () => {
  return { ...applicationState.currentUser };
};

// Fetch Functions:

export const fetchUsers = () => {
  return fetch(`${apiURL}/users`)
    .then((res) => res.json())
    .then((usersArray) => {
      applicationState.users = usersArray;
    });
};

export const fetchPosts = () => {
  return fetch(`${apiURL}/posts`)
    .then((res) => res.json())
    .then((postsArray) => {
      applicationState.posts = postsArray;
    });
};

export const fetchMessages = () => {
  return fetch(`${apiURL}/messages`)
    .then((res) => res.json())
    .then((messagesArray) => {
      applicationState.posts = messagesArray;
    });
};

export const fetchLikes = () => {
  return fetch(`${apiURL}/likes`)
    .then((res) => res.json())
    .then((likesArray) => {
      applicationState.posts = likesArray;
    });
};

//

export const sendPost = (userPost) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userPost),
  };
  return fetch(`${apiURL}/posts`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    });
};
