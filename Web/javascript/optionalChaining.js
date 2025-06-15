/*
object?.property
object?.method?.()
array?.[index]

If anything before the ?. is null or undefined, it stops and returns undefined instead of throwing an error.
*/

const user = {};
console.log(user.profile?.name); // undefined (no crash)

const post = {
  author: {
    profile: {
      name: "Marc"
    }
  }
};

console.log(post.author?.profile?.name); // "Marc"
console.log(post.editor?.profile?.name); // undefined (no error!)

// ? at the end is an invalid syntax
// use .length to check if there is a value

