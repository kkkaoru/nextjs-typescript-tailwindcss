import { render, fireEvent, screen } from '@testing-library/react';
import { Button, buttonSizeClassNames, defaultClassNames, primaryClassNames } from '@/components/atoms/button/Button';

describe('Button', () => {
  it('should be matched snapshot', () => {
    const { asFragment } = render(<Button label="button" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should be included label text', () => {
    const { getByText } = render(<Button label="Example Label Text" />);
    // expect(screen.getByText('Example')).toBeInTheDocument();
    expect(getByText('Example Label Text')).toBeInTheDocument();
  });
  it('should be called onClick', () => {
    const mockOnClickFunction = jest.fn();
    const { getByText } = render(<Button label="Click" onClick={mockOnClickFunction} />);
    fireEvent.click(getByText('Click'));
    expect(mockOnClickFunction.mock.calls.length).toBe(1);
  });
  it('should be changed button size', () => {
    render(
      <>
        <Button label="Default" />
        <Button label="Small" size="small" />
        <Button label="Medium" size="medium" />
        <Button label="Large" size="large" />
      </>,
    );
    expect(screen.getByText('Default').className).toEqual(
      expect.stringContaining(buttonSizeClassNames.get('medium') as string),
    );
    expect(screen.getByText('Small').className).toEqual(
      expect.stringContaining(buttonSizeClassNames.get('small') as string),
    );
    expect(screen.getByText('Medium').className).toEqual(
      expect.stringContaining(buttonSizeClassNames.get('medium') as string),
    );
    expect(screen.getByText('Large').className).toEqual(
      expect.stringContaining(buttonSizeClassNames.get('large') as string),
    );
  });
  it('should be changed class names by primary', () => {
    render(
      <>
        <Button label="Default" />
        <Button label="Primary" primary={true} />
        <Button label="NotPrimary" primary={false} />
      </>,
    );
    expect(screen.getByText('Default').className).toEqual(expect.stringContaining(defaultClassNames));
    expect(screen.getByText('Primary').className).toEqual(expect.stringContaining(primaryClassNames));
    expect(screen.getByText('NotPrimary').className).toEqual(expect.stringContaining(defaultClassNames));
  });
  it('should be set background color', () => {
    render(
      <>
        <Button label="Default" />
        <Button label="SetBackgroundColor" backgroundColor="#dddddd" />
      </>,
    );
    expect(screen.getByText('Default')).toHaveStyle('background-color: ButtonFace');
    expect(screen.getByText('SetBackgroundColor')).toHaveStyle('background-color: #dddddd');
  });
  it('should be set html button attributes', () => {
    const { getByTestId } = render(
      <Button label="Attributes" type="button" role="button" data-testid="custom-attributes" />,
    );
    const button = getByTestId('custom-attributes');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAttribute('role', 'button');
  });
});
