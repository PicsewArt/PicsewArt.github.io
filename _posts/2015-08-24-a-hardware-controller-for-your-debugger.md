---
quote: true
category: "iOS"
cave: true
hero:
  format: 'jpeg'
  url: 'post/iOS.jpg'
tags: [iOS, Quote]
title: Using a hardware controller for your debugger
---

Back when I was active recording my own music ([SoundCloud for the curious](https://soundcloud.com/yuniper)) I always used a hardware knob to navigate and control Logic.

It was a very simple device ([a knob which is also a big button](https://griffintechnology.com/powermate)) but incredibly useful. So I thought: if it was so wonderful with music software, perhaps it can useful on an IDE!

My main problem was the constant switching between clicking the simulator (or taping a real device) and typing the common two-handed shortcuts you need while debugging in Xcode: pause, step over, step into, etc.

## Controller Options ##

I browsed MIDI controllers and video control surfaces, and bought a [Contour Shuttle-Xpress](https://ergo.contour-design.com/ergonomic-mouse/shuttlexpress) after a little research. It's small, inexpensive and comes with a dial and more than enough buttons.

![Shuttle-Xpress]({{ site.url }}/assets/images/posts/content/2015-08-24-01.png)

Other options I considered were:

* an updated version of the [Griffin Powermate](https://griffintechnology.com/laptops/powermate-bluetooth): It looks really neat but I wanted more than one button. Also, I'm not a big fan of changing batteries.
* [Palette Controllers](https://palettegear.com/index.html): Nice looking but too expensive.
If you don't know what to do with your money, there is a [Wood Edition](https://shop.trycelery.com/page/palettekits) for only $899.
* MIDI controllers: Bulky and require some third party software converting MIDI to keyboard commands.


## Layout ##

Next thing was just to configure my most used shortcuts and tune a little bit that configuration after some use. This is the layout I'm using right now:

| Button						| Action														|
| --------					| ----------												|
| Big Left Button 	|	De / Activate Breakpoints				|
| Left Button			 	|	Add Breakpoint at Current Line 	|
| Central Button		|	Debug - Pause								 			|
| Right Button			|	Debug - Continue									|
| Big Right Button	|	Debug - Step Into								|
| Jog Wheel					|	Up Arrow / Down Arrow						|
| Springy Wheel			|	Debug Step Over / Out						|


## Results ##

Definitively worth it!

It's probably not as powerful as it is for video or music software, but it makes debugging more comfortable, and at 40-60 USD it's worth a try.

Of course, you could also set different shortcuts, but the easy ones are already assigned, and if I really wanted to stretch my hands I would instead try to play something from Rachmaninoff.

**Happy debugging!**
