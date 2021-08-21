import type { MouseEventHandler } from 'react';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

type ButtonSize = 'small' | 'medium' | 'large';

export type Props = {
  label: string;
  size?: ButtonSize;
  primary?: boolean;
  backgroundColor?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & ButtonProps;

const buttonSizeClassNames = new Map<ButtonSize, string>([
  ['small', 'text-xs py-[10px] px-[16px]'],
  ['medium', 'text-base py-[11px] px-[20px]'],
  ['large', 'text-xl py-[12px] px-[24px]'],
]);

/**
 * Primary UI component for user interaction
 */
export const Button: React.VFC<Props> = ({
  label,
  size = 'medium',
  primary = false,
  backgroundColor,
  onClick,
  ...buttonProps
}): JSX.Element => {
  const buttonSizeClass = buttonSizeClassNames.get(size);
  return (
    <button
      type="button"
      className={[
        'font-sans font-bold border-0 rounded-[3em] cursor-pointer inline-block leading-none',
        `${buttonSizeClass ?? ''}`,
        primary ? 'text-[#fff] bg-[#1ea7fd]' : 'text-[#333] bg-transparent shadow-md',
      ].join(' ')}
      style={
        backgroundColor === undefined
          ? undefined
          : {
              backgroundColor,
            }
      }
      onClick={onClick}
      {...buttonProps}
    >
      {label}
    </button>
  );
};
