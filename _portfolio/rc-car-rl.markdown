---
layout: post
title: "RC Car Multi-Agent RL"
date: 2025-01-15
github: https://github.com/Itaiboss/ESP32_RC_car_1_64
summary: "Decentralized multi-agent reinforcement learning across a fleet of 1:64 scale RC cars."
---
A decentralized architecture for coordinating a team of 1:64 scale RC vehicles on cooperative tasks, built for real-world reinforcement learning training rather than pure simulation.

* ESP32 microcontrollers handle inter-agent communication, tuned for reliable, low-latency data transfer since coordination breaks down fast once messages lag.
* Control policies run per-agent, coordinating the fleet toward cooperative objectives.
* A Python-based simulation environment was used to implement and validate the multi-agent RL framework before deploying to hardware.

<p class="portfolio-meta">Code: <a href="https://github.com/Itaiboss/ESP32_RC_car_1_64">github.com/Itaiboss/ESP32_RC_car_1_64</a></p>
