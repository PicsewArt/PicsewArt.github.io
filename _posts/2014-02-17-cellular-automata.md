---
quote: true
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'HERO_0055.jpg'
tags: [iOS, Quote]
title: Game of Life Cellular Automata
---

For this week I want to share a concept and an example repository of something called **Cellular Automata**.


To be honest, it's one of those simple things with a big name. Let me explain:


Imagine a grid of cells. Each cell has a finite number of states (let's say 0 or 1 at its most basic case).
The system has an initial configuration for each cell (input) and changes over time according to some fixed rules. These rules determine the new state of each cell in terms of its current state and the state of the cells surrounding it (called neighbors).
Finally, a particular state in time of the grid is called *generation*.

And this is how a two dimensional cellular automata looks (know that they can happen in any number of dimensions):

![Animation](https://raw.github.com/iOSCowboy/GameOfLife/master/Images/Example.gif)

Indeed! With some imagination they do look like cells partying like it's Friday!

This particular example is called 'Game of Life'. It is a popular cellular automaton proposed by John Conway in 1970 and, using two basic rules, can generate groups of cells with lots of different behaviors.

If you want to see how the animation was coded, [check out the code of the repository](https://github.com/iOSCowboy/GameOfLife) (iOS application) or if you are interested in the topic, I suggest the first chapter of the book 'Game of Life Cellular Automata' by Andrew Adamatzky.

As usual, this repository is licensed under the MIT License.
