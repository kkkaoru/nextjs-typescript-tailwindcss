/* eslint-disable @typescript-eslint/ban-ts-comment */
// Cannot safe by tsc when using in web-client
// @ts-ignore
import { DefaultButton, Props as ButtonProps } from '@web-components/components/atoms/button';
// @ts-ignore
import { TextWithUnderline } from '@web-components/components/atoms/text';

export type Props = {
  textTitle: string;
  buttonLabel: string;
  buttonProps?: Omit<ButtonProps, 'label'>;
};

export function TextAndButton({ textTitle, buttonLabel, buttonProps }: Props): JSX.Element {
  return (
    <div>
      <TextWithUnderline text={textTitle} />
      <DefaultButton label={buttonLabel} {...buttonProps} />
    </div>
  );
}
