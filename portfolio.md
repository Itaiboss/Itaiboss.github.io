---
layout: page
title: portfolio
permalink: /portfolio/
---

<ul class="post-list">
  {% for project in site.portfolio reversed %}
    <li>
      <span class="post-meta">{{ project.date | date: "%Y-%m-%d" }}</span>
      <a class="post-link" href="{{ project.url | relative_url }}">
        {{ project.title | escape }}
      </a>
    </li>
  {% endfor %}
</ul>
