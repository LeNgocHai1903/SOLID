class Tree {
    timber() {
        console.log("I make timbers for human");
    }
}

class FruitTrees  extends Tree {
    fruits() {
        console.log("I make fruits for human");
    }
}

class MangoTree extends FruitTrees {
}

class PineTree extends Tree {}

const doesTreeMakeFruit = (tree) => {
    tree.fruits();
}

const doesTreeMakeTimber = (tree) => {
    tree.timber();
}

const mango = new MangoTree();
const pine = new PineTree();


doesTreeMakeTimber(pine);
doesTreeMakeFruit(mango);
doesTreeMakeFruit(pine)