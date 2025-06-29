const { Image } = require('@gluestack-ui/themed');
import { horizontalScale, verticalScale } from '../helpers/ScaleHelper';




export const HeartsBG = () => {
    return (
        <Image alt="bg-hearts" w={horizontalScale(264)} h={verticalScale(90)}
            source={require('../assets/icons/bg-hearts.png')} />
    );
};

export const PinayPalLogoAndTextWhite = () => {
    return (
        <Image alt="PinaypalIconText-white" w={horizontalScale(264)} h={verticalScale(264)}
            source={require('../assets/icons/pp-logo-white.png')} />
    );
};

export const PinayPalLogoWhite = () => {
    return (
        <Image alt="PinaypalIcon-white" w={horizontalScale(264)} h={verticalScale(264)}
            source={require('../assets/icons/pp-logo-white-2.png')} />
    );
};

export const PinayPalIconWhite = () => {
    return (
        <Image alt="PinaypalIcon-white" w={horizontalScale(50)} h={verticalScale(50)}
            source={require('../assets/icons/pp-logo-white-2.png')} />
    );
};

export const PinayPalLogoAndTextPink = () => {
    return (
        <Image alt="PinaypalIconText-pink" w={horizontalScale(264)} h={verticalScale(264)}
            source={require('../assets/icons/pp-logo.png')} />
    );
};

export const PinayPalLogoPink = () => {
    return (
        <Image alt="PinaypalIcon-pink" w={horizontalScale(264)} h={verticalScale(264)}
            source={require('../assets/icons/pp-logo-2.png')} />
    );
};

export function WelcomePalImg() {
    return (
        <Image alt="PalIcon-guy" w={horizontalScale(210)} h={verticalScale(300)} resizeMode='stretch'
            source={require('../assets/icons/palguypic.png')} />
    );
}

export const WelcomePinayImg = () => {
    return (
        <Image alt="PalIcon-girl" w={horizontalScale(235)} h={verticalScale(300)}
            source={require('../assets/icons/palgirlpic.png')} />
    );
};

export const PinayPalPic = () => {
    return (
        <Image alt="PinayPalIcon" w={horizontalScale(500)} h={verticalScale(350)}
            source={require('../assets/icons/pinaypalpic.png')} />
    );
};

export function PalLogoutPic() {
    return (
        <Image alt="PalLogout-Pic" w={horizontalScale(210)} h={verticalScale(300)} resizeMode='contain'
            source={require('../assets/icons/pallogoutpic.png')} />
    );
}

export function PinayLogoutPic() {
    return (
        <Image alt="PinayLogout-Pic" w={horizontalScale(210)} h={verticalScale(300)} resizeMode='contain'
            source={require('../assets/icons/pinaylogoutpic.png')} />
    );
}

export function SubsMax() {
    return (
        <Image alt="Pp-Sub-Max" w={horizontalScale(350)} h={verticalScale(150)} resizeMode='contain'
            source={require('../assets/icons/pp-sub-max.png')} />
    );
}

export function SubsPlus() {
    return (
        <Image alt="Pp-Sub-Plus" w={horizontalScale(350)} h={verticalScale(150)} resizeMode='contain'
            source={require('../assets/icons/pp-sub-plus.png')} />
    );
}
export function SubsUnlimited() {
    return (
        <Image alt="Pp-Sub-Unli" w={horizontalScale(350)} h={verticalScale(150)} resizeMode='contain'
            source={require('../assets/icons/pp-sub-unli.png')} />
    );
}


export function FreeSub() {
    return (
        <Image alt="Pp-Free-Sub" w={horizontalScale(350)} h={verticalScale(150)} resizeMode='contain'
            source={require('../assets/icons/free-sub.png')} />
    );
}

export function Wallet01() {
    return (
        <Image alt="Wallet-01" w={horizontalScale(300)} h={verticalScale(300)} resizeMode='contain'
            source={require('../assets/icons/wallet-01.png')} />
    );
}

export function NoSub() {
    return (
        <Image alt="No-Sub" w={horizontalScale(300)} h={verticalScale(300)} resizeMode='contain'
            source={require('../assets/icons/uhoh-nosub.png')} />
    );
}

export function CancelSub() {
    return (
        <Image alt="Cancel-Sub" w={horizontalScale(300)} h={verticalScale(300)} resizeMode='contain'
            source={require('../assets/icons/cancelsub.png')} />
    );
}

export function CancelledSub() {
    return (
        <Image alt="Cancelled-Sub" w={horizontalScale(300)} h={verticalScale(300)} resizeMode='contain'
            source={require('../assets/icons/cancelledsub.png')} />
    );
}

export function CCredit() {
    return (
        <Image alt="CC-Pic" w={horizontalScale(75)} h={verticalScale(75)} resizeMode='contain'
            source={require('../assets/icons/cc.png')} />
    );

}

export function GooglePlay() {
    return (
        <Image alt="GooglePlay-Pic" w={horizontalScale(75)} h={verticalScale(75)} resizeMode='contain'
            source={require('../assets/icons/googlelogo1.png')} />
    );
}

