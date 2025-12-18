---
layout: page
title: trip reports
permalink: /trip-reports/
---

<ul class="post-list">
  {% for report in site.trip-reports reversed %}
    <li>
      <span class="post-meta">{{ report.date | date: "%Y-%m-%d" }}</span>
      <a class="post-link" href="{{ report.url | relative_url }}">
        {{ report.title | escape }}
      </a>
    </li>
  {% endfor %}
</ul>
