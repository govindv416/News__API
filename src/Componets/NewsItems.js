import React, { Component } from 'react'

export class NewsItems extends Component {
  
  render() {
    let {title, description,urlToImage,url,publishedAt}=this.props;
    
    return (
      
      <div className={`my-3 border ${this.props.darkMode1}`}>
      
        <div className={`card bg-${this.props.darkMode1}`}>
        
           <img src={urlToImage} className="card-img-top" alt=""/>
            
         <div className="card-body">
        
         <h5 className={`card-title text-${this.props.lightMode1}`}>{title} </h5>
         <p className={`card-text text-${this.props.lightMode1}`}>{description}</p>
         <p className="card-text">{publishedAt}</p>
         
         <a rel="noreferrer" href={url} target='_blank' className="btn btn-primary">Read More..</a>
       </div>
       </div>
      </div>
    )
  }
}

export default NewsItems
