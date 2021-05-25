const apiURL = "http://localhost:3000";
const applicationElement = document.querySelector(".giffygram");

const applicationState = {
  currentUser: {},
  feed: {
    chosenUser: null,
    displayFavorites: false,
    displayMessages: false,
    yearChosen: 0,
  },
  users: [],
  posts: [],
  likes: [],
  messages: [],
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
      applicationState.messages = messagesArray;
    });
};

export const fetchLikes = () => {
  return fetch(`${apiURL}/likes`)
    .then((res) => res.json())
    .then((likesArray) => {
      applicationState.likes = likesArray;
    });
};

// Getter Functions:

export const getUsers = () => {
  return [...applicationState.users];
};

export const getPosts = () => {
  let gifPosts = [...applicationState.posts];
  if (applicationState.feed.yearChosen > 0) {
    const yearArray = gifPosts.filter((post) => {
      post.timestamp > applicationState.feed.yearChosen;
    });
    debugger;
    return yearArray;
  } else {
    return gifPosts;
  }
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

// POST functions

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

export const registerNewUser = (userObject) => {
  return fetch(`${apiURL}/users}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObject),
  })
    .then((response) => response.json())
    .then(() => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    });
};

// Set functions

export const setCurrentUser = () => {
  const users = getUsers();
  let currentUserId = localStorage.getItem("gg_user");
  for (const user of users) {
    if (user.id === currentUserId) {
      applicationState.currentUser = user;
    }
  }
};

export const setChosenUser = (id) => {
  const users = getUsers();
  for (const user of users) {
    if ((user.id = id)) {
      applicationState.feed.chosenUser = user;
    }
  }
};

export const setChosenYear = (timestamp) => {
  applicationState.feed.yearChosen = timestamp;
  applicationElement.dispatchEvent(new CustomEvent("stateChanged"));
};

// Let posts = getPosts()
// Let postsByUserArray = []
// For (post of posts) {
//   if (post.userId === application.feed.chosenUser) ={
//     postsByUserArray.push(post)
//   } applicationState.posts = postsByUserArray

// }
// if applicationState.chosenUser.id === post.user.id

// filter functions

export const filterFavorites = () => {
  let likedPosts = [];
  const currentUserId = localStorage.getItem("gg_user");
  const likes = getLikes();
  for (const like of likes) {
    if ((like.userId = currentUserId)) {
      likedPosts.push(like);
    }
  }
  return likedPosts;
};

export const filterByYear = (annualTimestamp) => {
  const posts = getPosts();
  let postsSinceYear = posts.filter((post) => {
    if (post.timestamp >= annualTimestamp) {
      return post;
    }
  });
  return postsSinceYear;
};

export const makeApplicationStatePosts = (arrayOfPosts) => {
  applicationState.posts = arrayOfPosts;
  applicationElement.dispatchEvent(new CustomEvent("stateChanged"));
};
