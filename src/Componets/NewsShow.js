import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class NewsShow extends Component {
  static defaultProps ={
    country: "in",
    category:"general",
    pageSize:6,
    
    
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
    darkMode:PropTypes.string
  }
  articles =[]
  loading=false;
    constructor(props){
        super(props);
        this.state={
        articles:this.articles,
        loading:true,
        page:1,
      }
      document.title =this.props.category;

    }
    async NewsUpdate(){
      const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data =await fetch(url);
      let parsedData =await data.json();
      this.setState({
          articles:parsedData.articles,
          totalResults:parsedData.totalResults,
          loading:false
  })
    }
    async componentDidMount(){
       this.NewsUpdate()
    }
    hadleNextClick= async()=>{
      this.setState({ page:this.state.page +1})
      this.NewsUpdate();
    }
    hadlePrevClick= async()=>{
      this.setState({ page:this.state.page -1})
      this.NewsUpdate();
  }
 
  
  render() {
    let {lightMode,darkMode}=this.props;
          return(
          <div className={`container my-3 bg-${this.props.darkMode}`}>
        

           <h1 className={`text-center text-${this.props.lightMode}`}> <b>News 24/7 -- Top Headline</b></h1>

          {this.state.loading &&<Spinner/>}            
            <div className="row">
           {this.state.articles.map((element)=>{
               return <div className='col-md-4' key={element.url} >
               <NewsItems darkMode1={darkMode} lightMode1 ={lightMode} source={element.source.name} title={element.title} description={element.description} publishedAt={element.publishedAt} urlToImage={element.urlToImage} url={element.url} />
               </div>
            } )}
      </div>
      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className={`btn btn-${this.props.lightMode}`} onClick={this.hadlePrevClick} >Previous</button>
      <button disabled={(this.state.page + 1>(Math.ceil (this.state.totalResults/this.props.pageSize)))} type="button" className={`btn btn-${this.props.lightMode}`} onClick={this.hadleNextClick} >Next</button>
      </div>
      </div>
          )
   }
}


export default NewsShow
