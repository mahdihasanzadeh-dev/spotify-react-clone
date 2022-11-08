import { Language } from '@common/common-enum';
import { SEO } from '@components/seo/seo';
import type { ReactElement } from 'react';

export function AroundYou(): ReactElement {
  return (
    <>
      <SEO
        pageTitle="SpotifyClone-AroundYou"
        description="spotify clone with react, typescript, tailwind"
        keywords={['spotify', 'clone', 'reactjs', 'typescript', 'tailwind']}
        language={Language.EN_US}
      />
      <h1 className="text-white font-bold text-3xl">CountryTracks</h1>
    </>

  );
}
