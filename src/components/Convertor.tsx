import { Supadata } from '@supadata/js';
import { useState } from 'react';
import ConvertForm from './ConvertForm';

// import type {
//   Crawl,
//   CrawlJob,
//   JobResult,
//   Map,
//   Scrape,
//   Transcript,
//   TranscriptOrJobId,
//   YoutubeChannel,
//   YoutubePlaylist,
//   YoutubeVideo,
//   YoutubeVideoOrJobId,
// } from '@supadata/js';

export default function Convertor() {
  const [formResult, setFormResult] = useState({});
  console.log(formResult);

  // Initialize the client
  const supadata = new Supadata({
    apiKey: 'sd_dc0185a1824a363c10a2761b6d93f5e0',
  });

  return (
    <div>
      <div>
        <ConvertForm setFormResult={setFormResult} />
      </div>
    </div>
  );
}
