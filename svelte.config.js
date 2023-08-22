//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
//import adapter from '@sveltejs/adapter-static';
 
export default {
 preprocess: vitePreprocess(),
  kit: {
    adapter: adapter()
    
 /* 
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
*/ 
  }
};


