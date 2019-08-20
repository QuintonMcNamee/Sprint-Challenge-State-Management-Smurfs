1. What problem does the context API help solve?
Context API helps solve the problem that our code can become very cumbersome in higher scale projects when we pass all of our state from parents to children via props. Context API helps solve this problem by storing data on a context object and getting data into our components from that context object instead of from props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions contain information (the type of action it is and data associated with that action) that we pass to our reducer as an argument. (Also called dispatching).

Reducers are functions that help manage state. They take in two arguments (the old state and an action) and return the new state based on those arguments.

The store is a state tree that cannot be altered directly. To change information from the store you must change copies of that information using actions and reducers. The store is also known as a "single source of truth" because its state can be accessed from anywhere in your application without passing props. So all the data comes from one source.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
The big difference between Application and Component state is that Application state is immutable (cannot be changed directly) and Component state is mutable (can be changed directly). It is almost always better to use Application state, especially in bigger projects, but on very small scale projects it may be better to use Component state as to not overly complicate the project.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is a middleware for Redux. It allows us to perform asynchronous operations with our reducers in Redux (redux reducers are synchronous by default). It changes our action-creators in a way that allows us to make API calls from our action-creators.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
I still prefer passing state via props because I am much much more comfortable with it and it makes more sense to me, but I feel that I will learn to love Redux state management when I get better at it.
