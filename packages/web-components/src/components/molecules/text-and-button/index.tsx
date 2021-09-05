import { Button, Props } from '@/components/atoms/button/Button';
import { Example } from '@/components/atoms/example/Example';

export function TextAndButton(buttonProps: Props): JSX.Element {
  return (
    <div>
      <Example />
      <Button {...buttonProps} />
    </div>
  );
}
