# generator-promise
Adds promise() method to convert generators into promises.  Behind the scenes this uses `bluebird.coroutine`.

## Usage
Simply require this at the entry point of your app before any generator functions are defined

```
require('generator-promise');
```

And use it like so

```
function *getNote(id) {
    var note = yield db.Note.Get({ id: id });
    yield doSomethingElse();
    return note;
}

getNote(1234).promise().then(function(note) {
    console.log(note);
});
```

