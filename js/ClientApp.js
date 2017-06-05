/* global React ReactDOM */

var div = React.DOM.div
var MyTitle = require('./MyTitle')

var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = (
  div(null,
    MyTitleFact({ title: 'Props are great!', color: 'rebeccapurple'}),
    React.createElement(MyTitle, { title: 'Use props everywhere!', color: 'mediumaquamarine'}),
    React.createElement(MyTitle, { title: 'Props are the best!', color: 'peru'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
