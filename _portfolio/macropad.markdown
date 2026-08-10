---
layout: post
title: "Greylock Macropad"
date: 2023-04-01
thumbnail: /assets/portfolio/macropad/thumb.png
github: https://github.com/Itaiboss/Greylock-
summary: "Custom SMD macropad — keys, encoder, and OLED, built for fun."
---
Greylock is a custom macropad built for fun: keys, LEDs, a rotary encoder, and an OLED, each programmable to any input or script, driven by a KB2040 microcontroller.

* First attempt at an SMD PCB — next time skipping the FPC connector to the OLED, since dragging solder across that pitch took more than one try.
* Housing went through a few shapes before landing on a "calculator" look; mounting the OLED to the case instead of the board below it made a slim top face harder to pull off.
* Firmware written in CircuitPython.

<div class="portfolio-media">
  <figure>
    <img src="{{ "/assets/portfolio/macropad/housing2.png" | relative_url }}" alt="Macropad housing prototype" />
    <figcaption>Housing prototype</figcaption>
  </figure>
  <figure>
    <img src="{{ "/assets/portfolio/macropad/pcb.png" | relative_url }}" alt="Macropad SMD PCB" />
    <figcaption>SMD PCB</figcaption>
  </figure>
</div>

<p class="portfolio-meta">Code: <a href="https://github.com/Itaiboss/Greylock-">github.com/Itaiboss/Greylock-</a></p>
