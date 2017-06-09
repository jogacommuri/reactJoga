const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')


const MyFirstComponent = () => (
	<div className='app-container'>
		<div className='details'>
			<h1 className='title'>sVideo</h1>
			<input className='search' type='text' placeholder='Search' />
			<button className='browse-all'>or Browse All</button>
		</div>
	</div>	
)

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
