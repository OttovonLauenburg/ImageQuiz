class Flower {
	constructor(image,name){
		this.image = image;
		this.name = name;
	}
}

const Cherryblossom = new Flower('cherryblossom.png','cherryblossom');
const Daffodil = new Flower('daffodil.png','daffodil');
const Daisy = new Flower('daisy.jpg','daisy');
const Lily = new Flower('lily.jpg','lily');
const Rose = new Flower('rose.png','rose');
const Sunflower = new Flower('sunflower.png','sunflower');
const Tulip = new Flower('tulip.png','tulip');
const Waterlily = new Flower('waterlily.png','waterlily');

const flowerArray = [Cherryblossom, Daffodil, Daisy, Lily, Rose, Sunflower, Tulip, Waterlily];

export default flowerArray;