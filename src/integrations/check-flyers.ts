import {type AstroIntegration} from 'astro';
import {readdir} from 'node:fs/promises';
import muhammara from 'muhammara';


export default function checkFlyers(): AstroIntegration {
  return {
    name: 'check-flyers', hooks: {
      'astro:build:done': async ({dir, pages, logger}): Promise<void> => {
        const pdfsPath = './dist/pdfs';
        const pdfsFileNames = await readdir(pdfsPath);

        pdfsFileNames.forEach((fileName) => {
          const pdfReader = muhammara.createReader(`${pdfsPath}/${fileName}`);
          logger.info(`${fileName}: ${pdfReader.getPagesCount()} pages`);
        });
      },
    },
  };
}
