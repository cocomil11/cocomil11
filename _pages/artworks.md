---
layout: page
title: artworks
permalink: /artworks/
description: A collection of my artworks in generative coding and photography.
nav: true
nav_order: 3
display_categories: [DataVisualization, GenerativeArt]
---

<div class="artworks">
  {% if site.enable_artwork_categories and page.display_categories %}
    {% for category in page.display_categories %}
    <h2 class="category">{{ category }}</h2>
    {% assign categorized_artworks = site.artworks | where: "category", category %}
    {% assign sorted_artworks = categorized_artworks | sort: "date" | reverse %}
    <div class="artworks-grid">
      {% for artwork in sorted_artworks %}
      <div class="artwork-item">
        <img src="{{ artwork.image | relative_url }}" alt="{{ artwork.title }}">
        <h3>{{ artwork.title }}</h3>
        <p>{{ artwork.description }}</p>
      </div>
      {% endfor %}
    </div>
    {% endfor %}
  {% else %}
    {% assign sorted_artworks = site.artworks | sort: "date" | reverse %}
    <div class="artworks-grid">
      {% for artwork in sorted_artworks %}
      <div class="artwork-item">
        <img src="{{ artwork.image | relative_url }}" alt="{{ artwork.title }}">
        <h3>{{ artwork.title }}</h3>
        <p>{{ artwork.description }}</p>
      </div>
      {% endfor %}
    </div>
  {% endif %}
</div>

<style>
.artworks {
  padding: 2rem 0;
}

.category {
  margin: 2rem 0 1rem;
  font-size: 1.8rem;
  color: var(--global-theme-color);
}

.artworks-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.artwork-item {
  background: var(--global-bg-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s ease-in-out;
}

.artwork-item:hover {
  transform: translateY(-5px);
}

.artwork-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.artwork-item h3 {
  margin: 1rem;
  font-size: 1.2rem;
}

.artwork-item p {
  margin: 1rem;
  color: var(--global-text-color-light);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .artworks-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .artworks-grid {
    grid-template-columns: 1fr;
  }
}
</style>
