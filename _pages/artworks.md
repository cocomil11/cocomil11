---
layout: page
title: artworks
permalink: /artworks/
description: A collection of my artworks
nav: true
nav_order: 3
---

<div class="artworks">
  {%- for artwork in site.artworks -%}
  <div class="artwork-item">
    <h2>{{ artwork.title }}</h2>
    <img src="{{ artwork.image | relative_url }}" alt="{{ artwork.title }}">
    <p>{{ artwork.description }}</p>
    <p class="artwork-meta">
      <span class="artwork-date">{{ artwork.date | date: "%B %-d, %Y" }}</span>
      {% if artwork.tags %}
      <span class="artwork-tags">
        {% for tag in artwork.tags %}
        <span class="tag">{{ tag }}</span>
        {% endfor %}
      </span>
      {% endif %}
    </p>
  </div>
  {%- endfor -%}
</div>

<style>
.artworks {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
}

.artwork-item {
  background: var(--global-bg-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.artwork-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.artwork-item h2 {
  margin: 1rem;
  font-size: 1.5rem;
}

.artwork-item p {
  margin: 1rem;
}

.artwork-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--global-text-color-light);
}

.tag {
  background: var(--global-theme-color);
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
}
</style>
