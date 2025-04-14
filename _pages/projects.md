---
layout: page
title: projects
permalink: /projects/
description: A collection of projects spanning ICT for humanitarian efforts and artistic work.
nav: true
nav_order: 4
display_categories: [DataVisualization, GenerativeArt]
---

<div class="projects">
  {%- for project in site.projects -%}
  <a href="{% if project.redirect %}{{ project.redirect }}{% else %}{{ project.url | relative_url }}{% endif %}" class="project-link" {% if project.redirect %}target="_blank" rel="noopener noreferrer"{% endif %}>
    <div class="project-item">
      <h2>{{ project.title }}</h2>
      <img src="{{ project.img | relative_url }}" alt="{{ project.title }}">
      <p>{{ project.description }}</p>
      <p class="project-meta">
        <span class="project-category">{{ project.category }}</span>
        {% if project.tags %}
        <span class="project-tags">
          {% for tag in project.tags %}
          <span class="tag">{{ tag }}</span>
          {% endfor %}
        </span>
        {% endif %}
      </p>
    </div>
  </a>
  {%- endfor -%}
</div>

<style>
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
}

.project-link {
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;
}

.project-link:hover {
  transform: translateY(-5px);
}

.project-item {
  background: var(--global-bg-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: box-shadow 0.2s ease;
}

.project-link:hover .project-item {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.project-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.project-item h2 {
  margin: 1rem;
  font-size: 1.5rem;
}

.project-item p {
  margin: 1rem;
}

.project-meta {
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
