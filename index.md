---
layout: home
---

<div class="photo-frame">
  <img src="{{ "/assets/photo.jpg" | relative_url }}" alt="Itai Boss" />
</div>

# Hi, I'm Itai

Finished an Internship at MIT Lincoln Labs working on agile LEO satellites. Back in school working on developing in-real RL training platforms for autonomous vehicles.

[Check out my projects](https://github.com/Itaiboss) or read my [trip reports](/trip-reports/).

## About Me

### Things I think are pretty cool:
* **Snowboarding:** Increasingly splitboarding.
* **Diving:** As close to space as I'll probably ever get
* **Human-Powered Travel:** Humans are pretty incredible
* **Prototype Hardware:** I love the magic of bringing a project to life
* **Board Games:** The more rules the better
* **[Honda Elements](https://en.wikipedia.org/wiki/Honda_Element):** Self explanatory
* **Music:** Learning bass and always listening. Here's what I've been listening to this year

<iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/playlist/37i9dQZEVXd9esR2nH6gsn?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

## Webring

A short list of sites worth your time:

* [Old School RuneScape](https://oldschool.runescape.com/) — the state of the art hasn't improved since 2007, and that's fine.
* [Kerbal Space Program](https://www.kerbalspaceprogram.com/) — the reason I understand orbital mechanics at all.
* [MIT Lincoln Laboratory](https://www.ll.mit.edu/) — where I got to work on satellites.

*(More to come — let me know if your site belongs here.)*

## Recent Posts

<ul class="post-list">
  {% for post in site.posts limit:3 %}
    <li class="post-list-item">
      <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span><br>
      <a href="{{ post.url | relative_url }}" class="post-link">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
