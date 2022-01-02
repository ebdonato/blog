---
title: Desestruturação para variáveis já existentes
published: false
description: Sintaxe para realizar desestruturação para variáveis já existentes no mesmo escopo em Javascript
tags: javascript
cover_image:
canonical_url:
---

É possível utilizar desestruturação para variáveis ao invés de sempre criar novas.

Por exemplo, caso tenhamos um objeto como o a seguir:

```javascript
const user = { name: "Eduardo", age: 39 };
```

Podemos fazer a desestruturação com a seguinte sintaxe:

```javascript
const { name, age } = user;

console.log(name); // Eduardo

console.log(age); // 39
```

Porém se as variáveis `name` e `age` já tiverem sido declaradas no mesmo escopo, será necessário desestruturar e renomear ao mesmo tempo:

```javascript
const { name: newName, age: newAge } = user;

console.log(newName); // Eduardo

console.log(newAge); // 39
```

Para atribuir a desestruturação para as variáveis declaradas anteriormente, utiliza-se a seguinte sintaxe (parênteses na declaração):

```javascript
let name = "Fulano",
  age = 22;

({ name, age } = user);

console.log(name); // Eduardo

console.log(age); // 39
```
