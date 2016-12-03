# getjs
A library to get element, children, parent of the DOM

## Methods
Available methods of get.js are the following:

### Get Element/s
```javascript
get.el(".el-name"); // return single element
get.elById("#el-name"); // return single element with ID keyword
get.all("li"); // return nodelist
get.allArray("li"); // return array
```
### Get Parent
```javascript
get.parentOf(el, ".parent-class"); // return parent by class keyword or ID
```

### Get Children
```javascript
get.childrenOf(el, ".children-class"); // return children
```

### Get Array Index
```javascript
get.index(el); // return array index of an element
```

### Get Siblings
```javascript
get.siblings(el); // return element's siblings
```
