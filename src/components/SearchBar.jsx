import React from "react";

class SearchBar extends React.Component{

    
    render(){
        return(
            <div className="ui segment">
                <form className="ui form">
                    <label>Image Search</label>
                    <input type="text" onChange={(event)=>{console.log(event.target.value);}}/>
                </form>
            </div>
        )
    }
}

export default SearchBar