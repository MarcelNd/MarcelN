---
layout: page
title: Blog Archive
---

{% for tag in site.tags %}
  <h3 class="tag-heading">{{ tag[0] }}</h3>
  <ul class="post-list">
    {% for post in tag[1] %}
      <li><a href="/marcelsblog/{{ post.url }}">{{ post.date | date: "%B %Y" }} - {{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}