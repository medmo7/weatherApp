import PushNotification from 'react-native-push-notification';


export function initPushNotification() {
    const config = {
        onRegister: function (token) {
        },

        onNotification: function (notification) {
       
        },

        permissions: {
            alert: true,
            badge: true,
            sound: true,
        },

        popInitialNotification: true,

        requestPermissions: false,
    };

    PushNotification.configure(config)
}

export function scheduleImmediateNotification(title , body) {
    try {
        PushNotification.localNotification({
            title: title,
            message: body,
            playSound: true,
            largeIcon: '',
            smallIcon: 'app_icon',
        })
    } catch (error) {
        console.log('error',error)
    }
}
