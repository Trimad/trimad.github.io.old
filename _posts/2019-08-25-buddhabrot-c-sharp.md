---
title: Buddhabrot, C#
author: Tristan Madden
categories: [C#]
tags: [fractals, buddhabrot]

---

![Desktop View](https://i.imgur.com/FLfOIxr.jpg)

This image was produced by my C# implementation of the Buddhabrot algorithm. <a href="https://docs.microsoft.com/en-us/dotnet/api/system.threading.tasks.parallel.for?view=net-6.0">Parallel.For</a> makes multithreaded CPU rendering so easy and readable that I see no reason to continue writing anything fractal related in Java. 

Some stats on this image:
- 8191x8191 pixels
- 32bpp, ARGB
- Histogram coloring algorithm
- 50 passes, 1500 bailout value
- 1:1 aspect ratio

<a href="https://github.com/Trimad/Sandbox">GitHub Repository</a>
