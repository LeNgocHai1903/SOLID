class Tree {
    makeFruits() {
        console.log("I make fruit for human");
    }
    makeTimber() {
        console.log("I make timber for human");
    }
}

class MangoTree extends Tree {
    
}

class Pine extends Tree {
    makeFruits() {
        throw new Error("I don't");
    }
}

const makeFruits = (tree) => {
    tree.makeFruits();
}

const mango = new MangoTree();
const pine = new Pine();

makeFruits(mango);
makeFruits(pine);