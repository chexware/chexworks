export const prerender = false;
import type { Actions } from '@sveltejs/kit';
//import { Mailchain } from '@mailchain/sdk';

export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const name = data.get('name');
        const email = data.get('email');
        const messageText = data.get('message');
        
        console.log(data);
    }
}