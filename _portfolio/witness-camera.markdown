---
layout: post
title: "Witness — Anti-Deepfake Camera"
date: 2024-09-01
github: https://github.com/Itaiboss/Witness
summary: "Proof-of-concept tamper-secure video recording device."
---
A proof-of-concept for tamper-secure video capture: a Raspberry Pi and supplementary sensors wired together so that footage can be trusted after the fact, not just at the moment it's shot.

* Cryptographic signing of captured footage, aimed at making after-the-fact tampering detectable rather than just discouraged.
* Sensor integration and data integrity checks at the hardware level, so the security guarantees don't rely on software alone.
* GPS and data transfer pipeline to get signed footage off the device reliably.

<p class="portfolio-meta">Code: <a href="https://github.com/Itaiboss/Witness">github.com/Itaiboss/Witness</a></p>
