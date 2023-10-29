---
title: obj2desmos - rendering 3-D models in Desmos
date: 2023-10-15 11:00:00
---

with the release of the Desmos [3-D graphing calculator](https://desmos.com/3d), I decided that I wanted to try rendering some `.obj` files with it. The script is on [GitHub](https://github.com/shangmingwu/obj2demos), and I posted on [Twitter](https://twitter.com/RealSimonWu/status/1713642105241833698?s=20) about it.

Here are some examples:

- [Lara Croft](https://desmos.com/3d/a8c8882470), 526 faces
  - From Tomb Raider (1996) for the Sega Saturn
- [Solid Snake](https://desmos.com/3d/6792435fdf), 644 faces
  - From Metal Gear Solid (1998) for the Playstation
- [Master Chief](https://desmos.com/3d/6405f2afd4), 3086 faces
  - From Halo 2 (2004) for the Xbox
- [Cortana](https://desmos.com/3d/340bb02de5), 7188 faces
  - From Halo 3 (2007) for the Xbox 360

These examples are from an earlier version of the script, which created an individual `triangle` expression for each face from the model. I later updated the script to use lists of coordinates and vertex indices, rendering with a list comprehension instead.

Coming soon in the script is support for rudimentary colouring using diffuse maps or texture information, as well as triangulation of non-triangle faces. Desmos allows only a single colour for a face, so instead of warping a section of a diffuse map onto each face, I will probably try to interpolate a single colour based on the texture vertices for each face.