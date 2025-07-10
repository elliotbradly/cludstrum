// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

var timePivot = {
    label: 'Time',
    badge: 'Pivot',
    items: [
        { label: 'Features', link: '/apis/time/000time' },
        { label: 'Time',  autogenerate: { directory: '/apis/time/timeUnit' }, badge: 'Unit'  },
        { label: 'Clock',  autogenerate: { directory: '/apis/time/clockUnit' }, badge: 'Unit'  }
]
}

var pixelPivot = {
    label: 'Pixel',
    badge: 'Pivot',
    items: [
        { label: 'Features', link: '/apis/pixel/000pixel' },
        { label: 'Pixel',  autogenerate: { directory: '/apis/pixel/pixelUnit' }, badge: 'Unit'  },
        { label: 'Color',  autogenerate: { directory: '/apis/pixel/colorUnit' }, badge: 'Unit'  }
]
}

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Library',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/elliotbradly' }],
            sidebar: [
                {
                    label: 'APIs',
                    items: [
                        timePivot,
                        pixelPivot
                    ],
                },

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