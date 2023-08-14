import '../StylesComponents/Buttons.css';

interface IButtonProps {
  text: string;
}

export function Button(props: IButtonProps) {
  return (
    <div className="w-auto">
      <button className="text-sm">
        {props.text}
      </button>
    </div>
  )
}
