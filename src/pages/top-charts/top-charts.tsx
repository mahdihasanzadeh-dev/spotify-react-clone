import { Language } from '@common/common-enum';
import { SEO } from '@components/seo/seo';
import type { ReactElement } from 'react';

export function TopCharts(): ReactElement {
  return (
    <>
      <SEO
        pageTitle="SpotifyClone-TopCharts"
        description="spotify clone with react, typescript, tailwind"
        keywords={['spotify', 'clone', 'reactjs', 'typescript', 'tailwind']}
        language={Language.EN_US}
      />
      <h1 className="text-white font-bold text-3xl">TopCharts</h1>
    </>
  );
}
