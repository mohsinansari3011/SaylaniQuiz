import React, { Component } from 'react';
import ms from 'pretty-ms';

class questions extends Component {

    constructor(props) {

        super();
    
        this.state = {
            selectedq : 0,
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
                                question: '0 What is Two Way Binding?',
                                options: [
                                    { name: 'option 1' },
                                    { name: 'option 2', correct: true },
                                    { name: 'option 3' },
                                    { name: 'option 4' }
                                ]
                            }, {
                                question: '1 What is Lifecycle Digestion?',
                                options: [
                                    { name: 'option 1' },
                                    { name: 'option 2' },
                                    { name: 'option 3', correct: true },
                                    { name: 'option 4' }
                                ]
                                }, {
                                    question: '2 What is Binding Digestion?',
                                    options: [
                                        { name: 'option 1' },
                                        { name: 'option 2' },
                                        { name: 'option 3', correct: true },
                                        { name: 'option 4' }
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
    }
    
    
    
    componentDidMount() {

        //this.startTimer();
    }



    Nextquestion(){
        const { selectedq} = this.state;

        this.setState({
            selectedq: selectedq + 1,
        })
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

render(){
    //const { list } = this.props;
    const { quizlist, selectedq } = this.state;
    const category = localStorage.getItem("categories");
    console.log("return");
    return(
       
    <div>
            <h3>timer: {ms(this.state.time)}</h3>
            <h1>this is questions Component</h1>

            <div>
                <table border="1">
                {quizlist.map((value) => {
                    if (value.category == category) {
                        //console.log(value.quizzes[0].questions.length);
                        
                           
                            return <tr >
                                <td> Question <br/> {value.quizzes[0].questions[selectedq].question}</td>
                                <td>
                                {value.quizzes[0].questions[selectedq].options.map((optionss) => {
                                    return (
                                        <td>
                                            <input type="checkbox" id={optionss.name} value={optionss.name} />
                                            <label for={optionss.name}>{optionss.name}</label>
                                        </td>
                                    );
                                })}
                                </td>
                            </tr>
                            
                        
                        //return <div>{value.quizzes[0].questions[0].question}</div>

                        
                       
                        //return <div>{JSON.stringify(value.quizzes)}</div>

                       
                    }
                   
                })

                }
                    <tr><td> <button onClick={this.Nextquestion}>Next</button></td></tr>
                </table>
               
            </div>
            

    </div>
    
    
    
    );
}







} export default questions;