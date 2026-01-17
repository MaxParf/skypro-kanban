function Card() {
  return (
    <div className="cards__item">
      <div className="cards__card card">

        <div className="card__group">
          <div className="card__theme _orange">
            <p className="_orange">Web Design</p>
          </div>
        </div>

        <div className="card__content">
          <h3 className="card__title">Название задачи</h3>

          <div className="card__date">
            <p>30.10.23</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card;
