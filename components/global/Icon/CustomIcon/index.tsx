import PropTypes, { InferProps } from 'prop-types';
import React, { useMemo } from 'react';
import { IconKind } from '..';
import Notion from './Svg/Notion';

// for files in Svg fodler
export type SvgName = 'Notion'; //  | 'Github' 등으로 추가 예정
export type SvgProp = {
  kind?: IconKind;
};
export const SvgDefaultProp = {};

type Prop = {
  name: SvgName;
  kind?: IconKind;
};
const DefaultProp = {};

// 부모에서 여기 width, height 100% 으로 이미 지정해줫다

export default function CustomIcon({ name, kind }: Prop & typeof DefaultProp) {
  return <div>{name === 'Notion' && <Notion kind={kind} />}</div>;
}
