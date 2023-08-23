<script lang="ts">
    import Menu from "$lib/Menu.svelte";
    import { PUBLIC_WEB3_FORMS_ACCESS_KEY } from '$env/static/public';
</script>

<div>
    <button type="button" class="border-none text-sm text-white-dirty m-5" data-hs-overlay="#hs-overlay-menu"> 
        MENU
    </button>
    <Menu page="contact" />
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