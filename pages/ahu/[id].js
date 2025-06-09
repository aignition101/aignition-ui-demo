
// [id].js

import { ahuOverviewData } from './overview';

export function getAHUDetailById(id) {
  return ahuOverviewData.find(ahu => ahu.id === id);
}
