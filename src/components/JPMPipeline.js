import { Overview } from './jpm-pipeline-sections/Overview'
import { Architecture } from './jpm-pipeline-sections/Architecture';
import { SparkLogic } from './jpm-pipeline-sections/SparkLogic';
import { YoYLogic } from './jpm-pipeline-sections/YoYLogic';
import { Analysis } from './jpm-pipeline-sections/Analysis';
import { Takeaway } from './jpm-pipeline-sections/Takeaway';

export const JPMPipeline = () => {
  return (
    <section className="jpm_pipeline" id="jpm-p">
      <Overview />
      <Architecture />
      <SparkLogic />
      <YoYLogic />
      <Analysis />
      <Takeaway />
    </section>
  )
};
