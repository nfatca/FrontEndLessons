const Msg = (props) => {
  //! Destructing
  const { name } = props;
  return (
    <div>
      <h3>Merhaba {name}</h3>
    </div>
  );
};

export default Msg;
