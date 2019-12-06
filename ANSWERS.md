- [ ] Why would you use class component over function components (removing hooks from the question)?

    Class components allow for use of state, stateful logic, and react lifecycle methods.

- [ ] Name three lifecycle methods and their purposes.

    -componentDidMount allows us to perform operations after the initial render and DomSurgery is complete(side effects, ajax requests, non visual behavior) 
    
    -componentDidUpdate allows allows us to perform operations every time after component state or props have changed(side effects, ajax requests, non visual behavior) 
    
    -componentWillUnmount allows us to perform operations right before the component is removed from the DOM, mostly used for cleanup of event liteners and subscriptions

- [ ] What is the purpose of a custom hook?

    To create a reusable piece of logic that can be extended to multiple components

- [ ] Why is it important to test our apps?

    It allows you to find bugs faster, trust the code, makes you think about the edge cases, acts as a safety net when making changes or refactoring, acts as documentation for the code, encourages you to write better code.