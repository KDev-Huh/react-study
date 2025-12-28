import './App.css'
import CourseList from './components/CourseList.jsx';

function App() {
  return (
    <>
      <main>
        <div class="card">
          <div class="card__header">강의 목록</div>
          <div class="card__body">
            <CourseList />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
