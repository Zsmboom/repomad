'use client';

import { DownloadHeader } from './download/DownloadHeader';
import { DownloadResources } from './download/DownloadResources';
import { ModListHeader } from './download/ModListHeader';
import { ModList } from './download/ModList';
import { useModData } from './download/useModData';

export default function Download() {
  const { modVersions, isLoading } = useModData();

  return (
    <section id="download" className="section bg-gray-800 text-white">
      <div className="container">
        <DownloadHeader />
        <DownloadResources />
        <ModListHeader />
        <ModList mods={modVersions} isLoading={isLoading} />
      </div>
    </section>
  );
} 