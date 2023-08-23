//import adapter from '@sveltejs/adapter-auto';
//import adapter from '@sveltejs/adapter-netlify';
//import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-static';

import { vitePreprocess } from '@sveltejs/kit/vite';
 
export default {
  preprocess: [vitePreprocess()],
  kit: {
    //SSG Adapter 
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: false
    })
   /* 
    // Node Server Adapter 
    adapter: adapter({
      out: 'build-node',
      precompress: false
    })

    // Netlify Adapter
    adapter: adapter({
      // if true, will create a Netlify Edge Function rather
      // than using standard Node-based functions
      edge: false,
 
      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app.
      // if `edge` is true, this option cannot be used
      split: false
    })
*/ 
  }
};


