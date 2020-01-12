## Pet Shop

You're writing a front end for a pet shop.
You have an array of objects you got from from the back end API which has the following format:

```
[{name:'Tom', species:'cat', sold:false}, {name:'Gromit', species:'dog', sold:true}, {name:'Daffy', species:'duck', sold:false} ...]
```

Write a function that takes this object and outputs a list of all the different types of animal they have available for sale e.g.

```
['cat','duck',...]
```

Animals that have been sold already should not be included in the list.
You may assume every animal is a different type, so you don't need to worry about the output array looking like

```
['cat', 'cat', 'cat', 'cat',..]
```
