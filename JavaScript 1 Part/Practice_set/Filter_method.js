//Filter Method

let Books = [
    {title:'Book One',genre:'fiction',publish:1981,Edition:2004},
    {title:'Book Two',genre:'Non-Fiction',publish:1982,Edition:2008},
    {title:'Book Three',genre:'History',publish:1999,Edition:2007},
    {title:'Book Four',genre:'Non-Fiction',publish:1989,Edition:2010},
    {title:'Book Five',genre:'Science',publish:2009,Edition:2014},
    {title:'Book six',genre:'Fiction',publish:1987,Edition:2010},
    {title:'Book seven',genre:'History',publish:1986,Edition:1996},
    {title:'Book Eight',genre:'Science',publish:2011,Edition:2016},
    {title:'Book Nine',genre:'Non-Fiction',publish:1981,Edition:1989},
];
const userBooks = Books.filter( (bk) => bk.genre ==='History');
const userBook = Books.filter( (bk) => bk.genre);


const userBooks1 = Books.filter( (bk) => bk.publish >=2000);

console.log(userBook);


// ForEach 


// Books.forEach( (val) =>{
//     console.log(val.Edition);
    
// })