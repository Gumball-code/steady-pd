// src/index.js

// Wrangler has a special feature that lets you import non-JS files as text.
import htmlContent from '../ParkinsonsApp.html';

export default {
  async fetch(request, env, ctx) {
    // Return the imported HTML content.
    return new Response(htmlContent, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
      },
    });
  },
};
