# Notes and Tips/Ticks for Project

## Utilizing the as={""} attribute

```jsx
//Utilizing the as={""} attribute to allow the button to be an anchor
       <Button
                as={"a"}
          href="https://github.com/AdminForIinRange"
          target="_blank"

```

## Random Img tip

```js
useEffect(() => {
  setRandomImg(`https://source.unsplash.com/random/${refreshCount}?`);
  console.log(refreshCount);
}, [refreshCount]);
```
