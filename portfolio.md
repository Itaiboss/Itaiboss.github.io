---
layout: page
title: portfolio
permalink: /portfolio/
---

<div class="portfolio-gallery">
  {% for project in site.portfolio reversed %}
    <a class="portfolio-tile" href="{{ project.url | relative_url }}">
      <div class="portfolio-tile-frame{% unless project.thumbnail %} placeholder{% endunless %}">
        {% if project.thumbnail %}
          <img src="{{ project.thumbnail | relative_url }}" alt="{{ project.title | escape }}" />
        {% else %}
          <span>[ no photo yet ]</span>
        {% endif %}
      </div>
      <div class="portfolio-tile-caption">
        {{ project.title | escape }}
        <span class="portfolio-tile-date">{{ project.date | date: "%Y" }}</span>
      </div>
    </a>
  {% endfor %}
</div>

<p class="portfolio-gallery-note">More projects and photos at <a href="https://github.com/Itaiboss">github.com/Itaiboss</a>.</p>
