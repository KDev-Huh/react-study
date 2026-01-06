function HeartIconBtn({isFavorite}) {
  return (
    <button className="btn">
      {/* <img className="icon-heart" src={isFavorite ? "/img/heart-fill-icon.svg" : "/img/heart-icon.svg"}/> */}
      {isFavorite ? (
        <img className="btn__img" src="/img/heart-fill-icon.svg"/>
      ) : (
        <img className="btn__img" src="/img/heart-icon.svg"/>
      )}
    </button>
  )
}

export default function Course({title, description, thumbnail, isFavorite, link}) {

  return (
    <article className="course">
      <img className="course__img" src={thumbnail} alt="강의 이미지" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>
      <div className="course__icons">
        <HeartIconBtn isFavorite={isFavorite} />
        {
          link && (
            <a className="btn__img" href={link} target="_blank" rel="noreferrer">
              <img className="btn__img" src="/img/link-icon.svg" alt="링크 아이콘" />
            </a>
          )
        }
      </div>
    </article>
  )
}