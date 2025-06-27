---
layout: page
title: courses
permalink: /courses/
description: A collection of resources used for my online courses and books. 
nav: false
nav_order: 5
---

<div class="courses">
  {%- for course in site.data.courses -%}
  <div class="course-item">
    {% if course.image %}
    <img src="{{ course.image | relative_url }}" alt="{{ course.title }}">
    {% endif %}
    <div class="course-content">
      <a href="{{ course.link }}" class="course-title-link" target="_blank" rel="noopener noreferrer">
        <h2>{{ course.title }}</h2>
      </a>
      <p class="course-description">{{ course.description }}</p>
      <div class="course-meta">
        {% if course.audience %}
        <span class="course-audience">
          <i class="fa-solid fa-users"></i> {{ course.audience }}
        </span>
        {% endif %}
        {% if course.tags %}
        <div class="course-tags">
          {% for tag in course.tags %}
          <span class="tag">{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}
      </div>
    </div>
  </div>
  {%- endfor -%}
</div>

<style>
.courses {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
}

.course-item {
  background: var(--global-bg-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: box-shadow 0.2s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.course-item:hover {
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.course-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.course-content {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.course-title-link {
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease;
}

.course-title-link:hover {
  color: var(--global-theme-color);
}

.course-content h2 {
  margin: 0 0 1rem 0;
  font-size: 1.4rem;
  color: var(--global-theme-color);
  transition: color 0.2s ease;
}

.course-title-link:hover h2 {
  color: var(--global-theme-color);
}

.course-description {
  margin: 0 0 1.5rem 0;
  line-height: 1.6;
  flex-grow: 1;
}

.course-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--global-text-color-light);
}

.course-audience {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.course-audience i {
  color: var(--global-theme-color);
}

.course-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: var(--global-theme-color);
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .courses {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .course-content {
    padding: 1rem;
  }
  
  .course-content h2 {
    font-size: 1.2rem;
  }
}
</style> 