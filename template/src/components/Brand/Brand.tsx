import React from 'react';
import { View, Image } from 'react-native';
import { useTheme } from '../../hooks';
import AdasaLogo from '../../theme/assets/svg/adasa_logo'

type Props = {
  height?: number | string;
  width?: number | string;
};

const Brand = ({ height, width }: Props) => {
  return (
    <View testID={'brand-img-wrapper'} style={{ height, width }}>
      <AdasaLogo width={'100%'} height={'100%'} />
    </View>
  );
};

Brand.defaultProps = {
  height: 200,
  width: 200,
  mode: 'contain',
};

export default Brand;
