# Thoughts around unit testing React and Redux with ES6-7

## Why unit test?

> `Even the most excellent developers will find unexpected bugs in their codez`, Some smart bastard

> `Unit testing gives you a second pair of eyes, as you creatively try to f**k up/hack your functions, often unexpected cases can surface`, Hacker for life

> `As a codebase gets more complex, changing one thing can sometimes affect something else, the test for that something else should break and set off a warning`, Haven't seen this happen in Redux/React though :)


## Other thoughts on unit testing?

It is easy to get carried away and test all the things. There comes a point though, when your
unit tests are no longer providing a decent ROI. Try to test to the point of good returns.

-- insert ROI graphic --
![](https://mymathsworld.files.wordpress.com/2010/11/log10-graph.png)


## Mocha/Expect setup

Usually we use Karma/Mocha and Expect. In this example I am only going to use Mocha and Expect.

-- insert setup --


# What to test

## Reducers.

- This is the most important thing to test, as your components will render based on
the data that you provide to them.
- You must test that your reducer does not mutate state. If it returns an object or an array,
it should always return a new object or array.
- Ensure that the payload you provide to your reducer is always the same format.
Not sometimes a string, sometimes an object, sometimes an array.
Figure out the data it needs, and stick to that format.
The only exception I can think of to this rule is when you might bootstrap/initialise your app. At
this point in your applications lifecycle, it may be required to send unfiltered data as
filtering the data elsewhere is a bit like making a reducer to feed your reducer.

-- insert testing a reducer example --


## Action creators.

- This is a good opportunity to test your action type constants as well as your action creators.
- Call the action creator directly and pass the data in a way that your reducer expects.
Test the output is returned as expected.

-- insert testing an action creator example --


## React components and Redux Connect

- If your React component has logic. You should test the rendered output.
- If your React component has functions that determine output. You should test them too.

I favour shallow rendering for unit tests as I want to test the internal functions and the output is as expected based on the data I provide it. So I use the react test utils only.

##### How to test a connected component.
Testing a shallow rendered component is easy if you use a standard export as well as a default export.

-- insert export class/functional component + export default connect example --

You can disregard the default export connect component and instead test the component as an actual React component.

This way you wont have to use a Redux Provider, and you can test the component by passing it's expected props as standard React props.

This allows you to test the logic of the React component independently from Redux.

-- insert example --

## Some tips

-- insert examples --

## Demo link

-- insert link --
