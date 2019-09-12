import { getSettledState, waitUntil } from '@ember/test-helpers';

export default function finishRender() {
  return waitUntil(() => {
    const { hasRunLoop, hasPendingRequests, hasPendingWaiters } = getSettledState();
    if (hasRunLoop || hasPendingRequests || hasPendingWaiters) {
      return false;
    }
    return true;
  });
}
