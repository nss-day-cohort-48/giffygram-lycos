const apiURL = "http://localhost:3000";
const applicationElement = document.querySelector(".giffygram");

const applicationState = {
  currentUser: {},
  feed: {
    chosenUser: null,
    displayFavorites: false,
    displayMessages: false,
    yearChosen: 0
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
  const filterByYear = () => {
    let gifPosts = [...applicationState.posts] //getting all the posts to start out. 
    if (applicationState.feed.yearChosen > 0) {
      const yearArray = gifPosts.filter(post => post.timestamp > applicationState.feed.yearChosen); //filtering based on timestamp
      return yearArray
    } else {
      return gifPosts // if timestamp still at 0, it displays all. Will need to reset to zero somewhere in code later.
    }
  }
  const filteredByYear = filterByYear() //This is an array based on the yera filter. Now will filter by user selection. 
  const filterByUser = () => {
    if (applicationState.feed.chosenUser !== null) {
      const userArray = filteredByYear.filter(post => post.userId === applicationState.feed.chosenUser.id); //this is what happens if there is a chosen user.
      return userArray
    } else {
      return filteredByYear //if no chosen user, then returning filter by year.
    }
  }
  setCurrentUser() //Not sure this is the best placef for this, but definitely need it.
  const arrayByYearUser = filterByUser() //filters likes based on current user
  const likes = getLikes()
  const currentUserId = applicationState.currentUser.id
  const likedPosts = likes.filter(like => like.userId === currentUserId) //identifying all likes of the current user
  const AllFilteredPosts = () => {
    if (applicationState.feed.displayFavorites === true) {  //This is saying if favorites true in application state feed
      const everythingArray = arrayByYearUser.filter((post) => { //creating a filtered array based on year, chosen user, and current user likes. 
        for (const like of likedPosts) {
          if (like.postId === post.id) {
            return post
          }
        }
      })
      return everythingArray // returns super filtered array
    } else {
      return arrayByYearUser //if favorites not checked, skips that post. 
    }
  }
  return AllFilteredPosts() // this is the final array after all the filters. 
}




export const getLikes = () => {
  return [...applicationState.likes];
};

export const getMessages = () => {
  return [...applicationState.messages];
};

export const getCurrentUser = () => {
  return { ...applicationState.currentUser };
};



// some export functions

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


// Set functions

//takes current user from local storage into application state.
export const setCurrentUser = () => {
  const users = getUsers();
  const currentUserId = localStorage.getItem("gg_user");
  for (const user of users) {
    if (user.id === parseInt(currentUserId)) {
      applicationState.currentUser = user;
    }
  }
};

// sets Chosen user in the application state feed
export const setChosenUser = (id) => {
  const users = getUsers()
  for (const user of users) {
    if (user.id = id) {
      applicationState.feed.chosenUser = user
      applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
  }
}

//sets chosen year based on timestamp
export const setChosenYear = (timestamp) => {
  applicationState.feed.yearChosen = timestamp
  applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
}

//sets the display favorites in application feed to true or false
export const filterFavs = (boolean) => {
  applicationState.feed.displayFavorites = boolean
  applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
}

//Filters posts based on the timestamp
export const filterByYear = (annualTimestamp) => {
  const posts = getPosts()
  let postsSinceYear = posts.filter((post) => {
    if (post.timestamp >= annualTimestamp) {
      return post
    }
  })
  return postsSinceYear
}