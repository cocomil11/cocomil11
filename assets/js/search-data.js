// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Conference and journal papers published in ACM HCI, ACM Multimedia (MM), IEEE Visualization (VIS), AAAI, and journals related to ICT4D.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-artworks",
          title: "artworks",
          description: "A collection of my artworks in generative coding and photography.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/artworks/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A collection of projects spanning ICT for humanitarian efforts and artistic work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2025/03/26/plotly.html";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/12/04/photo-gallery.html";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/05/01/tabs.html";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/04/29/typograms.html";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/04/28/post-citation.html";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/04/15/pseudocode.html";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/27/code-diff.html";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/27/advanced-images.html";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/27/vega-lite.html";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/26/geojson-map.html";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/26/echarts.html";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2024/01/26/chartjs.html";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/12/12/tikzjax.html";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/07/12/post-bibliography.html";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/07/04/jupyter-notebook.html";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/05/12/custom-blockquotes.html";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/04/25/sidebar-table-of-contents.html";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/04/25/audios.html";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/04/24/videos.html";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/03/20/tables.html";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2023/03/20/table-of-contents.html";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/external-services/2022/12/10/giscus-comments.html";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/cv.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2021/07/04/diagrams.html";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/2021/05/22/distill.html";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/external-services/2020/09/28/twitter.html";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/external-services/2015/10/20/disqus-comments.html";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2015/10/20/math.html";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2015/07/15/code.html";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2015/05/15/images.html";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/sample-posts/2015/03/15/formatting-and-links.html";
          
        },
      },{id: "artworks-ambient-mix",
          title: 'Ambient Mix',
          description: "A blend of ambient elements creating a harmonious composition",
          section: "Artworks",handler: () => {
              window.location.href = "/artworks/ambient-mix.html";
            },},{id: "artworks-no-title",
          title: 'No Title',
          description: "An abstract exploration of artistic expression",
          section: "Artworks",handler: () => {
              window.location.href = "/artworks/art.html";
            },},{id: "artworks-autumn",
          title: 'Autumn',
          description: "A seasonal visualization capturing the essence of fall",
          section: "Artworks",handler: () => {
              window.location.href = "/artworks/autumn.html";
            },},{id: "artworks-ball-cosmos",
          title: 'Ball Cosmos',
          description: "A cosmic exploration through spherical forms",
          section: "Artworks",handler: () => {
              window.location.href = "/artworks/ball-cosmos.html";
            },},{id: "artworks-bee-colony",
          title: 'Bee Colony',
          description: "A visualization of collective behavior and swarm intelligence",
          section: "Artworks",handler: () => {
              window.location.href = "/artworks/bee-colony.html";
            },},{id: "artworks-dancing-tiles",
          title: 'Dancing Tiles',
          description: "An animated composition of moving geometric elements",
          section: "Artworks",handler: () => {
              window.location.href = "/artworks/dancing-tiles.html";
            },},{id: "artworks-generative-city",
          title: 'Generative City',
          description: "A procedurally generated urban landscape",
          section: "Artworks",handler: () => {
              window.location.href = "/artworks/generative-city.html";
            },},{id: "artworks-hannya",
          title: 'Hannya',
          description: "A modern interpretation of the traditional Japanese Hannya mask",
          section: "Artworks",handler: () => {
              window.location.href = "/artworks/hannya.html";
            },},{id: "artworks-ideality",
          title: 'Ideality',
          description: "An exploration of ideal forms and perfect geometry",
          section: "Artworks",handler: () => {
              window.location.href = "/artworks/ideality.html";
            },},{id: "artworks-polygon-layer-art",
          title: 'Polygon Layer Art',
          description: "A complex layered composition of geometric polygons",
          section: "Artworks",handler: () => {
              window.location.href = "/artworks/polygon-layer-art.html";
            },},{id: "artworks-square",
          title: 'Square',
          description: "A minimalist geometric artwork exploring the beauty of simple shapes",
          section: "Artworks",handler: () => {
              window.location.href = "/artworks/square.html";
            },},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2.html";
            },},{id: "news-our-paper-titled-forecasting-the-movement-of-internally-displaced-people-using-artificial-intelligence-co-authored-in-collaboration-with-the-united-nations-has-been-accepted-as-a-book-chapter-for-bright-network",
          title: 'Our paper titled “Forecasting The Movement Of Internally Displaced People Using Artificial Intelligence”,...',
          description: "",
          section: "News",},{id: "news-my-new-course-learning-data-visualization-through-practical-problems-has-been-published-on-schoo-a-leading-japanese-online-learning-platform",
          title: 'My new course, “Learning Data Visualization through Practical Problems”, has been published on...',
          description: "",
          section: "News",},{id: "news-my-new-course-introduction-to-data-visualization-with-python-has-been-published-on-schoo-a-leading-japanese-online-learning-platform",
          title: 'My new course, “Introduction to Data Visualization with Python”, has been published on...',
          description: "",
          section: "News",},{id: "news-i-have-been-admitted-to-the-ph-d-program-in-the-department-of-computer-science-and-engineering-at-the-hong-kong-university-of-science-and-technology",
          title: 'I have been admitted to the Ph.D. program in the Department of Computer...',
          description: "",
          section: "News",},{id: "news-our-paper-echoes-in-the-gallery-a-collaborative-immersive-analytics-system-for-analyzing-audience-reactions-in-virtual-reality-exhibitions-has-been-accepted-for-the-mercado-workshop-at-ieee-vis-2023",
          title: 'Our paper “Echoes in the Gallery: A Collaborative Immersive Analytics System for Analyzing...',
          description: "",
          section: "News",},{id: "news-our-work-echoes-in-the-gallery-a-collaborative-immersive-analytics-system-for-analyzing-audience-reactions-in-virtual-reality-exhibitions-has-been-accepted-for-the-workshop-session-at-ieee-vis-2023-in-melbourne",
          title: 'Our work “Echoes in the Gallery: A Collaborative Immersive Analytics System for Analyzing...',
          description: "",
          section: "News",},{id: "news-our-exhibition-ar-ricci-map-which-uses-augmented-reality-to-enhance-ricci-maps-is-now-on-display-at-the-china-in-maps-exhibition-in-the-hkust-library",
          title: 'Our exhibition “AR Ricci Map”, which uses augmented reality to enhance Ricci maps,...',
          description: "",
          section: "News",},{id: "news-our-co-authored-paper-vr-mediated-cognitive-defusion-a-comparative-study-for-managing-negative-thoughts-has-been-accepted-for-oral-presentation-top-4-at-acm-multimedia-2024-in-melbourne",
          title: 'Our co-authored paper “VR-Mediated Cognitive Defusion: A Comparative Study for Managing Negative Thoughts”...',
          description: "",
          section: "News",},{id: "news-our-co-authored-paper-of-acm-multimedia-24-received-an-honorable-mention-award-top-1",
          title: 'Our co-authored paper of ACM Multimedia 24 received an honorable mention award [top...',
          description: "",
          section: "News",},{id: "news-my-first-author-paper-tangiblenet-synchronous-network-data-storytelling-through-tangible-interactions-in-augmented-reality-has-been-accepted-for-presentation-at-chi-2025-in-yokohama-acceptance-rate-24",
          title: 'My first-author paper “TangibleNet: Synchronous Network Data Storytelling through Tangible Interactions in Augmented...',
          description: "",
          section: "News",},{id: "projects-ai-for-humanitarian-planning",
          title: 'AI for Humanitarian Planning',
          description: "Working in collaboration with the United Nations, we investigated refugee destination prediction in the Democratic Republic of Congo. After evaluating the role of information technology in refugee support, our team developed a model to predict group movements based on factors such as conflict patterns, local ethnic composition, language, and geography. Accurately forecasting these flows helps ensure more effective distribution of humanitarian aid. Our findings were presented at the International Development Conference and featured in a Bright Network book chapter. For more details, please see the Publications",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-ar-ricci-39-s-map",
          title: 'AR Ricci&amp;#39;s Map',
          description: "At the &quot;China in Maps&quot; exhibition at the HKUST Library, we designed and implemented an AR system that enhances the historically significant 1602 world map by Matteo Ricci. Our system offers visitors an engaging and interactive experience, allowing them to compare different maps, access multilingual content, and explore Ricci&#39;s map projected onto a physical globe. The exhibition is scheduled to run for one year starting in October 2023.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
