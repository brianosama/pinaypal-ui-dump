import * as Notifications from 'expo-notifications';

export const SetNotificationPermission = async() => {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    console.log("status: " + existingStatus);

    if(existingStatus !== "granted"){
        const { status } = await Notifications.requestPermissionsAsync();
        console.log("status: " + status);
    }
}