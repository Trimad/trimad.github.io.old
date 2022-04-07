"use strict"

let autoPlay = false;
let autoPlayForwards = true;

let collumnArr = [];
let collumnCount;

let textArr = [];
let slices = [];

let isSorted = false;
let sliceIndex = 0;
//for the scroll wheel
let pos = 0;

let train;

function setup() {

  train = loadModel('assets/cat.obj');

  let raw = getURLParams();
  let params = split(raw.params, ',');
  if (params[2]) {
    collumnCount = params[2];
  } else {
    noLoop();
  }

  createCanvas(windowWidth, windowHeight, WEBGL);

  //Initialize the collumn objects
  for (let i = 0; i < collumnCount; i++) {
    let x = ((width / collumnCount) * i);
    collumnArr.push(new Collumn(i, x));
    collumnArr[i].update();
  }

  //Populate an array of random integers
  for (let i = 0; i < collumnCount; i++) {
    textArr[i] = collumnCount - i;
    //textArr[i] = Math.ceil(random(collumnCount));
  }
  switch (params[0]) {
    case "insertion":
      if (params[1] == "ascending") {
        insertionSortAscending(textArr);
      } else if (params[1] == "descending") {
        insertionSortDescending(textArr);
      }
      break;
    case "merge":
      if (params[1] == "ascending") {
        mergeSort(textArr);
      } else if (params[1] == "descending") {
        mergeSort(textArr);
      }
      break;
  }

  isSorted = true;

}

function controls() {
  if (keyIsDown(LEFT_ARROW)) {
    if (sliceIndex > 0) {
      sliceIndex--;
    } else {
      sliceIndex = 1;
    }
  }

  if (keyIsDown(RIGHT_ARROW)) {
    if (sliceIndex < slices.length - 1) {
      sliceIndex++;
    }
  }
}

function draw() {

  background(51);
  orbitControl();
  translate(-width / 2 + collumnArr[0].width / 2, 0, -pos);
  controls();


  if (frameCount % 60 == 0) {
    document.title = floor(frameRate()) + " FPS";

  }

  if (isSorted) {
    if (autoPlay) {
      if (sliceIndex == slices.length - 1) {
        autoPlayForwards = false;
      }
      if (sliceIndex == 0) {
        autoPlayForwards = true;
      }
      if (autoPlayForwards) {
        sliceIndex++;
      } else if (!autoPlayForwards) {
        sliceIndex--;

      }

    }
  }

  //THIS LOOP UPDATES THE COLLUMN VALUE
  for (let i = 0; i < collumnCount; i++) {
    collumnArr[i].getValue(slices[sliceIndex][i]);
    collumnArr[i].show();
  }
}

/*
  if (frameCount % 60 == 0) {
    isSorting = true;
  }
  swapX(collumnArr[0], collumnArr[1]);
  swapX(collumnArr[2], collumnArr[3]);
*/

let tempD = 0;
let isSorting = false;

/*
 *
 * swapX(let,let) is a broken function; still in progress
 *
 */

function swapX(a, b) {
  //a.visible = false;
  //b.visible = false;
  //Update the first column
  let d = (a.x - b.x) / 2;
  let dx = d * Math.cos(frameCount * 0.1);
  let dz = d * Math.sin(frameCount * 0.1);

  //Show the first column
  for (let i = 0; i < a.value; i++) {
    let y = -(height / 2) + i * a.width + a.width - (a.width / 2);
    translate((a.width / 2 + dx), -y, dz);
    rotateY(frameCount * 0.05);
    specularMaterial(255);
    sphere(a.size, 16, 16);
    rotateY(-frameCount * 0.05);
    translate(-(a.width / 2 + dx), y, -dz);
  }

  //Show the second column
  for (let i = 0; i < b.value; i++) {
    let y = -(height / 2) + i * b.width + b.width - (b.width / 2);
    translate((b.width / 2 - dx), -y, -dz);
    rotateY(frameCount * 0.05);
    specularMaterial(255);
    sphere(a.size, 16, 16);
    rotateY(-frameCount * 0.05);
    translate(-(b.width / 2 - dx), y, dz);
  }

  if (dz === 0) {
    isSorting = true;
    a.visible = true;
    b.visible = false;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for (let i = 0; i < collumnCount; i++) {
    collumnArr[i].update();
  }
}

function mouseWheel(event) {
  pos += event.delta;
}

function addSlice(_source, _destination) {
  let temp = [];
  temp = deepCopy(_source);
  _destination.push(temp);
}

function keyTyped() {
  if (keyCode == ENTER) {
    autoPlay = !autoPlay;
  }

}

function deepCopy(o) {
  let output, v, key;
  output = Array.isArray(o) ? [] : {};
  for (key in o) {
    v = o[key];
    output[key] = (typeof v === "object") ? deepCopy(v) : v;
  }
  return output;
}