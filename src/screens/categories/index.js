import React, { Component } from 'react';




class categories extends Component{

constructor(props){
super();
    console.log("categories props", props);

}

render(){

    const { list } = this.props;

    return (
        <div className="container">
            <h1>this is categories</h1>
            <ul>
                {
                    list.map((value, index) => {
                        return <li style={{ listStyle: "none", width: "100%", background: "#331f1f59", padding: 30, marginBottom: 10, textAlign: "left", fontSize: 25, color: "white" }}>{value.name} <span style={{ float: "right", color: "white" }}><i className="fa fa-chevron-right" aria-hidden="true"></i></span></li>
                    })
                }


            </ul>
        </div>
    );

}


}

export default categories;