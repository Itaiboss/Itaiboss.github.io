---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

# Hi, I'm Itai

<h3>Recent Posts</h3>
<ul style="list-style: none; padding: 0;">
  {% for post in site.posts limit:3 %}
    <li style="margin-bottom: 15px;">
      <span style="font-size: 0.85em; color: #666;">{{ post.date | date: "%Y-%m-%d" }}</span><br>
      <a href="{{ post.url | relative_url }}" style="font-weight: bold; text-decoration: none;">
        {{ post.title }}
      </a>
    </li>
  {% endfor %}
</ul>


### Things I think are pretty cool:
* **Snowboarding:** Increasingly splitboarding.
* **Diving:** As close to space as I'll probably ever get
* **Music** Learning bass and always listening. Here's what I've been listening to this year
<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZEVXd9esR2nH6gsn?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>* **Human-Powered Travel:** Humans are pretty incredible 
* **Prototype Hardware:** I love the magic of bringing a project to life
* **Board Games:** The more rules the better
* **[Honda Elements](https://en.wikipedia.org/wiki/Honda_Element):** Self explanatory

---
### What I do
- Embedded Systems & Robotics: Embedded C, Rust, and ROS for autonomous systems.
- Control Systems: Classical and state-space techniques, RTOS and finite state machines. 

### Recently
Finished an Internship at MIT Lincoln Labs working on agile LEO sattelites. Back in school working on developing in-real RL training platforms for autonomous vehicles. 

[Check out my projects](https://github.com/Itaiboss) or read my [trip reports](/trip-reports/).
