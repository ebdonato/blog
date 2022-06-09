---
title: Desestruturação para variáveis já existentes
subTitle: Sintaxe para realizar desestruturação para variáveis já existentes no mesmo escopo em Javascript
date: 2022/01/02
bannerImage: ./destructuring-existing-var.png
slug: destructuring-existing-var
tags: [javascript]
authors:
    - ebdonato
featured: true
---

É possível utilizar desestruturação para variáveis ao invés de sempre criar novas.

Por exemplo, caso tenhamos um objeto como o a seguir:

```javascript
const user = {name: "Eduardo", age: 39}
```

Podemos fazer a desestruturação com a seguinte sintaxe:

```javascript
const {name, age} = user

console.log(name) // Eduardo

console.log(age) // 39
```

Porém se as variáveis `name` e `age` já tiverem sido declaradas no mesmo escopo, será necessário desestruturar e renomear ao mesmo tempo:

```javascript
const {name: newName, age: newAge} = user

console.log(newName) // Eduardo

console.log(newAge) // 39
```

Para atribuir a desestruturação para as variáveis declaradas anteriormente, utiliza-se a seguinte sintaxe (parênteses na declaração):

```javascript
let name = "Fulano"
let age = 22

;({name, age} = user)

console.log(name) // Eduardo

console.log(age) // 39
```
