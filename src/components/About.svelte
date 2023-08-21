<script>
    import Icon from '@iconify/svelte';
    let now = new Date();
    let year = now.getFullYear();
</script>

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
                        <div class="col-span-1 dirty-white-icon"><a href ="https://storage.fleek-internal.com/chexware-team-bucket/art-resume.pdf" class="hover:cursor-meta"><Icon icon="tabler:file-cv" /></a></div>
                    </div>
                </div>
                
            </div>
            <div class="flex justify-center text-white-dirty text-sm mt-10 mb-8">
                Created by Aleksandar Brayanov {year}
            </div>
        </div>
    </div>
</div>

