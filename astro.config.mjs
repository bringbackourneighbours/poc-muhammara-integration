// @ts-check
import { defineConfig } from 'astro/config';
import checkFlyers from "./src/integrations/check-flyers";

// https://astro.build/config
export default defineConfig({
    integrations:[
        checkFlyers()
    ]
});
