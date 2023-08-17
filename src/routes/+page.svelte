<script> 
 import About from "../widgets/About.svelte";
 import Gallery from "../widgets/Gallery.svelte";
</script>


<div class="grid grid-cols-6 grid-rows-6 gap-1 w-full h-full content-center">
  <div class="row-span-1 col-span-6 ..."></div>
  <div class="max-lg:row-span-1 max-lg:order-4 max-lg:text-center lg:col-start-2 lg:col-span-2 max-lg:col-span-6 "><a href="/contact" class="lg:text-8xl max-lg:text-6xl hover:text-white">Contact</a></div>
  <div class="max-lg:row-span-1 max-lg:order-2 max-lg:text-center lg:col-start-5 lg:col-span-2 lg:pt-7 max-lg:col-span-6  max-lg:pt-0">
    <button type="button" class="lg:text-8xl max-lg:text-6xl hover:text-white items-center gap-2 border-none" data-hs-overlay="#hs-gallery-modal">Art</button>
    <Gallery />
  </div>
  <div class="row-span-1  col-span-6 max-lg:collapse lg:visible"></div>
  <div id="about-section" class="max-lg:row-span-1 max-lg:order-1 max-lg:text-center  max-lg:content-center lg:col-start-4 lg:col-span-2 max-lg:col-span-6">
    <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 border-none" data-hs-overlay="#hs-about-modal">
      CHEX
   </button>
   <About />
  </div>
  <div class="row-span-1 col-span-6 max-lg:collapse lg:visible"></div>
  <div class="max-lg:row-span-1 max-lg:order-3 max-lg:text-center lg:col-start-3 lg:col-end-6 max-lg:col-span-6"><a href="/blog" class="lg:text-8xl max-lg:text-6xl hover:text-white">?Technology</a></div>
  <div class="row-span-1 col-span-6 ..."></div>
</div>
  
<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray-dark);
      color: theme(colors.gray);
    }
</style>