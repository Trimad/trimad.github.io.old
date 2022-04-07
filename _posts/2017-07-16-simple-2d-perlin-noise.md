---
title: Simple 2D Terrain Generation Using Perlin Noise
author: Tristan Madden
categories: [JavaScript,p5.js]
tags: [perlin noise,terrain,interactive]
---
<!-- <center>
<iframe src="https://editor.p5js.org/Berkanan/full/LbNSvlqKU" width="100%" height="700px"></iframe>
<em>click on the map to generate a new one</em>
</center> -->

<div class="box">
    <div class="box-content">
        <iframe src="https://editor.p5js.org/Berkanan/full/LbNSvlqKU" width="100%" height="100%"></iframe>
    </div>
</div>
<center>
    <em>click on the map to generate a new one</em>
</center>
<br>
This sketch maps perlin noise between a value of 0 and 255 across a grid. Values greater than or equal to 100 are
"grass", values between 75 and 100 are "sand", and values less than or equal to 75 are "water".
<h2><a href="https://editor.p5js.org/Berkanan/full/LbNSvlqKU" target="_blank">Click here to render a fullscreen map</a>
</h2>
<h2><a href="https://editor.p5js.org/Berkanan/sketches/LbNSvlqKU">Launch the p5.js editor</a></h2>