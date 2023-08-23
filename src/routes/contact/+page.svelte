<script lang="ts">
    import Menu from "$lib/Menu.svelte";
    import { PUBLIC_WEB3_FORMS_ACCESS_KEY } from '$env/static/public';
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
            <div class="row-span-1 mx-5 mb-3 hover:text-white "><a href="/blog" >?Technology</a></div>
        </div>
    </div>
</div>

<div class="w-full h-full bg-gray-dark">
    <form method="post">
        <div class="content-center  bg-gray-dark">
            <h1 class="lg:text-8xl max-lg:text-6xl text-center text-white-dirty"> Contact </h1>
            <form method="POST" class="px-20 mx-20 h-full">
                <input type="hidden" name="access_key" value="{PUBLIC_WEB3_FORMS_ACCESS_KEY}">
                <input type="hidden" name="from_name" value="CHEXWorks">
                <input type="hidden" name="subject" value="Art Portfolio Contact Form Submission">
                <div class="my-2">
                    <label>
                        <span class="text-white-dirty text-sm">Name</span>
                        <input name="name" type="name" class="w-full block bg-gray-dirty py-2 ring-1 ring-gray focus:ring-white text-white-dirty text-sm" required />
                    </label>
                </div>
                <div class="my-2">
                    <label>
                        <span class="text-white-dirty text-sm">Email</span> 
                        <input name="email" type="email"class=" w-full bg-gray-dirty py-2 ring-1 ring-gray focus:ring-white text-white-dirty text-sm" required />
                    </label>
                </div>
                <div class="my-2">
                    <label>
                        <span class="text-white-dirty text-sm">Message</span>
                        <textarea name="message" class="px-1 w-full bg-gray-dirty ring-1 ring-gray focus:ring-white text-white-dirty placeholder-white-dirty text-sm" rows="7" placeholder="Send me a message..." required ></textarea>
                    </label>
                </div>
                <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
                <input type="hidden" name="redirect" value="https://web3forms.com/success">
                <input type="submit" class="w-full bg-green hover:bg-green-light text-white-dirty text-sm py-4 my-2" value="SEND MESSAGE">
            </form>
        </div>
    </form>
</div>

<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray-dark);
      color: theme(colors.gray);
    }
</style>