import React , {Component} from "react"


class MemeGenerator extends Component{
  constructor(){
    super()
    this.state={
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }
  }



componentDidMount(){
  fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response => {
      const{memes} = response.data
      this.setState({ allMemeImgs : memes })
    })

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

handleChange(e){
const {name, value} = e.target
this.setState({
  [name] : value
})
}

handleSubmit(e){
e.preventDefault()
const randomNum = Math.floor( Math.random() * this.state.allMemeImgs.length)
const randMemeImg = this.state.allMemeImgs[randomNum].url
this.setState({ randomImage: randMemeImg })
}

render() {
   return (
     <div>
       <form className="meme-form" onSubmit={this.handleSubmit}>
        <input name="topText" value={this.state.topText} placeholder="Top text" type="text" onChange={this.handleChange}/>
        <input name="bottomText" value={this.state.bottomText} placeholder="Bottom text" type="text" onChange={this.handleChange}/>
        <button>GEN</button> <br/><br/>
       </form>

      <div className="meme">
        <img src={this.state.randomImage} alt=""></img>
        <h2 className="top">{this.state.topText}</h2>
        <h2 className="bottom">{this.state.bottomText}</h2>

      </div>
       
     </div>
   )
  }
 
}





export default MemeGenerator 