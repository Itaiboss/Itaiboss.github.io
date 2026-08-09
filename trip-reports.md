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

{% if site.trip-reports.size < 3 %}
  <p><em>More coming eventually — I don't get out as much as I'd like.</em></p>
{% endif %}
