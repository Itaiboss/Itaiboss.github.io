---
layout: post
title: "Imitation Learning Vehicle Control"
date: 2024-02-01
thumbnail: /assets/portfolio/imitation-learning-comp/thumb.png
github: https://github.com/Itaiboss/ENPH353_ML_COMP
summary: "1st place, UBC ENPH 353 self-driving competition — imitation learning in ROS/Gazebo."
---
An end-to-end imitation-learning driving stack for a simulated ROS/Gazebo competition: navigate rough terrain, dodge obstacles, and read roadside "clueboards" to solve a mystery. Placed 1st out of 17 teams, and the only imitation-learning entry to complete a full run.

**Driving**
* Recorded thousands of frames of camera feed paired with joystick input during manual driving to build a training set.
* Trained several model architectures on that data, with OpenCV background subtraction and masking layered on top to catch obstacles and NPCs.
* A finite-state machine in ROS ties perception to driving behavior.

**Clue detection**
* Homography and perspective transforms align the clueboards and letter cutouts regardless of viewing angle.
* Generated a mixed dataset of synthetic (blurred/cut) and recorded letters, then trained a CNN for classification.

<div class="portfolio-media">
  <figure>
    <img src="{{ "/assets/portfolio/imitation-learning-comp/course.jpg" | relative_url }}" alt="Simulated Gazebo course with a clueboard" />
    <figcaption>Clueboard in the simulated Gazebo course</figcaption>
  </figure>
</div>

<p class="portfolio-meta">Code: <a href="https://github.com/Itaiboss/ENPH353_ML_COMP">github.com/Itaiboss/ENPH353_ML_COMP</a></p>
