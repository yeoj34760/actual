import React, { type CSSProperties } from 'react';

import { integerToCurrency } from 'loot-core/shared/util';

import { styles } from '../../style/styles';
import { theme } from '../../style/theme';
import { Block } from '../common/Block';

export function Change({
  amount,
  style,
}: {
  amount: number;
  style?: CSSProperties;
}) {
  return (
    <Block
      style={{
        ...styles.smallText,
        color: amount < 0 ? theme.errorText : theme.noticeTextLight,
        ...style,
      }}
    >
      {amount >= 0 ? '+' : ''}
      {integerToCurrency(amount)}
    </Block>
  );
}
