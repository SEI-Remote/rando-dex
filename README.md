# rando-dex

This app is an exercise in creating components and passing props to them.

To start this app up, navigate to your `code` directory and type the following:

```bash
git clone https://github.com/SEI-Remote/rando-dex.git
cd rando-dex
npm i
code .
```

To start the app, use:

```bash
npm run dev
```

## Instructions

In VS Code, select the `UserDetails` component and observe the `console.log(user)`, which will print the specific information for a given user when their card is clicked within the app.  Use the data to plan out and create React components which will accept props and render the user's information to the page.  

## Tips

- There is a `UserDetails.css` stylesheet, which you can use for all of your styling needs.  This will allow you to write CSS without having to mess with anything that's already configured.

- Advanced routing (using React Router) is already configured for this app, so you should not make any changes to `App.jsx`, `Landing.jsx`, `Nav.jsx`, `Users.jsx`, or `UserCard.jsx`.  Everything you add to display information relevant to an individual user will live in a hierarchy within the `UserDetails` component.

