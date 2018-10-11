import React, { Component } from 'react';
import swal from 'sweetalert';



class categories extends Component{

constructor(props){
super();
    //console.log("categories props", props);
    //this.showCategories = this.showCategories.bind(this);

    this.state = {
        iscategories : true,
        issubcategories : false,
        isProctoringKey: false,
        category : '',
    }

    //this.SelectCategory = this.SelectCategory.bind(this);
    this.backtoCategories = this.backtoCategories.bind(this);
    this.ProctoringKey = this.ProctoringKey.bind(this);
    this.handleProctoringKey = this.handleProctoringKey.bind(this);
    this.SubmitProctoringKey = this.SubmitProctoringKey.bind(this);
    this.onLogout = this.onLogout.bind(this);
}




    componentDidMount() {


        //const { category } = this.state;
        
        const getCat = localStorage.getItem("categories");
        const getProctoring = localStorage.getItem("Proctoring");
        //const list = localStorage.getItem("list");

        if (getCat != null && getProctoring != null) {
            
            this.setState({
                category: getCat,
                iscategories: false,
                issubcategories: false,
                isProctoringKey : false
            })

            //this.showSubCategories();
        }
        if (getCat != null && getProctoring == null) {

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

backtoCategories(){

    const { category } = this.state;

    console.log("backtoCategories");
    localStorage.removeItem("categories");
    
    this.setState({
        category : '',
        iscategories: true,
        issubcategories: false,
    })
}


    onLogout() {

        //const { category } = this.state;

        console.log("onLogout");
        localStorage.removeItem("Proctoring");
        localStorage.removeItem("categories");
        //localStorage.removeItem("email");
        localStorage.removeItem("list");
        localStorage.setItem("login","logout");
        //localStorage.removeItem("password");
        //localStorage.removeItem("user");

        this.setState({
            category: '',
            iscategories: true,
            issubcategories: false,
            isProctoringKey : false,
        })

        this.props.onLogout();
    }


    ProctoringKey() {
       

        this.setState({
            iscategories: false,
            issubcategories: false,
            isProctoringKey: true,
        })
    }




    SubmitProctoringKey() {

        const { Proctoring } = this.state;


        if (Proctoring == "3011") {

            localStorage.setItem("Proctoring", Proctoring);

            this.setState({
                iscategories: false,
                issubcategories: false,
                isProctoringKey: false,
            })
            
            this.props.OnproctoringSuccess();

            swal("Good Job!", "you can start your quiz now!!", "success");

        }else{
            swal("Bad Job!", "Invalid Proctoring Key!! try 3011 as Proctoring key!!", "error");
        }
        
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
                <button onClick={this.backtoCategories}>Back</button> <br/>
                <button onClick={this.ProctoringKey}>Start Quiz</button>
            </div>

        );
    }



    showProctoringKey() {

        return (
            <div className="container">
                <h1>this is Proctoring Key</h1>
                <input type="password" onChange={this.handleProctoringKey} placeholder="Proctoring Key"/><br/>
                <button onClick={this.SubmitProctoringKey}>Submit Key</button>
            </div>

        );
    }


    handleProctoringKey(e) {
        const Proctoring = e.target.value;
        this.setState({ Proctoring: Proctoring });

    }

    successProctoringKey(){

        // function will redirect to questions components
        this.props.OnproctoringSuccess();

        return (
            <div className="container">
                <h1>Proctoring Success!! <br/>you will be now redirected</h1>
            </div>

        );

        
    }

render(){

    const { iscategories, issubcategories, isProctoringKey } = this.state;

    return (

        <div>
            {<button onClick={this.onLogout}>Logout</button>}
            {iscategories && !issubcategories && !isProctoringKey && this.showCategories()}
            {!iscategories && issubcategories && !isProctoringKey && this.showSubCategories()}
            {!iscategories && !issubcategories && isProctoringKey && this.showProctoringKey()}
            {!iscategories && !issubcategories && !isProctoringKey && this.successProctoringKey()}
            
        </div>
    );

}


}

export default categories;