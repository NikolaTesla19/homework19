class Book {
  constructor (title, author, id, count) {
    this.title = title;
    this.author = author;
    this.id = id;
    this.count = count;
  }
  del(newBook) {
    newBook.parentNode.removeChild(newBook);
  }
  about() {
    alert(` Название: ${this.title}, \n Автор: ${this.author}, \n Количество страниц: ${this.count}`);
  }
}
class TravelBook extends Book {
  constructor (typeWrapper, ...args) {
    super(...args);
    this.typeWrapper = typeWrapper;
  }
  del(newBook){
    super.del(newBook);
  }
  about(){
    super.about();
  }
}
class Comics extends Book {
  constructor (numberCount, ...args) {
    super(...args);
    this.numberCount = numberCount;
  }
  del(newBook){
    super.del(newBook);
  }
  about(){
    super.about();
  }
}
const createNewBook = (title, author, id, obj) => {
  let newBook = document.createElement('ul');
  newBook.classList = 'newBook';
  newBook.id = `${id}`;
  let del = document.createElement('button');
  del.innerText = `Удалить`;
  let about = document.createElement('button');
  about.innerText = `Подробнее`;
  let li = document.createElement('li');
  newBook.innerHTML = `
    <li>${title}</li>
    <li>${author}</li>
  `;
  li.appendChild(del);
  li.appendChild(about);
  newBook.appendChild(li);
  del.onclick = () => {
    obj.del(newBook);
  }
  about.onclick = () => {
    obj.about();
  }
  return newBook
}
(() => {
  let submitT = document.getElementById('submit-t');
  submitT.onclick = (event) => {
    event.stopPropagation();
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let count = document.getElementById('count');
    let typeWrapper = document.getElementById('type-wrapper');
    let bookList = document.getElementById('list-books');
    let id = bookList.children.length;
    let travelBook = new TravelBook (typeWrapper.value, title.value, author.value, id, count.value);
    bookList.appendChild(createNewBook(title.value, author.value, id, travelBook));
    return false;
  }
  let submitC = document.getElementById('submit-c');
  submitC.onclick = (event) => {
    event.stopPropagation();
    let title = document.getElementById('title-c');
    let author = document.getElementById('author-c');
    let count = document.getElementById('count-c');
    let numberCount = document.getElementById('number-count');
    let bookList = document.getElementById('list-books');
    let id = bookList.children.length;
    let comics = new Comics (numberCount.value, title.value, author.value, id, count.value);
    bookList.appendChild(createNewBook(title.value, author.value, id, comics));
    return false;
  }
})()
