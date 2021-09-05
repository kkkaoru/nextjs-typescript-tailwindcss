import { Button, Props } from '@web-components/components/atoms/button/Button';
import { Example } from '@web-components/components/atoms/example/Example';

export function TextAndButton(buttonProps: Props): JSX.Element {
  return (
    <div>
      <Example />
      <Button {...buttonProps} />
    </div>
  );
}
