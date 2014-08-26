#converting mongo shell json into standard json

If you do an export from mongo you get back a json like structure called mongo shell json you cannot parse with std JSON.parse. This simple online services allows to convert mongo shell json into standard parse able json.

Example json export from mongo you cannot parse with JSON
```js
{
    "_id" : ObjectId("53b1df1567d52f88014c1cd3"),
    "modificationDate" : ISODate("2014-06-30T22:05:09.560Z")
}
```    

But after convert you get parse able object

```js
{
    "_id" : "53b1df1567d52f88014c1cd3",
    "modificationDate" : "2014-06-30T22:05:09.560Z"
}
```    


Visit online convert at http://mongo-shell-json-to-standard-json-online.azurewebsites.net/

