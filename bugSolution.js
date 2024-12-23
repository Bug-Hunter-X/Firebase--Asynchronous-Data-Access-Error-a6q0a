The solution involves using async/await or promises to ensure that the code waits for the snapshot to load before accessing its properties.  Here's an example using async/await:

```javascript
async function getData() {
  const snapshot = await db.collection('myCollection').doc('myDoc').get();
  if (snapshot.exists()) {
    const data = snapshot.data();
    console.log(data.propertyName); // Access property after data is loaded
  } else {
    console.log('No such document!');
  }
}
```
Alternatively, with promises:

```javascript
db.collection('myCollection').doc('myDoc').get().then(snapshot => {
  if (snapshot.exists()) {
    const data = snapshot.data();
    console.log(data.propertyName); // Access property after data is loaded
  } else {
    console.log('No such document!');
  }
}).catch(error => {
  console.error('Error getting document:', error);
});
```