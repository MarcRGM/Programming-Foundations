async function loadPost() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        if (!res.ok) {
            throw new Error("Could not load post");
        }

        const data = await res.json();
        console.log(data);

    } catch (err) {
        console.error('Error! ', err);
    }
}

// res.ok checks if the response status is in the range 200-299
// If the response is not ok, an error is thrown

