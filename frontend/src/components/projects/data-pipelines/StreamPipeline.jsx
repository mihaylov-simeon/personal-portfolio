import "./JPMPipeline.css";
import "./StreamPipeline.css";
import { StreamOverview } from './streaming-pipeline-sections/StreamOverview'
import { StreamArchitecture } from './streaming-pipeline-sections/StreamArchitecture';
import { StreamLayers } from './streaming-pipeline-sections/StreamLayers';
import { StreamAnalysis } from './streaming-pipeline-sections/StreamAnalysis';
import { StreamTakeaway } from './streaming-pipeline-sections/StreamTakeaway';

export const StreamPipeline = () => {
  return (
    <section>
      <StreamOverview />
      <StreamArchitecture />
      <StreamLayers />
      <StreamAnalysis />
      <StreamTakeaway />
    </section>
  );
};
