import './App.css'
import CourseList from './components/CourseList.jsx';

function App() {
  return (
    <>
      <main>
        <div className="card">
          <div className="card__header">강의 목록</div>
          <div className="card__body">
            <CourseList />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
