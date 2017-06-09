const React = require('react')
const ReactDOM = require('react-dom')

const MyFirstComponent = () => (
  <div className='app-container'>
    <div className='details'>
      <h1 className='title'>sVideo</h1>
      <input className='search' type='text' placeholder='Search' />
      <br /><br />
      <button className='browse-all'> or Browse All</button>
    </div>
  </div>
)

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
