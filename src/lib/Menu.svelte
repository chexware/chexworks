<script lang="ts">
    export let page: String;
</script>

<div id="hs-overlay-menu" class="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 left-0 transition-all duration-300 transform h-full sm:max-w-xs max-w-full w-full z-[60]  border-none hidden bg-gray-dirty" tabindex="-1">
    
    <div class="grid grid-rows-2 grid-cols-1 text-4xl text-white-dirty mt-10 sm:place-items-left max-sm:place-items-center">
        <div class="row-span-1 mx-5 mb-3 "><a href="/" class="hover:cursor-meta">
            <img class="inline hover:animate-bounce hover:cursor-meta" src="/logos/chex-logo-menu-small.png" alt="menu-logo">
        </a></div>
        {#if page != "blog"}
            <div class="row-span-1 mx-5 mb-3 hover:text-white"><a href="/blog" class="hover:cursor-meta">?Technology</a></div>
        {/if}
        {#if page != "contact"}
            <div class="row-span-1 mx-5 mb-3 hover:text-white"><a href="/contact" class="hover:cursor-meta">Contact</a></div>
        {/if}
    </div>
</div>