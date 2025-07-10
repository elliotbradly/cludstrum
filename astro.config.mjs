// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Research',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
            sidebar: [

                {
                    label: 'Base',
                    autogenerate: { directory: 'base' },
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
            ],
        }),
    ],

    adapter: cloudflare({
        platformProxy: {
            enabled: true
        },


        imageService: "cloudflare"
    }),
});