// Triangle Area
function calculateTriangleArea() {
  const triangleBase = document.getElementById("triangle-base").value;
  const base = parseFloat(triangleBase);

  const triangleHeight = document.getElementById("triangle-height").value;
  const height = parseFloat(triangleHeight);

  const area = 0.5 * base * height;
  console.log(area);
}

// Rectangle Area
function calculateRectangleArea() {
  const rectangleLength = document.getElementById("rectangle-length").value;
  const length = parseFloat(rectangleLength);

  const rectangleWidth = document.getElementById("rectangle-width").value;
  const width = parseFloat(rectangleWidth);

  const rectangleArea = length * width;
  console.log(rectangleArea);
}

// Parallelogram Area
function calculateParaArea() {
  const paraBase = document.getElementById("para-base").value;
  const pBase = parseFloat(paraBase);

  const paraHeight = document.getElementById("para-height").value;
  const pHeight = parseFloat(paraHeight);

  const pArea = pBase * pHeight;
  console.log(pArea);
}

// Rhombus Area
function calculateRhombusArea() {
  const rdistance1 = document.getElementById("r-distance1").value;
  const rd1 = parseFloat(rdistance1);

  const rdistance2 = document.getElementById("r-distance2").value;
  const rd2 = parseFloat(rdistance2);

  const rhArea = rd1 * rd2;
  console.log(rhArea);
}

// Pentagon Area
function calculatePentagonArea() {
  const pentaPeri = document.getElementById("penta-p").value;
  const pentaP = parseFloat(pentaPeri);

  const pentaBase = document.getElementById("penta-b").value;
  const pentaB = parseFloat(pentaBase);

  const pentaArea = 0.5 * pentaP * pentaB;
  console.log(pentaArea);
}

// Ellipse Area
function calculateEllipseArea() {
  const ellipseA = document.getElementById("ellipse-a").value;
  const eA = parseFloat(ellipseA);

  const ellipseBase = document.getElementById("ellipse-b").value;
  const eB = parseFloat(ellipseBase);

  const eArea = 3.1416 * eA * eB;
  console.log(eArea);
}
