import { StreamOverview } from './streaming-pipeline-sections/StreamOverview'
import { StreamArchitecture } from './streaming-pipeline-sections/StreamArchitecture';
import { StreamLayers } from './streaming-pipeline-sections/StreamLayers';
import { StreamAnalysis } from './streaming-pipeline-sections/StreamAnalysis';
import { StreamTakeaway } from './streaming-pipeline-sections/StreamTakeaway';


export const StreamPipeline = () => {
  return (
    <section className="streaming-pipeline" id="stream-p">
      <StreamOverview />
      <StreamArchitecture />
      <StreamLayers />
      <StreamAnalysis />
      <StreamTakeaway />
    </section>
  )
};
