let bookItems = [{
    name: `Harry Potter and the Philosopher's Stone`,
    author: 'J. K. Rowling',
    image: `https://images-na.ssl-images-amazon.com/images/I/815v2OuIHXL._AC_SL1500_.jpg`,
    plot: `Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling.`
},
{
    name: `Harry Potter and the Chamber of Secrets`,
    author: 'J. K. Rowling',
    image: `https://i.pinimg.com/736x/48/7b/a5/487ba5f1de4236f85b70cb0fa97c0f4d.jpg`,
    plot: `Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling.`
},
{
    name: `Harry Potter and the Prisoner of Azkaban`,
    author: 'J. K. Rowling',
    image: `https://upload.wikimedia.org/wikipedia/ru/b/b2/Harry_Potter_and_the_Prisoner_of_Azkaban
    _%E2%80%94_movie.jpg`,
    plot: `Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling.`
}];

if (localStorage.getItem('books') === null){
    let strItems = JSON.stringify(bookItems);
    localStorage.setItem('books', strItems);
}