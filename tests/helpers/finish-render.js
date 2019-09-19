import { getSettledState, waitUntil } from '@ember/test-helpers';

export default function finishRender() {
  return waitUntil(() => {
    const {
      hasRunLoop,
      hasPendingRequests,
      hasPendingTimers,
      hasPendingWaiters,
    } = getSettledState();
    if (hasRunLoop
        || hasPendingRequests
        || hasPendingTimers
        || hasPendingWaiters) {
      return false;
    }
    return true;
  });
}
