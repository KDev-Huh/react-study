function HeartIconBtn({ onHeartClick, isFavorite}) {

  return (
    <button className="btn" onClick={onHeartClick}>
      {/* <img className="icon-heart" src={isFavorite ? "/img/heart-fill-icon.svg" : "/img/heart-icon.svg"}/> */}
      {isFavorite ? (
        <img className="btn__img" src="/img/heart-fill-icon.svg"/>
      ) : (
        <img className="btn__img" src="/img/heart-icon.svg"/>
      )}
    </button>
  )
}

function LinkIconBtn({link}) {
  return (
    <a className="btn__img" href={link} target="_blank" rel="noreferrer">
      <img className="btn__img" src="/img/link-icon.svg" alt="링크 아이콘" />
    </a>
  )
}

export default function Course({title, description, thumbnail, isFavorite, link}) {

  function handleFavorite() {
    alert(isFavorite ? '좋아요' : '모르겠어요');
  }

  return (
    <article className="course">
      <img className="course__img" src={thumbnail} alt="강의 이미지" />
      <div className="course__body">
        <div className="course__title">{title}</div>
        <div className="course__description">{description}</div>
      </div>
      <div className="course__icons">
        <HeartIconBtn isFavorite={isFavorite} onHeartClick={handleFavorite} />
        {link && <LinkIconBtn link={link} />}
      </div>
    </article>
  )
}