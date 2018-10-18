# React Enterprise Starter Kit

An opinionated React-Redux boilerplate for enterprise web applications. 

Create react app simplifies creating react applications, but for writing large 
enterprise scale applications you need a bit more structure. I derived at this project 
structure and dependencies over my time at Trimble Inc. where we were building the front end
for Trimble Unity as a Single Page Application.

## The State

We use Redux to maintain a single source of truth, viz. the State. Think of the Redux State
as a single object that holds the current state of your application. We use reducers to modify
the state.

Each component that has to maintain its state will have its own reducer which will then be
combined at a higher level. For example, the demo component has demoReducer which is combined in
the app reducer. 

## Actions

Actions are what cause state changes. A redux action has a type and some data pertaining to that
particular action. We wrap the data in an immutable Map called the 'payload'.

An example action would look like

```javascript 1.8
{
type: GET_CURRENT_WEATHER
payload: Map({ location })
}
```

I have found that this format works for almost all use cases. If you write a middleware to parse actions you still have
the flexibility to keep the payload intact and add middleware specific data to the action itself. The reducers will
always only use the type and the payload.

## Redux-Saga for Asynchronous Tasks

* All the api calls are made asynchronously via sagas.
* Only the sagas are allowed to make api calls. Infact any long
running operation should be put in saga.
* As a rule of thumb if have to do a lot of computation in response to an action
the best place to do it would be inside a saga.

## API.js

All the api calls are wrapped here and exposed as functions. If your application interacts with multiple api providers
you can further split this file per api provider.

### Dependencies

* [Create React App](https://github.com/facebook/create-react-app)
* [React Router](https://github.com/ReactTraining/react-router)
* [Redux](https://redux.js.org/)
* [Redux-Saga](https://github.com/redux-saga/redux-saga)
* [Material-UI](https://github.com/mui-org/material-ui/)
* [Redux-Persist](https://github.com/rt2zz/redux-persist)
* [ImmutableJS](https://github.com/facebook/immutable-js/)