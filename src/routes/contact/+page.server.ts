import type { Actions } from '@sveltejs/kit';
//import { Mailchain } from '@mailchain/sdk';

export const actions: Actions = {
    default: async ({ request }) => {
        console.log(await request.formData());
    }
}