const Picture = ({ data }) => {
  return (
    <div className="container">
      {data.map((item) => {
        const { id, img, content } = item;
        return (
          <div key={id}>
            <div>
              <img className="image" src={img} alt="pic" />
            </div>
            <p>{content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Picture;
