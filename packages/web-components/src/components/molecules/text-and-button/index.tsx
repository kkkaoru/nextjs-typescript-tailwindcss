import { DefaultButton, Props as ButtonProps } from '@web-components/components/atoms/button/default';
import { TextWithUnderline } from '@web-components/components/atoms/text';

export type Props = {
  textTitle: string;
  buttonLabel: string;
  buttonProps?: ButtonProps;
};

export function TextAndButton({ textTitle, buttonLabel, buttonProps }: Props): JSX.Element {
  return (
    <div>
      <TextWithUnderline text={textTitle} />
      <DefaultButton label={buttonLabel} {...buttonProps} />
    </div>
  );
}
