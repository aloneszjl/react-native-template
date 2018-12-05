// @flow
import React, { PureComponent } from 'react';
import SvgUri from 'react-native-svg-uri';
import svgSource from '../svg';

type Props = {
  width?: number,
  height?: number,
  fill?: string,
  name: string,
};

class Icon extends PureComponent<Props> {
  static defaultProps = {
    width: 20,
    height: 20,
    fill: '#333333',
  };

  render() {
    const { name, ...props } = this.props;
    return <SvgUri source={svgSource[name]} {...props} />;
  }
}

export default Icon;
