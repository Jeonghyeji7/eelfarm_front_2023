type TitleProps = {
  children: React.ReactNode;
};

const Title = (props: TitleProps) => {
  return (
    <div className="title flex flex-row gap-6">
      <div className="h-10 w-2 bg-76-gray opacity-100"></div>
      <h3 className="title-text">{props.children}</h3>
      <style jsx>{`
        .title {
          width: 1632px;
        }
        .title-text{
          font: normal normal bold 32px/36px NanumSquareRound;
          letter-spacing: 0px;
          color: #333333;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Title;
