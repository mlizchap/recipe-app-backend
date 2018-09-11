# recipe-app-backend
- a backend api that consists of a database of recipes 

## Stack
- Node
- Express
- mongodb/mongoose
- mLab
- deployed on Heroku

## Routes
<table>
  <tr>
    <td>GET</td>
    <td>https://arcane-lowlands-94627.herokuapp.com/api</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>https://arcane-lowlands-94627.herokuapp.com/api/:id</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>https://arcane-lowlands-94627.herokuapp.com/api/new</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>https://arcane-lowlands-94627.herokuapp.com/api/:id</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>https://arcane-lowlands-94627.herokuapp.com/api/:id</td>
  </tr>
</table>

## Schema
```javascript
title: String,
ingredients: [{
    name: String,
    amount: String 
}],
picture: String,
description: String
```
