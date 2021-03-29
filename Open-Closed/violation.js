const shapeType = [
  { type: "retangle", edges: { height: 30, width: 30 } },
  { type: "circle", edges: { radius: 50 } },
  { type: "square", edges: { length: 100 } },
];

const getArea = (shapes) => {
  shapes.forEach(shape => {
      console.log(shape.type);
      switch (shape.type) {
          case "retangle": 
            console.log(shape.edges.height * shape.edges.height ); break;
          case "circle":
              console.log(shape.edges.radius * shape.edges.radius * 3.14); break;
          case "square":
              console.log(shape.edges.length * shape.edges.length); break;      
      }
  })

};

getArea(shapeType);
