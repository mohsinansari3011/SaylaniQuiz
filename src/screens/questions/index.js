import React, { Component } from 'react';
import ms from 'pretty-ms';

class questions extends Component {

    constructor(props) {

        super();
    
        this.state = {
            selectedq : 0,
            score: 0,
            isnext:true,
            time: 0,
            isOn: false,
            start: 0,
            quizlist: [
                {
                    category: '0', quizzes: [
                        {
                            name: 'quiz 1',
                            password: '123456',
                            questions: [{
                                question: '1 What is Two Way Binding?',
                                options: [
                                    { name: 'option 1', correct: false },
                                    { name: 'option 2', correct: false },
                                    { name: 'option 3', correct: false },
                                    { name: 'option 4', correct: true }
                                ]
                            }, {
                                question: '2 What is Lifecycle Digestion?',
                                options: [
                                    { name: 'option 1', correct: true},
                                    { name: 'option 2', correct: false},
                                    { name: 'option 3', correct: false },
                                    { name: 'option 4', correct: false}
                                ]
                                }, {
                                    question: '3 What is Binding Digestion?',
                                    options: [
                                        { name: 'option 1', correct: false },
                                        { name: 'option 2', correct: true },
                                        { name: 'option 3', correct: false },
                                        { name: 'option 4', correct: false }
                                    ]
                                }, {
                                    question: '4 What is Binding Digestion?',
                                    options: [
                                        { name: 'option 1', correct: false },
                                        { name: 'option 2', correct: false },
                                        { name: 'option 3', correct: true },
                                        { name: 'option 4', correct: false }
                                    ]
                                }]
                        }
                        , { name: 'quiz 2', password: '123456' }]
                },
                { category: '1', quizzes: [{ name: 'quiz JSX 1', password: '123456' }, { name: 'quiz RJX 2', password: '123456' }] },
                { category: '2', quizzes: [{ name: 'quiz Vue 1', password: '123456' }, { name: 'quiz Vue 2', password: '123456' }] }
            ]
        }
    



        this.Nextquestion = this.Nextquestion.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    
    
    componentDidMount() {

        //this.startTimer();
    }



    Nextquestion(){
        const { selectedq} = this.state;
        var totalq = localStorage.getItem("totalq");
        if (totalq != null) {

            this.setState({
                    selectedq: selectedq + 1,
                })
                if (totalq - selectedq === 2) {
                    this.setState({
                        isnext: false,
                    })
                }
        }
    }

    startTimer() {
        this.setState({
            isOn: true,
            time: this.state.time,
            start: Date.now() - this.state.time
        })
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1000);
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const opt = target.op;
        console.log("value", value);
        console.log("opt", opt);
        // this.setState({
        //     [name]: value
        // });
    }

render(){
    //const { list } = this.props;
    const { quizlist, selectedq, isnext } = this.state;
    const category = localStorage.getItem("categories");
    //console.log("return");
    return(
       
    <div>
            <h3>timer: {ms(this.state.time)}</h3>
            <h1>this is questions Component</h1>

            <div>
                
                {quizlist.map((value) => {
                    if (value.category === category) {
                        //console.log(value.quizzes[0].questions.length);
 
                        return <div >
                                <div> Question No <br /> {value.quizzes[0].questions[selectedq].question}</div>
                                <div>
                                {localStorage.setItem("totalq", value.quizzes[0].questions.length)}
                                {value.quizzes[0].questions[selectedq].options.map((optionss) => {
                                    return (
                                        <div>
                                            <input type="radio" checked="false" onChange={this.handleInputChange} name="quizopt" op={String(optionss.correct)} />
                                            <label for={optionss.name}>{optionss.name}</label>
                                        </div>
                                    );
                                })}
                                </div>
                            </div>
                    }
                   
                })

                            }
                   
                        {isnext && <button onClick={this.Nextquestion}>Next</button>}
                        {!isnext && <button >Finish</button>}
                        
                        
               
            </div>
            

    </div>
    
    
    
    );
}







} export default questions;