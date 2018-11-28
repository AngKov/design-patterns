//Implement Adapter:
//There are three classes Basket, Product and Book
//Basket has the following methods: addItem, getTotalCost, buyItems
//Class Product has the compatible interface to work with Basket 
//Book's interface needs to be converted by adapter

const PACKAGE_COST = 5;

class Product {
	constructor(partNumber, productLine, manufacture, price) {
		this.partNumber = partNumber;
		this.productLine = productLine;
		this.manufacture = manufacture;
		this.price = price;
	}

	getPackageCost() {
		return this.price += PACKAGE_COST;
	}
}

class Book {
	constructor(ISBN, title, author, publisher, cost) {
		this.ISBN = ISBN;
		this.title = title;
		this.author = author;
		this.publisher = publisher;
		this.price = cost;
	}
}

class BookAdapter {
	constructor(book) {
		this.partNumber = book.ISBN;
		this.productLine = `${book.title} - ${book.author}`;
		this.manufacture = book.publisher;
		this.price = book.price;
	}

	getPackageCost() {
		return this.price += PACKAGE_COST;
	}
}

class Basket {
	constructor() {
		this.cart = [];
	}

	addItem(item) {
		this.cart.push(item);
	}

	getTotalCost() {
		let totalCost = this.cart.reduce((prev, item) => {
			return prev + item.getPackageCost()
		}, 0);
		console.log(`Total cost together with delivery is ${totalCost}$`);
		return totalCost;
	}

	sortByManufABC() {
		return this.cart.sort((a, b) => a.manufacture.localeCompare(b.manufacture));
	}

	buyItems() {
		this.cart = [];
		console.log("All items are bought! The cart is empty again.");
	}
}


let myBasket = new Basket();

myBasket.addItem(new Product("B071FZ9WY1", "Just Dance 2018", "PlayStation", 20));
myBasket.addItem(new Product("B01MUAGZ49", "Nintendo Switch", "Nintendo", 299));
myBasket.addItem(new BookAdapter(new Book("978-1590599082", "Pro JavaScript Design Patterns", "Eric Freeman ", "Apress", 25)));
myBasket.addItem(new BookAdapter(new Book("978-0596007126", "Head First Design Patterns", "Dustin Diaz, Ross Harmes", "Head Firt", 13)));
