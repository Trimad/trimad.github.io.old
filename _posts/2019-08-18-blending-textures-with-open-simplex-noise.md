---
title: Blending Textures With Open Simplex Noise
author: Tristan Madden
categories: [Java, Processing]
tags: [open simplex noise]
---
![Desktop View](/assets/img/avatar.gif){: width="auto" height="auto" }

This sketch loads two images and creates an image mask that blends them together. The transparency of the image mask is determined by 4D Open Simplex Noise, which loops perfectly.
<a href="https://gitlab.com/tristan.madden/open_simplex_noise_texture_blending">Clone the GitLab Repository</a>
<a href="https://gist.github.com/KdotJPG/b1270127455a94ac5d19">View OpenSimplexNoise.java by Kurt Spencer</a>
The ffmpeg command I used to assemble the frames is:
```console
ffmpeg -i gif-%03d.png output.gif
```
<script src="https://gitlab.com/tristan.madden/open_simplex_noise_texture_blending/snippets/1887111.js"></script>