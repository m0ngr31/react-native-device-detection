import React, {
  PixelRatio,
  Platform,
  Dimensions
} from 'react-native';

const windowSize = Dimensions.get('window');

class DetectDeviceService {
  constructor() {
    this.pixelDensity = PixelRatio.get();
    this.width = windowSize.width;
    this.height = windowSize.height;
    this.adjustedWidth = this.width * this.pixelDensity;
    this.adjustedHeight = this.height * this.pixelDensity;
    
    this.isPhoneOrTablet();
    this.isIosOrAndroid();
    this.detectIphoneX();
  }
  
  isPhoneOrTablet() {
    if(this.pixelDensity < 2 && (this.adjustedWidth >= 1000 || this.adjustedHeight >= 1000)) {
      this.isTablet = true;
      this.isPhone = false;
    } else if(this.pixelDensity === 2 && (this.adjustedWidth >= 1824 || this.adjustedHeight >= 1824)) {
      this.isTablet = true;
      this.isPhone = false;
    } else {
      this.isTablet = false;
      this.isPhone = true;
    }
  }
  
  isIosOrAndroid() {
    if(Platform.OS === 'ios') {
      this.isIos = true;
      this.isAndroid = false;
    } else {
      this.isIos = false;
      this.isAndroid = true;
    }
  }

  detectIphoneX(){
	 if( Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTVOS &&
      (
        (windowSize.height === 812 || windowSize.width === 812) || // iPhone X and iPhone XS
        (windowSize.height === 896 || windowSize.width === 896) // iPhone XS Max and XR
      )) {
	 	this.isIphoneX = true;
	 } else {
	 	this.isIphoneX = false;
	 }

  }
}

module.exports = new DetectDeviceService();
