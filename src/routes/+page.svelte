<script lang="ts"> 
 import About from "../components/About.svelte";
 import Gallery from "../components/Gallery.svelte";

 let video_cover_url="https://res.cloudinary.com/dyvcgyxhg/video/upload/f_auto:video,q_auto/v1/chexware/cover-video";
 let photo_cover_url="https://storage.fleek-internal.com/chexware-team-bucket/image-cover.png";

 let showDedgy = () => {
        if (window.matchMedia("(min-width: 640px)").matches){
          let cursorImage = document.getElementById("chex-cursor");
          if (cursorImage != null) {
            cursorImage.style.display = "inline";
          }
        }
}

let moveDedgy = (e: MouseEvent)  =>{
    if (window.matchMedia("(min-width: 640px)").matches){
        console.log("c move");
        let cursorImage = document.getElementById("chex-cursor");
        if (cursorImage != null) {
          let positionTop = e.clientY - 130;
          let positionLeft = e.clientX - 130;
          cursorImage.style.top = positionTop + "px"; 
          cursorImage.style.left = positionLeft + "px";
        }
    }
}
    
let hideDedgy = () => {
      if (window.matchMedia("(min-width: 640px)").matches){
          let cursorImage = document.getElementById("chex-cursor");
          if (cursorImage != null) {
            cursorImage.style.display = "none";
          }
      }
  } 

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
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img class="absolute h-full w-full object-cover -z-10 max-lg:visible lg:hidden" src="{photo_cover_url}" alt="cover-image"/>
  <div class="grid grid-cols-6 grid-rows-6 gap-0 w-full h-full content-center dedgy max-lg:pt-10" >
    <div class="row-span-1 col-span-6 max-lg:hidden lg:visible"></div>
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div class="dedgy max-lg:row-span-1 max-lg:order-4 max-lg:text-center lg:col-start-2 lg:col-span-2 max-lg:col-span-6" role="presentation">
      <a href="/contact" class="lg:text-8xl max-lg:text-6xl hover:text-white hover:cursor-meta" on:mouseover={showDedgy} on:mouseout={hideDedgy} on:mousemove={moveDedgy} >Contact</a>
    </div>
     <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div  class="max-lg:row-span-1 max-lg:order-2 max-lg:text-center lg:col-start-5 lg:col-span-2 lg:pt-7 max-lg:col-span-6  max-lg:pt-0" on:mouseover={showDedgy} on:mouseout={hideDedgy} on:mousemove={moveDedgy} role="presentation">
      <button type="button" class="lg:text-8xl max-lg:text-6xl hover:text-white items-center gap-2 border-none hover:cursor-meta" data-hs-overlay="#hs-gallery-modal">Art</button>
      <Gallery />
    </div>
    <div class="row-span-1  col-span-6 max-lg:hidden lg:visible"></div>
     <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div id="about-section" class="max-lg:row-span-1 max-lg:order-1 max-lg:content-center col-start-3 col-span-2 justify-self-center" on:mouseover={showDedgy} on:mouseout={hideDedgy} on:mousemove={moveDedgy} role="presentation">
      <button type="button" class="flex items-end gap-2 border-none hover:cursor-meta" data-hs-overlay="#hs-about-modal">
        <img class="max-lg:scale-75 hover:animate-bounce" src="/logos/chex-logo-medium.png" alt="main-logo-medium">
      </button>
      <About />
    </div>
    <div class="row-span-1 col-span-6 max-lg:hidden lg:visible"></div>
     <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div class="max-lg:row-span-1 max-lg:order-3 max-lg:text-center lg:col-start-3 lg:col-end-6 max-lg:col-span-6" role="presentation">
      <a href="/blog" class="lg:text-8xl max-lg:text-6xl hover:text-white hover:cursor-meta" on:mouseover={showDedgy} on:mouseout={hideDedgy} on:mousemove={moveDedgy}>?Technology</a>
    </div>
    <img id="chex-cursor" class="hidden absolute z-[100] h-[130px] w-[130px]" src="/cursor/chex-cursor-dedgy.gif" alt="chex-cursor"/>
  </div>
</div>
  
<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray-dark);
      color: theme(colors.gray);
    }
</style>