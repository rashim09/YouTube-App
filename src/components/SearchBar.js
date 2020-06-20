import React, { Component } from 'react';


class SearchBar extends Component {
   state = {
      term: ''
   }

   onInputChangeSearch = (event) => {
      this.setState({ term: event.target.value });
   };

   onFormSubmit = (event) => {
      event.preventDefault(); // to prevent refesh of page
      // this.setState({})
      //callback from parent component notice that onFORMSUBMIT is coming from APP
      this.props.onFormSubmit(this.state.term);
   };


   render() {
      return (
         <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
               <div className="field">
                  <label>Video search</label>
                  <input
                     type="text"
                     value={this.state.term}
                     onChange={this.onInputChangeSearch}
                  ></input>
               </div>
            </form>
         </div>
      );
   }
}


export default SearchBar;