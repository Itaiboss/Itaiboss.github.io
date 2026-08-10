---
layout: post
title: "Autonomous Race Robot"
date: 2023-08-01
thumbnail: /assets/portfolio/enph-253-robot/thumb.jpg
github: https://github.com/Itaiboss/ENPH-253
summary: "From-scratch autonomous robot for a Mario Kart-themed race, built in 6 weeks."
---
A from-scratch autonomous robot built for a 6-week instrument design course: navigate a Mario Kart-themed course, complete laps, dodge obstacles, and go head-to-head against an opposing robot within a 2-minute time limit. The approach was to stay light and agile and take every shortcut the course allowed, which meant a sub-1.5kg chassis that could still take repeated impacts.

**Mechanical**
* Modelled, machined, and tested every mechanical component in-house.
* Rack-and-pinion servo steering, plus a front bumper to knock away obstacles and absorb impact.

**Electronics**
* Custom PCBs for tape/IR sensing, H-bridge motor control, and power management, all interfacing with an STM32.
* Optocoupled signals into the H-bridge and servos to keep noise out of the control loop.

**Software**
* Finite-state machine driving state-based behavior.
* PID control for tape and IR following.
* IMU integration for rotation/position estimation.
* FFT-based IR frequency sampling to distinguish and follow specific IR beacons.

<div class="portfolio-media">
  <figure>
    <img src="{{ "/assets/portfolio/enph-253-robot/pcb.png" | relative_url }}" alt="Custom motherboard PCB" />
    <figcaption>Custom motherboard PCB</figcaption>
  </figure>
  <figure>
    <img src="{{ "/assets/portfolio/enph-253-robot/course-diagram.png" | relative_url }}" alt="Competition course diagram" />
    <figcaption>Competition course layout</figcaption>
  </figure>
</div>

<p class="portfolio-meta">Code: <a href="https://github.com/Itaiboss/ENPH-253">github.com/Itaiboss/ENPH-253</a></p>
