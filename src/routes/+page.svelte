<script> 
 import About from "../widgets/About.svelte";
 import Gallery from "../widgets/Gallery.svelte";

 let video_cover_url="https://res.cloudinary.com/dyvcgyxhg/video/upload/f_auto:video,q_auto/v1/chexware/cover-video";
 let photo_cover_url="https://res.cloudinary.com/dyvcgyxhg/image/upload/f_auto,q_auto/v1/chexware/cover-image";
</script>

<div>
  <video
    class="absolute h-full w-full object-cover -z-10 max-lg:hidden lg:visible"
    muted
    autoplay
    playsinline
    disablepictureinpicture
  >
    <source src="{video_cover_url}" type="video/mp4"/>
  </video>
  <img class="absolute h-full w-full object-cover -z-10 max-lg:visible lg:hidden" src="{photo_cover_url}" alt="cover-image"/>
  <div class="grid grid-cols-6 grid-rows-6 gap-0 w-full h-full content-center cursor-dedgy max-lg:pt-10" >
    <div class="row-span-1 col-span-6 max-lg:hidden lg:visible"></div>
    <div class="max-lg:row-span-1 max-lg:order-4 max-lg:text-center lg:col-start-2 lg:col-span-2 max-lg:col-span-6 "><a href="/contact" class="lg:text-8xl max-lg:text-6xl hover:text-white">Contact</a></div>
    <div class="max-lg:row-span-1 max-lg:order-2 max-lg:text-center lg:col-start-5 lg:col-span-2 lg:pt-7 max-lg:col-span-6  max-lg:pt-0">
      <button type="button" class="lg:text-8xl max-lg:text-6xl hover:text-white items-center gap-2 border-none" data-hs-overlay="#hs-gallery-modal">Art</button>
      <Gallery />
    </div>
    <div class="row-span-1  col-span-6 max-lg:hidden lg:visible"></div>
    <div id="about-section" class="max-lg:pr-20 max-lg:row-span-1 max-lg:order-1 max-lg:content-center lg:col-start-4 lg:col-span-2 max-lg:col-span-6 max-lg:pl-20">
      <div class="max-lg:pl-20">
          <div class="sm:max-lg:pl-20">
            <div class="md:max-lg:pl-20">
              <button type="button" class="flex items-end gap-2 border-none" data-hs-overlay="#hs-about-modal">
                <img class="max-lg:scale-75 hover:animate-bounce" src="/logos/chex-logo-medium.png" alt="main-logo-medium">
              </button>
              <About />
          </div>
        </div>
      </div>
    </div>
    <div class="row-span-1 col-span-6 max-lg:hidden lg:visible"></div>
    <div class="max-lg:row-span-1 max-lg:order-3 max-lg:text-center lg:col-start-3 lg:col-end-6 max-lg:col-span-6"><a href="/blog" class="lg:text-8xl max-lg:text-6xl hover:text-white">?Technology</a></div>
    <div class="row-span-1 col-span-6 max-lg:hidden lg:visible"></div>
  </div>
</div>
  
<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray-dark);
      color: theme(colors.gray);
    }
</style>