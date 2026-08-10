---
layout: post
title: "Springer Turbidity Sensor"
date: 2022-08-01
thumbnail: /assets/portfolio/springer-sensor/thumb.png
github: https://github.com/Itaiboss/Springer
summary: "Open-source, low-cost side-scattering optical sensor for oceanographic turbidity measurement."
---
Springer is an open-source side-scattering optical sensor built from commercially available parts, aimed at making turbidity measurement cheap enough to replicate for oceanographic research.

* Sensor head holds three LEDs (650/670/720nm, with a 490nm + red-filter option for phytoplankton fluorescence) at 90° to a photodiode receiver, built around scintillation vials for quick calibration.
* A transimpedance amplifier converts the photodiode's current into a voltage the ADS1115 ADC can read; an Arduino Nano sequences the LEDs through common-emitter transistor switches and streams readings out over RS232.
* A custom PCB keeps every component properly grounded and swappable as a single plate, rather than hand-wiring each build.
* PVC housing with O-ring seals and epoxy-potted optics keeps the electronics dry while minimizing optical distortion in the light path.

<div class="portfolio-media">
  <figure>
    <img src="{{ "/assets/portfolio/springer-sensor/thumb.png" | relative_url }}" alt="Springer sensor circuit board design" />
    <figcaption>Circuit board design</figcaption>
  </figure>
</div>

<p class="portfolio-meta">Code: <a href="https://github.com/Itaiboss/Springer">github.com/Itaiboss/Springer</a></p>
