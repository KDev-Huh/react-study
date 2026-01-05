import Card from './Card.jsx';
import Course from './Course.jsx';

export default function CourseList({items}) {

  const [course1, course2, course3] = items;

  return (
    <Card title="강의 목록">
      <div className="courses">
        <Course {...course1} />
        <Course {...course2} />
        <Course {...course3} />
      </div>
    </Card>
  )
}