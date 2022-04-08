---
title: Buddhabrot, Java
author: Tristan Madden
categories: [Java]
tags: [fractal, buddhabrot]
---
![Desktop View](https://i.imgur.com/eLjfYTR.jpg)
This image was produced by my Java implementation of the Buddhabrot algorithm.  I was very interested in this fractal as a teenager and believe I first encountered it on <a href="http://www.complexification.net/gallery/machines/buddhabrot/">www.complexification.net</a> when I was 15 or so. 

 I needed a working implementation of rendering the Mandelbrot set before I could produce this image, so there are functions leftover in this program for generating the Mandelbrot set. I've implemented some basic features such as random Gaussian points to introduce some blur, HSB color support, and basic <a href="https://en.wikipedia.org/wiki/Misiurewicz_point">Misiurewicz Point</a> support. It's Java though, so the performance is abysmal.

Some stats on this image:
- HSB colorizing algorithm
- 7680x4320 pixels
- 3000 iterations
- 16:9 aspect ratio

<h1><a href="https://gitlab.com/tristan.madden/pixelplayground/tree/master/src/pixelsplayground">GitLab Repository</a></h1>