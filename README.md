# swively
A javascript class that adds a swivel hover effect to anything.

## Installation

### NPM
`npm i swively --save`

### Yarn
`yarn add swively`

and then in your code, import it:

```js
import Swively from 'swively';
```

### Usage
The element that will receive the swivel hover effect must have a dedicated container for this effect to work.  
example:

```html
<div id="container">
    <div id="swivel-card">...</div>
</div>
```

```js
let container = document.getElementById('container');
let card = document.getElementById('swivel-card');
let swivel = new Swively(container, card, {
    perspective: 25,
    transition: 500
});
```

### API

You can change a few parameters on the fly : 

#### `swively.setPerspective(amount)`
Sets the css perspective rule on the container element.  
Lower values result in a bigger perspective effect.  

#### `swively.setTransformOrigin(origin)`
Sets the css transform-origin rule on the inner element.  

#### `swively.setTransition(duration)`
Sets the css transition-duration rule on the inner element, in ms.  

#### `swively.setTransform(x, y)`
Sets the swivel transform effect. The x value corresponds to the css transform rotateX rule, and the y is rotateY.  

#### `swively.reset()`
Resets the inner element to the default look, without a swivel effect.    
