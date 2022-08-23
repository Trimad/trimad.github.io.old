---
title: "Promptcrafte: Cinematography by Robert Elswit"
author: Tristan Madden
categories: [Stable Diffusion, prompts]
tags: [stable diffusion]
---

This is a living document dedicated to capturing a particular generative style. 

![Desktop View](/assets/img/2022-08-22/01.png){: width="auto" height="auto" }
![Desktop View](/assets/img/2022-08-22/02.png){: width="auto" height="auto" }

`
from torch import autocast

generator = torch.Generator("cuda").manual_seed(1024)

prompt = "Cinematography by Robert Elswit. Anamorphic lens depth of field. Bokeh caused by anamorphic lens. Flare caused by anamorphic lens. Dark fringing caused by anamorphic lens."
  
with autocast("cuda"):
  image = pipe(prompt, num_inference_steps=60, guidance_scale = 7.5, height=384, width=768, generator=generator)["sample"][0]
  pipe.safety_checker = (lambda images, clip_input: (images, False))


image
`