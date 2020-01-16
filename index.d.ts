declare module "react-native-device-detection" {
    interface DetectDeviceService {
        pixelDensity: number;
        width: number;
        height: number;
        isIos: boolean;
        isAndroid: boolean;
        isPhone: boolean;
        isTablet: boolean;
        isIphoneX: boolean;

        isPhoneOrTablet(): void;
        isIosOrAndroid(): void;
        detectIphoneX(): void;
    }

    const Device: DetectDeviceService;

    export default Device;
}