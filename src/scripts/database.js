
const database = {
    users: [{
      id: 1,
      name: "Daniella Agnoletti",
      email: "daniella@agnoletti.com",
      password: "daniella"
  }, {
      id: 2,
      name: "Ray Medrano",
      email: "ray@medrano.com",
      password: "ray"
  }, {
      id: 3,
      name: "Meg Ducharme",
      email: "meg@ducharme.com",
      password: "meg"
  }, {
      id: 4,
      name: "Mark Ellis",
      email: "mark@ellis.com",
      password: "mark"
  }, {
      id: 5,
      name: "Kimmy Bird",
      email: "kimmy@bird.com",
      password: "kimmy"
  }, {
      id: 6,
      name: "Emily Lemmon",
      email: "emily@lemmon.com",
      password: "emily"
  }],
  
  posts: [
      {
          id: 1,
          userId: 1,
          title: "Panda Eating Taco",
          imageURL: "pandaeatingtaco.com",
          description: "Panda eats a taco",
          timestamp: 2
      }
  ],
  
  messages: [
    { id: 1,
      userId: 1,
      recipientId: 2,
      text: "Your gif is hilarious.",
      read: true
    }
  
  ],
  
  likes: [
    {
      id: 3,
      userId: 3,
      postId: 3
    }
  ]}
  
  export const getUsers = () => {
      return [...database.users]
  }