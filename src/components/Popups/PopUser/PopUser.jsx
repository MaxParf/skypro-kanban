function PopUser({ isOpen }) {
  return (
    <div
      className="header__pop-user-set"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <p className="pop-user-set__name">Ivan Ivanov</p>
      <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>

      <button>Выйти</button>
    </div>
  );
}

export default PopUser;
