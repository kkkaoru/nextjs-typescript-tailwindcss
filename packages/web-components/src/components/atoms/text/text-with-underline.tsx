export type Props = {
  text: string;
};

export function TextWithUnderline({ text }: Props): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center w-full p-10 font-bold break-all text-7xl lg:text-9xl after:block after:w-full after:h-1 after:bg-red-100">
      {text}
    </div>
  );
}
