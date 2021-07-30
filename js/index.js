const initialState = `
  This is a paragraph 
  
  **This is bolded text**
  
  > Block Quotes!
  
  # Heading
  ## Heading 2
  
  - list item 1
  - list item 2
  - list item 3
  
  [visit instagram](https://www.instagram.com/direct/inbox/)
  
  This is a inline \`<div></div>\`
  This is a block of code:
  
  \`\`\`
    let x = 1;
    let y = 2;
    ley z = x + y;
  \`\`\`
  
  ![React](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png)
`;

// link, inline code, a code black, a list item, a blockquote, an image, and bolded text.


class App extends React.Component {
  state = {
    text: initialState
  }
  
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  
  render() {
   
   const { text } = this.state;
    
    const markdown = marked(text, { breaks: true });
    
    const mystyle = {
      textAlign: "center"
    };

    const transForm = {
      width: "50%",
      height: "450px",
      textAlign: "center",
      margin: "0 332px",
      background: "black",
      color: "white",
      fontFamily: "sans-serif"
    }

    const myTitle = {
      textAlign: "center"
    }

    const myTitle2 = {
      width: "50%",
      height: "450px",
      textAlign: "center",
      margin: "0 332px",
      background: "black",
      color: "white",
      fontFamily: "sans-serif"
    }

    const myImg = {
      width: "100%"
    }


    return(
      <div>
        <h1 style={mystyle} className="text-center m-4" id="home">My Markdown</h1>
        <div className="row">
          <div className="col-6">
            <h2 style={myTitle} className="text-center">Enter Markdown:</h2>
            <textarea style={transForm} className="form-control p-2" id="editor" value={text} onChange={this.handleChange}/>
          </div>
          
            <div style={myTitle2} className="col-6">
              <h2 className="text-center">Results:</h2>
              <div style={myImg} className="preview rouded p-2" dangerouslySetInnerHTML={{__html: markdown}} id="preview" />
            </div>
          </div>
      </div>
    );

  
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
