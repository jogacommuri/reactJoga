var div = React.DOM.div
var h1 = React.DOM.h1
var h2 = React.DOM.h2

var MyTitle = React.createClass({
  render (){
    return (
      div(null,
        h1({style: {color: this.props.color}},this.props.title)
      )
    )
  }
})

var MyTitleFact = React.createFactory(MyTitle)

var MyFirstComponent = (
  div(null,
    MyTitleFact({title:'Props are great!',color: 'rebeccapurple'}),
    React.createElement(MyTitle,{title:'Use props everywhere!', color: 'mediumaquamarine'}),
    React.createElement(MyTitle,{title: 'Props are the best!',color: 'peru'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
