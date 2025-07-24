---
layout: page
title: resources
permalink: /resources/
description: Excel files, PDFs, and Google Colab notebooks for my courses and books.<br>講座や本で用いた Excel File や Slide、Python Codeなど。
nav: true
nav_order: 6
---

<div class="downloads">
  <!-- Existing Download Sections -->
  <div class="download-sections">
    <!-- Airtable Embed Section -->
    <!-- <div class="airtable-section"> -->
      <!-- <h2>Useful Links for HCI/VIS Researchers</h2> -->
      <!-- <div class="airtable-container"> -->
        <!-- Replace this iframe with your actual Airtable embed code -->
        <!-- <iframe 
          class="airtable-embed" 
          src="https://airtable.com/embed/appER2TA7BfFC25HQ/shruMCm0NbC8bDyDb"
          width="100%" 
          height="800" 
          style="background: transparent; border: 1px solid #ccc;">
        </iframe> -->
      <!-- </div> -->
    <!-- </div> -->

    {%- for section in site.data.downloads -%}
    <div class="download-section">
      <h2>{{ section.title }}</h2>
      {% if section.description %}
      <p class="section-description">{{ section.description }}</p>
      {% endif %}
      
      <div class="download-grid">
        {%- for file in section.files -%}
        <div class="download-item">
          <div class="file-info">
            <div class="file-icon">
              {% if file.url contains 'colab.research.google.com' %}
                <i class="fab fa-google"></i>
              {% elsif file.url contains '.pdf' %}
                <i class="fas fa-file-pdf"></i>
              {% else %}
                <i class="fas fa-file-excel"></i>
              {% endif %}
            </div>
            <div class="file-details">
              <h3>{{ file.name }}</h3>
              {% if file.description %}
              <p class="file-description">{{ file.description }}</p>
              {% endif %}
            </div>
          </div>
          <div class="download-actions">
            {% if file.url contains 'colab.research.google.com' %}
              <a href="{{ file.url }}" class="download-btn" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-external-link-alt"></i>
                Open in Colab
              </a>
            {% else %}
              <a href="{{ file.url | relative_url }}" class="download-btn" download>
                <i class="fas fa-download"></i>
                Download
              </a>
            {% endif %}
          </div>
        </div>
        {%- endfor -%}
      </div>
    </div>
    {%- endfor -%}
  </div>
</div>

<style>
.downloads {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
}

/* Airtable Section Styles */
.airtable-section {
  margin-bottom: 1rem;
  /* padding: 0.5rem 0; */
  border-bottom: 2px solid var(--global-border-color);
}

.airtable-section h2 {
  color: var(--global-theme-color);
  margin-bottom: 1rem;
  font-size: 1.8rem;
  text-align: left;
}

.airtable-container {
  background: var(--global-bg-color);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
}

.airtable-embed {
  border-radius: 8px;
  border: none !important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Existing Styles */
.download-intro {
  text-align: center;
  margin-bottom: 3rem;
}

.download-intro h1 {
  color: var(--global-theme-color);
  margin-bottom: 1rem;
}

.download-intro p {
  font-size: 1.1rem;
  color: var(--global-text-color-light);
  max-width: 600px;
  margin: 0 auto;
}

.download-sections {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.download-section h2 {
  color: var(--global-theme-color);
  margin-bottom: 1rem;
  font-size: 1.8rem;
  text-align: left;
}

.section-description {
  color: var(--global-text-color-light);
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: center;
}

.download-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.download-item {
  background: var(--global-bg-color);
  border: 1px solid var(--global-border-color);
  border-radius: 8px;
  padding: 1rem;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
}

.download-item:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.file-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.file-icon {
  font-size: 1.5rem;
  color: var(--global-theme-color);
  margin-bottom: 0.5rem;
}

.file-details h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  color: var(--global-text-color);
  line-height: 1.3;
}

.file-description {
  margin: 0 0 0.5rem 0;
  color: var(--global-text-color-light);
  font-size: 0.8rem;
  line-height: 1.3;
}

.download-actions {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  background: var(--global-theme-color);
  color: white;
}

.download-btn:hover {
  background: var(--global-theme-color);
  opacity: 0.9;
  transform: translateY(-1px);
}

@media (max-width: 1200px) {
  .download-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .download-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .airtable-embed {
    height: 400px;
  }
}

@media (max-width: 600px) {
  .downloads {
    padding: 1rem;
  }
  
  .download-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .download-item {
    padding: 1rem;
    min-height: auto;
  }
  
  .file-info {
    text-align: left;
    flex-direction: row;
  }
  
  .file-icon {
    margin-bottom: 0;
    margin-right: 0.5rem;
  }
  
  .download-actions {
    flex-direction: row;
    justify-content: flex-start;
  }
  
  .airtable-embed {
    height: 300px;
  }
}
</style> 