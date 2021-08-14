import type { MouseEventHandler } from 'react';
import './button.css';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

type Props = {
  primary: boolean;
  backgroundColor: string | null;
  size: 'small' | 'medium' | 'large';
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
} & ButtonProps;

/**
 * Primary UI component for user interaction
 */
export const Button: React.VFC<Props> = ({ backgroundColor = null, primary = false, size = 'medium', onClick = undefined, label, ...buttonProps }): JSX.Element => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      onClick={ onClick !== undefined && onClick}
      {...buttonProps}
    >
      {label}
    </button>
  );
};
