import React from 'react'; 
import ReactDom from 'react-dom';

//CSS
import './index.css';
import {Forms} from './forms';
import Form from './Form';

//setup vars
function FormList() {
 return (
  <section className="formlist">
    {Forms.map((no)=>{
      return <Form key={no.id} what={no}></Form>; //'what' is the prop, we are passing in the 'no' object there.
    })}
  </section>
 );
}

ReactDom.render(<FormList/>, document.getElementById('root')); 