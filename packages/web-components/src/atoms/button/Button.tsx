import type { MouseEventHandler } from 'react';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

type ButtonSize = 'small' | 'medium' | 'large';

type Props = {
  primary: boolean;
  backgroundColor: string | null;
  size: ButtonSize;
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
} & ButtonProps;

const buttonSizeClassNames = new Map<ButtonSize, string>([
  ['small', 'text-xs py-[10px] px-[16px]'],
  ['medium', 'text-base py-[11px] px-[20px]'],
  ['large', 'text-xl py-[12px] px-[24px]'],
])

/**
 * Primary UI component for user interaction
 */
export const Button: React.VFC<Props> = ({ backgroundColor = null, primary = false, size = 'medium', onClick = undefined, label, ...buttonProps }): JSX.Element => {
  const buttonSizeClass = buttonSizeClassNames.get(size);
  return (
    <button
      type="button"
      className={[
        'font-sans font-bold border-0 rounded-[3em] cursor-pointer inline-block leading-none',
        `${buttonSizeClass}`,
        primary ? 'text-[#fff] bg-[#1ea7fd]' : 'text-[#333] bg-transparent shadow-md'
      ].join(' ')}
      style={backgroundColor && { backgroundColor }}
      onClick={ onClick !== undefined && onClick}
      {...buttonProps}
    >
      {label}
    </button>
  );
};
