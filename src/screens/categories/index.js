import React, { Component } from 'react';




class categories extends Component{

constructor(props){
super();
    //console.log("categories props", props);
    //this.showCategories = this.showCategories.bind(this);

    this.state = {
        iscategories : true,
        issubcategories : false,
        category : '',
    }

    //this.SelectCategory = this.SelectCategory.bind(this);
}




    componentDidMount() {


        //const { category } = this.state;
        
        const getCat = localStorage.getItem("categories");
        //const list = localStorage.getItem("list");

        if (getCat != null) {
            
            this.setState({
                category: getCat,
                iscategories: false,
                issubcategories: true,
            })

            //this.showSubCategories();
        }
    }


SelectCategory(index){

    
//const { category, iscategories, issubcategories} = this.state;
    localStorage.setItem("categories", index);
    localStorage.setItem("list", JSON.stringify(this.props.list));
    this.setState({
        category: index,
        iscategories : false,
        issubcategories : true,
    })



}

showCategories(){

    const { list } = this.props;


    return (
    <div className="container">
        <h1>this is Main categories</h1>
        <ul>
            {
                list.map((value, index) => {  
                        return <li onClick={this.SelectCategory.bind(this,index)} key={index} style={{ listStyle: "none", width: "100%", background: "#331f1f59", padding: 30, marginBottom: 10, textAlign: "left", fontSize: 25, color: "white" }}>{value.name} <span style={{ float: "right", color: "white" }}><i className="fa fa-chevron-right" aria-hidden="true"></i></span></li>
                })
            }


        </ul>
    </div>

    );
}

    showSubCategories() {

        const { list } = this.props;
        const { category} = this.state;

        
        //console.log("list showSubCategories ", list, category);
        return (
            <div className="container">
                <h1>this is Sub categories</h1>
                <ul>
                    {
                        list.map((value, index) => {
                            if (parseInt(category) === index ) {
                                return <li key={index} style={{ listStyle: "none", width: "100%", background: "#331f1f59", padding: 30, marginBottom: 10, textAlign: "left", fontSize: 25, color: "white" }}> {value.name}  has  {value.Question} and you have {value.time} <span style={{ float: "right", color: "white" }}><i className="fa fa-chevron-right" aria-hidden="true"></i></span></li>
                            }
                        
                        })
                    }
                </ul>

                <button>Start Quiz</button>
            </div>

        );
    }

render(){

    const { iscategories, issubcategories } = this.state;

    return (

        <div>
            {iscategories && !issubcategories && this.showCategories()}
            {!iscategories && issubcategories && this.showSubCategories()}
           
        </div>
    );

}


}

export default categories;