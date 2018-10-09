declare module "react-native-device-detection" {
    class DetectDeviceService {
        pixelDensity: boolean;
        width: number;
        height: number;
        isIos: boolean;
        isAndroid: boolean;
        isPhone: boolean;
        isTablet: boolean;
        isIphoneXstatic: boolean;

        isPhoneOrTablet(): void;

        isIosOrAndroid(): void;

        detectIphoneX(): void;
    }

    const Device = new DetectDeviceService();

    export default Device;
}
