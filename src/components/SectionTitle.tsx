interface TitleProps {
  title: string;
  color: string;
}

function SectionTitle(props: TitleProps) {
  return (
    <div id={props.title} className={`section-title ${props.color}`}>
      &lt;{props.title} /&gt;
    </div>
  );
}

export default SectionTitle;
