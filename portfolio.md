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

{% if site.portfolio.size < 3 %}
  <p><em>More coming eventually — the backlog is longer than the list above.</em></p>
{% endif %}
