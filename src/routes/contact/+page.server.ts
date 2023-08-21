export const prerender = false;
import type { Actions } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
//import { WEB3_FORMS_ACCESS_KEY } from '$env/static/private';

export const actions: Actions = { 
    default: async({request}) => {
        let formData = await request.formData();
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        });
        const result = await response.json();
        if (result.success) {
            console.log("Form Submission Success");
            throw redirect(307, 'https://web3forms.com/success');
        }
        else {
            console.log("Failed Form Submission");
        }
    }
}
