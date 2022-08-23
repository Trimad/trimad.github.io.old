---
title: "Promptcrafte: Vector Art Greeting Cards"
author: Tristan Madden
categories: [Stable Diffusion, prompts]
tags: [stable diffusion]
---

This is a living document dedicated to capturing a particular generative style. 

![Desktop View](/assets/img/2022-08-22/4x.jpg){: width="auto" height="auto" }

`
prompt = "Portrait of a haunted porcelain doll. Clean Cel shaded vector art. Shutterstock. behance hd by lois van baarle, artgerm, Helen huang, by makoto shinkai and ilya kuvshinov, rossdraws, illustration"
with autocast("cuda"):
  image = pipe(prompt, height=512, width=512)["sample"][0]
  pipe.safety_checker = (lambda images, clip_input: (images, False))

image
`