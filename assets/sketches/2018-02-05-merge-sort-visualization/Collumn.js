"use strict"

function Collumn(_index, _x) {

  this.index = _index;
  this.width;
  this.height;
  this.value;
  this.x = _x;
  this.y;
  this.z = 0;
  this.visible = true;
  this.spacing = 0;

  this.show = function() {
    if (this.visible) {
      for (let i = 0; i < this.value; i++) {
        //For boxes
        this.y = -(height / 2) + i * this.width + this.width - (this.width / 2.2) - (pos / 2);
        translate(this.x, -this.y, this.z);
        rotateY(frameCount * 0.01);
        normalMaterial(255);
        //specularMaterial(255);
        //var r = map(this.value, 0, collumnCount, 255, 0);
        //var g = map(this.value, 0, collumnCount, 0, 255);
        //stroke(r, g, 0);
        //scale(0.1);
        //model(train);
        //scale(10);
        box(this.size, this.size, this.size);
        rotateY(-frameCount * 0.01);
        translate(-this.x, this.y, -this.z);
      }
    }
  }

  this.getValue = function(_num) {
    this.value = _num;
  }

  this.update = function() {
    this.width = width / collumnCount;
    this.x = ((width / collumnCount) * this.index);
    this.height = this.width * this.value;
    this.size = this.width / 1.5;
    this.spacing = 0;
  }

}
