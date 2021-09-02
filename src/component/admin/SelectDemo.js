import React, { useState } from 'react'
import $ from 'jquery';
import BASE_URL from '../base';
const axios = require('axios');
// import AppendItem from './AppendItem';



class SelectDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 'coconut',
        already:[],
        options: [],
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        var id = event.target.value;
        if(this.state.already.includes(id)){
          alert('Already selected');
        }
        else{
          this.state.already.push(id);
        // this.state.options.map(opt=>{
        //   if(opt.id===id){
        //     var x = $('#ddc')
        //     $('#ddc').append('<div class="div-app-main" > <div class="ap-div-first-cont-m"> <div class="d-item-1"> <p> '+opt.label+' </p> </div> <div class="all-store">  <label> <input type="checkbox"> All Store </label>  <input type="email" class="form-control" id="email">  </div> </div> <button onclick="this.parentNode.remove(this)" > X </button>  </div>')
        //   }
        // })
        
      }

          
    //     <div className="one">
    //     <p> Lorem ipsum one 1 </p>
    // </div>
        this.setState({value: event.target.value});
        console.log({value: event.target.value})
      }

      removeId(id){
        // alert(id)
        for( var i = 0; i < this.state.already.length; i++){ 
    
          if ( this.state.already[i] === id) { 
      
            this.state.already.splice(i, 1); 
          }
      
      }
            // $('#'+id).remove();
      }
    
      handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }

    //   appendData() {
    //     this.displayData.push(<div  id="display-data"><pre>{this.state.postVal}</pre></div>);
    //     this.setState({
    //        showdata : this.displayData,
    //        postVal : ""
    //     });
    //  }
      
    
  async componentDidMount(){
    var url = BASE_URL+'product/getsellPlatform/';

    
    var config = {
        method: 'get',
        url: url,
    };
      axios(config)
  .then(res => {
    this.setState({
      options: res.data.data
    });
    console.log(res.data.data);
  })
  .catch(err => {
    alert(err);
  })
  }
    render() {
      return(
        <>
        <select className="form-control" value={this.state.value} onChange={this.handleChange} onClick={this.appendData}>
        <option value={0}>Select</option>
           {this.state.options.map(opt=>{
            //  if(!this.state.already.includes(opt.id)){
               
             return <option value={opt.uuid}>{opt.name}</option>
            //  }
           })}
       </select>
        <div id="ddc">
       {this.state.options.map(op=>{
         if(this.state.already.includes(op.uuid)){
           return <div class="div-app-main" id={op.uuid} > 
           <div class="ap-div-first-cont-m"> 
           <div class="d-item-1"> 
           <p> {op.name} </p> 
           </div> label
           <div class="all-store">  
           <label> <input type="checkbox"/> All Store </label>  
           <input type="email" class="form-control" id="email"/>  </div> 
           </div> <button onClick={()=>this.removeId(op.uuid)} > X </button>  </div>
         }
       })}
        </div>
   </>
      ) 
       
    }
  }


  export default SelectDemo
