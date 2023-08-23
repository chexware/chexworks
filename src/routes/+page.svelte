<script lang="ts"> 
 //import About from "$lib/About.svelte";
 //import Gallery from "$lib/Gallery.svelte";
 import Icon from '@iconify/svelte';
 import Carousel from 'svelte-carousel';
 import { browser } from '$app/environment';

 let now = new Date();
 let year = now.getFullYear();

 let video_cover_url="https://crimson-sheer-cat-143.mypinata.cloud/ipfs/QmWnHgNLXSzwxB6yd4pwRRoLbgdUaivnZR8ABajCUMmCYG";
 let photo_cover_url="https://crimson-sheer-cat-143.mypinata.cloud/ipfs/QmQARs3byAEUG36uyARTVKycVsNq6FkSoYL26Teain66Ec";

 let carousel; // for calling methods of the carousel instance

  let projects = [
    ["VJ", "https://vimeo.com/showcase/6789339", "https://crimson-sheer-cat-143.mypinata.cloud/ipfs/QmZbLppJCdvxXSb7cV46yjvKTnSFLtpbQc5cM2zpyQnKHq"],
    ["OTOMATT", "https://vimeo.com/showcase/5857893", "https://crimson-sheer-cat-143.mypinata.cloud/ipfs/QmNbPXdUbEtDJH9hRpcLW4LAep6PoTp68Q7awpB63kNQVC"]
  ];
  
  const handleNextClick = () => {
      carousel.goToNext()
  }
  const handlePreviousClick = () => {
      carousel.goToPrev()
  }

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
      <div id="hs-gallery-modal"  class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
        <div class="hs-overlay-open:opacity-100 hs-overlay-open:mx-0 hs-overlay-open:duration-500 opacity-0 mx-10 transition-all max-w-full w-full min-h-full">
            <div class="flex flex-col bg-black border-none dark:bg-black">
                <div class="flex justify-end items-center border-none">
                    <button type="button" class="hs-dropdown-toggle flex justify-center items-center h-8 w-8 outline-none offset-none outline-offset-0 transition-all text-sm" data-hs-overlay="#hs-gallery-modal">
                        <span class="sr-only">Close</span>
                        <div class="dirty-white-icon">
                            <Icon icon="ph:x" />
                        </div>
                    </button>
                </div>
                <div class="place-items-center w-full max-w-full h-max max-h-max mb-7">
                    {#if browser}
                        <Carousel
                            bind:this={carousel}
                            dots={false}
                            let:handleNextClick
                            let:handlePreviousClick
                        >
                            <div slot="prev" role="presentation" on:click={handlePreviousClick} on:keydown={handlePreviousClick} class="custom-arrow custom-arrow-prev flex items-center dirty-white-icon">
                                <Icon icon="ooui:previous-ltr" />
                            </div>
                            {#each projects as project}
                                <div class="lg:max-h-full lg:h-[92.5vh] md:h-[91.25vh] max-md:h-[90vh] text-center bg-cover grid grid-rows-5" style="background-image: url({project[2]});">
                                    <div class="row-start-3 mt-3 hover:backdrop-blur-sm">
                                        <a class="text-dirty-white hover:text-white text-8xl hover:cursor-meta" href="{project[1]}">{project[0]}</a>
                                    </div>
                                </div>
                            {/each}
                            <div slot="next" role="presentation" on:click={handleNextClick} on:keydown={handlePreviousClick} class="custom-arrow custom-arrow-next flex items-center dirty-white-icon">
                                <Icon icon="ooui:next-ltr" />
                            </div>
                        </Carousel>
                    {/if}
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="row-span-1  col-span-6 max-lg:hidden lg:visible"></div>
     <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div id="about-section" class="max-lg:row-span-1 max-lg:order-1 max-lg:content-center col-start-3 col-span-2 justify-self-center" on:mouseover={showDedgy} on:mouseout={hideDedgy} on:mousemove={moveDedgy} role="presentation">
      <button type="button" class="flex items-end gap-2 border-none hover:cursor-meta" data-hs-overlay="#hs-about-modal">
        <img class="max-lg:scale-75 hover:animate-bounce" src="/logos/chex-logo-medium.png" alt="main-logo-medium">
      </button>
      <div id="hs-about-modal" class="hs-overlay hidden w-full h-full fixed mt-20 top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto backdrop-blur-sm">
        <div class="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-sm sm:w-full m-20 sm:mx-auto">
            <div class="flex flex-col bg-gray-dark border-none shadow-sm dark:bg-gray-dark dark:shadow-gray-dark/[.7] p-2">
                <div class="flex justify-end items-center border-none bg">
                    <button type="button" class="hs-dropdown-toggle flex justify-center items-center h-8 w-8 outline-none offset-none outline-offset-0 transition-all text-sm" data-hs-overlay="#hs-about-modal">
                        <span class="sr-only">Close</span>
                        <div class="dirty-white-icon">
                            <Icon icon="ph:x" />
                        </div>
                    </button>
                </div>
                <div class="overflow-y-auto">
                    <h3 class="lg:text-6xl max-lg:text-4xl text-center text-white-dirty"> About </h3>
                    <div class="text-sm text-center text-white-dirty mt-10">
                        <p>
                            In my creative practice, I use recorded footage,
                        </p>
                        <p>
                            computer-generated imagery, virtual environments,    
                        </p>
                        <p>
                            and scripts that I write. Through this,
                        </p>
                        <p>
                        I explore the limitations of technology
                        </p>
                        <p>
                            and reflect on our relationship with it.
                        </p>
                        <div class="grid grid-cols-12 text-xl mt-10 text-white-dirty">
                            <div class="col-span-1 col-start-5 dirty-white-icon"><a href ="https://vimeo.com/chexvisual" class="hover:cursor-meta"><Icon icon="mdi:vimeo" /></a></div>
                            <div class="col-span-1 dirty-white-icon"><a href ="https://github.com/chexware" class="hover:cursor-meta"><Icon icon="mdi:github" /></a></div>
                            <div class="col-span-1 dirty-white-icon"><a href ="https://instagram.com/chexvisual" class="hover:cursor-meta"><Icon icon="mdi:instagram" /></a></div>
                            <div class="col-span-1 dirty-white-icon"><a href ="https://crimson-sheer-cat-143.mypinata.cloud/ipfs/QmUaSFsgP8aewamJqfwmzsxV3u2ctGyVddwoi9AHae2TWQ" class="hover:cursor-meta"><Icon icon="tabler:file-cv" /></a></div>
                        </div>
                    </div>
                    
                </div>
                <div class="flex justify-center text-white-dirty text-sm mt-10 mb-8">
                    Created by Aleksandar Brayanov {year}
                </div>
            </div>
        </div>
    </div>
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