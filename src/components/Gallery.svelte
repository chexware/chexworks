<script lang="ts">
    import Icon from '@iconify/svelte';
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';

    let carousel; // for calling methods of the carousel instance

    let projects = [["VJ", "https://vimeo.com/showcase/6789339", "https://storage.fleek-internal.com/chexware-team-bucket/projects-covers/vj-cover.jpg"],["OTOMATT", "https://vimeo.com/showcase/5857893", "https://storage.fleek-internal.com/chexware-team-bucket/projects-covers/otomatt-cover.jpg"]];
    
    const handleNextClick = () => {
        carousel.goToNext()
    }
    const handlePreviousClick = () => {
        carousel.goToPrev()
    }
</script>

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