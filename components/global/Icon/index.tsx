import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as FontAwesomeSvg } from '@fortawesome/react-fontawesome';
import CustomIcon, {SvgName} from './CustomIcon';
import React, { useMemo } from 'react';
import * as S from './index.styled';

export type IconKind = 'solid' | 'regular' | 'light' | 'duo' | 'brand';

type Prop = {
  identity: ['fa', IconName] | ['custom', SvgName]; // [library, name]
  kind?: IconKind;
  width?: string;
  height?: string;
  color?: string;
};

export default function Icon({ identity, kind, width="2rem", height="2rem", color="inherit" }: Prop) {
  // import {IconPrefix} from '@fortawesome/fontawesome-svg-core'
  const faStyle = useMemo(() => {
    if (kind === 'solid') {
      return 'fas';
    } else if (kind === 'regular') {
      return 'far';
    } else if (kind === 'light') {
      return 'fal';
    } else if (kind === 'duo') {
      return 'fad';
    } else {
      // (kind === 'brand')
      return 'fab';
    }
  }, [kind]);

  

  return (
    <S.RootDiv width={width} height={height} color={color} >
      {identity[0] === 'fa' && (
        <div>
          <FontAwesomeSvg icon={[faStyle, identity[1]]}/>
        </div>
      )}
      {identity[0] === 'custom' && (
        <CustomIcon name={identity[1]} kind={kind} />
      )}
    </S.RootDiv>
  );
}
