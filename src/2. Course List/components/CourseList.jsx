import { Fragment } from 'react';
import Card from './Card.jsx';
import Course from './Course.jsx';

export default function CourseList({title, items}) {

  const lastIndex = items.length -1;

  return (
    <Card title={title}>
      <div className="courses">
        {items.map((item, index) =>   (
          <Fragment >
            <Course key={item.id} {...item} />
            {index !== lastIndex && <hr className='divider' />}
          </Fragment>
        ))}
      </div>
    </Card>
  )
}