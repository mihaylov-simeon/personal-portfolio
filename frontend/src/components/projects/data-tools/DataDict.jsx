import { DataDictOverview, DataDictArchitecture, DataDictCategories, DataDictDecisions } from './DataDict/index';

export const DataDict = () => {
  return (
    <section>
      <DataDictOverview />
      <DataDictArchitecture />
      <DataDictCategories />
      <DataDictDecisions />
    </section>
  );
};
