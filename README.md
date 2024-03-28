# 🌦 Weather API dynamics

RESTful API exercise (client-server communication method, HTTP)

## 🧑‍🏫 Pair-programming exercise with Claudia(Product Engineer at Accenture Song)

_Why?_

It's always important to practice explaining what I've done on the codes implemented to collaborate in English.

### ✍️ Things I learned

You should secure the sensitive information like API keys([MORE INFO](https://medium.com/@sujathamudadla1213/what-is-the-use-of-env-8d6b3eb94843))

- by using `.env` or
- `.env.local` for preventing to upload to GitHub automatically

Let's deep Dive into [useEffect](https://react.dev/reference/react/useEffect) life cycle

- You should be careful of how the scopes work

In an attempt to get all the data inside of object transforming to Array for using `map()` to show an icon of the weather,

- You need to understand React & JavaScript rendering sequence on the browser by checking console.log

- You can use [Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) `?` or `&&` to postpone the break until calling `useEffect()`'s state and rerending on the browser

```jsx
{
  info.weather?.map((detail) => (
    <img
      key={detail.id}
      src={`https://openweathermap.org/img/wn/${detail.icon}@4x.png`}
      alt={detail.description}
    />
  ));
}
```

### TypeScript X React.js Practice

- [Adding TypeScript](https://create-react-app.dev/docs/adding-typescript/)
- [TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/)