export function ApplePay() {
    return (
        <Image alignContent='center' alt="ApplePay-Pic" w={horizontalScale(70)} h={verticalScale(55)} resizeMode='contain'
            source={require('../assets/icons/applelogo1.png')} />
    );
}


export function CloseBtn() {
    return (
        <Image alt="CloseBtn-Pic" w={horizontalScale(75)} h={verticalScale(75)} resizeMode='contain'
            source={require('../assets/icons/closebtn.png')} />
    );
}

export function PinayPalMax() {
    return (
        <Image alt="Pp-Max-Pic" w={horizontalScale(300)} h={verticalScale(200)} resizeMode='contain'
            source={require('../assets/icons/pinaypalmax.png')} />
    );
}

export function PinayPalPlus() {
    return (
        <Image alt="Pp-Plus-Pic" w={horizontalScale(300)} h={verticalScale(200)} resizeMode='contain'
            source={require('../assets/icons/pinaypalplus.png')} />
    );
}

export function PinayPalUnli() {
    return (
        <Image alt="Pp-Unli-Pic" w={horizontalScale(300)} h={verticalScale(200)} resizeMode='contain'
            source={require('../assets/icons/pinaypalunli.png')} />
    );
}

export const PinayPalMessageNewPic = () => {
    return (
        <Image alt="PalIcon-girl" w={"100%"} h={"100%"} resizeMode='stretch'
            source={require('../assets/icons/no_friends.png')} />
    );
};

export const LocationBadge = () => {
    return (
        <Image alt="Location-Badge" w={verticalScale(15)} h={horizontalScale(15)} resizeMode='contain'
            source={require('../assets/icons/locationbadge.png')} />
    );
};

export const HeartIcon = () => {
    return (
        <Image alt="Heart-Icon" h={"100%"} w={"100%"} resizeMode='contain'
            source={require('../assets/icons/hearticon.png')} />
    );
};

export const SkipIcon = () => {
    return (
        <Image alt="Skip-Icon" w={"100%"} h={"100%"} resizeMode='contain'
            source={require('../assets/icons/skipicon.png')} />
    );
};



export const UnliLikes = () => {
    return (
        <Image alt="UnliLikes-Icon" w={"100%"} h={"100%"} resizeMode='contain'
            source={require('../assets/icons/unlilikes.png')} />
    );
};

export const MsgMatch = () => {
    return (
        <Image alt="MsgMatch-Icon" w={"100%"} h={"100%"} resizeMode='contain'
            source={require('../assets/icons/msgmatch.png')} />
    );
};

export const SeeLikes = () => {
    return (
        <Image alt="SeeLikes-Icon" w={"100%"} h={"100%"} resizeMode='contain'
            source={require('../assets/icons/seelikes.png')} />
    );
};

export const HideAds = () => {
    return (
        <Image alt="HideAds-Icon" w={"100%"} h={"100%"} resizeMode='Stretch'
            source={require('../assets/icons/hideds.png')} />
    );
};

export const DoneAdd = () => {
    return (
        <Image alt="DoneAdd-Icon" w={"100%"} h={"100%"} resizeMode='contain'
            source={require('../assets/icons/doneadd.png')} />
    );
};

export const PlusPicBtn = () => {
    return (
        <Image alt="PlusPicBtn-Icon" w={"100%"} h={"100%"} resizeMode='Stretch'
            source={require('../assets/icons/plusbtn.png')} />
    );
};

export const MaxPicBtn = () => {
    return (
        <Image alt="MaxPicBtn-Icon" w={"100%"} h={"100%"} resizeMode='Stretch'
            source={require('../assets/icons/maxbtn.png')} />
    );
};

export const UnliBtnPic = () => {
    return (
        <Image alt="UnliBtnPic-Icon" w={"100%"} h={"100%"} resizeMode='Stretch'
            source={require('../assets/icons/unlibtn.png')} />
    );
};

export const PhoneIcon = () => {
    return (
        <Image alt="PhoneIcon-Icon" w={"100%"} h={"100%"} resizeMode='Stretch'
            source={require('../assets/icons/phoneicon.png')} />
    );
};

export const CheckAnim = () => {
    return (
        <Image alt="check-anim" width={200} height={200} resizeMode='center'
            source={require('../assets/icons/check.png')} />
    );
};

export const RecoveryPic = () => {
    return (
        <Image alt="Recovery-Pic" width={200} height={200} resizeMode='contain'
            source={require('../assets/icons/recovery.png')} />
    );
};

export const Radar = () => {
    return (
        <Image alt="Radar-Pic" width={400} height={400} resizeMode='contain' 
            source={require('../assets/test-image/radar.png')} />
    );
};

export const RefreshBtn = () => {
    return (
        <Image alt="RefreshBtn-Pic" width={80} height={80} resizeMode='contain'
            source={require('../assets/test-image/refresh-btn.png')} />
    );
};

export const No_Picture_Avatar = () => {
    return (
        <Image alt="No_Picture_Avatar" width={80} height={80} resizeMode='contain'
            source={require('../assets/test-image/no_picture_avatar.png')} />
    );
};
















