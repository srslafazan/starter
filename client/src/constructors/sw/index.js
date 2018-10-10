import * as log from 'loglevel'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import axios from '@/constructors/axios'
// import { getItem } from '@/constructors/localStorage'

log.info('SERVICE_WORKER_APPLICATION_SERVER_KEY: ', process.env.SERVICE_WORKER_APPLICATION_SERVER_KEY)

// TODO -- move to bootstrap
// import { DeviceUUID } from 'device-uuid'
// const deviceProperties = new DeviceUUID();
// const deviceUUID = deviceProperties.get();
// console.log(deviceProperties)
// console.log(deviceUUID)

function pushSubscriptionHasExpired(sub) {
  if (!sub) return true
  if (sub.expirationTime < Date.now()) return true
  return false
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/')
  ;
  const rawData = window.atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}

const registerAndSubScribe = async () => {
  const registration = await runtime.register()
  log.info('ServiceWorker runtime registration: ', registration);
  const subscribeOptions = {
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(process.env.SERVICE_WORKER_APPLICATION_SERVER_KEY),
  };

  let pushSubscription = await registration.pushManager.getSubscription();
  if (pushSubscriptionHasExpired(pushSubscription)) {
    pushSubscription = await registration.pushManager.subscribe(subscribeOptions)
  }

  // NOTE: Development unsubscribe
  window.pushNotificationUnsubscribe = pushSubscription.unsubscribe

  log.info('ServiceWorker PushSubscription: ', JSON.stringify(pushSubscription));
  const subscriptionResponse = await axios.post('/api/v1/push-subscriptions', {
    subscription: pushSubscription,
  })
  log.info('ServiceWorker subscriptionResponse: ', subscriptionResponse);
}

if ('serviceWorker' in navigator) {
  registerAndSubScribe()
}
