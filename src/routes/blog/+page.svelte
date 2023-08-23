<script>
    //import Menu from "$lib/Menu.svelte";
</script>

<div>
    <button type="button" class="border-none text-sm text-white-dirty m-5" data-hs-overlay="#hs-overlay-menu"> 
        MENU
    </button>
    <div id="hs-overlay-menu" class="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 left-0 transition-all duration-300 transform h-full sm:max-w-xs max-w-full w-full z-[60]  border-none hidden bg-gray-dirty" tabindex="-1">
        <div class="grid grid-rows-2 grid-cols-1 text-4xl text-white-dirty mt-10 sm:place-items-left max-sm:place-items-center">
            <div class="row-span-1 mx-5 mb-3 "><a href="/">
                <img class="inline hover:animate-bounce" src="/logos/chex-logo-menu-small.png" alt="menu-logo">
            </a></div>
            <div class="row-span-1 mx-5 mb-3 hover:text-white "><a href="/contact" >Contact</a></div>
        </div>
    </div>
</div>

<div class="w-full h-full content-center py-20">
    <div class="my-20 py-20">
        <h1 class="text-8xl text-center py-10"> Embrace the digital void while waiting for content:() </h1>
    </div>
</div>
