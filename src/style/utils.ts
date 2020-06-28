import { BaseCSSProperties } from '@material-ui/core/styles/withStyles'

export const getEllipsisProps = (maxLine: number) =>
  ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': maxLine,
    '-webkit-box-orient': 'vertical',
    // for IE
    lineHeight: '24px',
    maxHeight: 24 * maxLine,
  } as BaseCSSProperties)
