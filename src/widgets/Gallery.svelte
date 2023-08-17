<script>
    import Icon from '@iconify/svelte';
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';

    let carousel; // for calling methods of the carousel instance

    let headings = [1,2,3];
    
    const handleNextClick = () => {
        carousel.goToNext()
    }
    const handlePreviousClick = () => {
        carousel.goToPrev()
    }
</script>

<div id="hs-gallery-modal" class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
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
                        <div slot="prev" on:click={handlePreviousClick} class="custom-arrow custom-arrow-prev flex items-center">
                            <Icon icon="ooui:previous-ltr" />
                        </div>
                        {#each headings as heading}
                            <div class="max-h-full min-h-full h-[92.5vh] text-center bg-green"><a href="/">{heading}</a></div>
                        {/each}
                        <div slot="next" on:click={handleNextClick} class="custom-arrow custom-arrow-next flex items-center">
                            <Icon icon="ooui:next-ltr" />
                        </div>
                </Carousel>
                {/if}
            </div>
        </div>
    </div>
</div>