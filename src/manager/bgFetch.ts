import BackgroundFetch from "react-native-background-fetch";
import { scheduleImmediateNotification } from "./notificationBuilder";

import { store } from '../redux/store';

const init = async () => {
    let status = await BackgroundFetch.configure({
        minimumFetchInterval: 15,      // <-- minutes (15 is minimum allowed)
        // Android options
        forceAlarmManager: true,      // <-- Set true to bypass JobScheduler.
        stopOnTerminate: false,
        enableHeadless: true,
        startOnBoot: true,
        requiredNetworkType: BackgroundFetch.NETWORK_TYPE_CELLULAR, // Default
        requiresCharging: false,       // Default
        requiresDeviceIdle: false,     // Default
        requiresBatteryNotLow: false,  // Default
        requiresStorageNotLow: false,  // Default
    }, async (taskId) => {  // <-- Event callback
        // This is the fetch-event callback.
        console.log("[BackgroundFetch] taskId: ", taskId);

        // Finish, providing received taskId.
        BackgroundFetch.finish(taskId);
    }, async (taskId) => {  // <-- Task timeout callback
        // This task has exceeded its allowed running-time.
        // You must stop what you're doing and immediately .finish(taskId)
        BackgroundFetch.finish(taskId);
        console.log('[BackgroundFetch] configure status: ', status);
    })
};


export let notificationHeadlessTask = async (event) => {
    // Get task id from event {}:
    let taskId = event.taskId;
    let isTimeout = event.timeout;  // <-- true when your background-time has expired.
    if (isTimeout) {
        // This task has exceeded its allowed running-time.
        // You must stop what you're doing immediately finish(taskId)
        console.log('[BackgroundFetch] Headless TIMEOUT:', taskId);
        BackgroundFetch.finish(taskId);
        return;
    }
    console.log('[BackgroundFetch HeadlessTask] start: ', taskId);

    // Perform an example HTTP request.
    // Important:  await asychronous tasks when using HeadlessJS.
    await handleWeatherNotification()
    // Required:  Signal to native code that your task is complete.
    // If you don't do this, your app could be terminated and/or assigned
    // battery-blame for consuming too much time in background.
    BackgroundFetch.finish(taskId);
}

const handleWeatherNotification = async () => {
    const d = new Date();
    if (d.getHours() === 6) {
        const unsubscribe = store.subscribe(() => true);
        const userLocation: { latitude: number, longitude: number } | null = await store.getState().userLocation
        unsubscribe();
        if (userLocation) {
            const query = `api.openweathermap.org/data/2.5/weather?lat=${userLocation.latitude}&lon=${userLocation.longitude}&units=metric&appid=fc2de7881cf571d45f100b1bedd2d6e9`
            fetch(query)
                .then(response => response.json())
                .then(result => buildNotification(result))
                .catch(error => console.log('error', error))
        }
    }
}

const buildNotification = (data) => {
 // TODO: get temp from data
    const title = 'WeatherApp'
    const body = 'Current Temperature ' // 
    scheduleImmediateNotification(title, body)
}