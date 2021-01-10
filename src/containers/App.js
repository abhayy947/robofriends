import React,{Component} from 'react';
import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

    class App extends Component{
 	   constructor(){
 		   super();
 		   this.state={
 			   robots:[],
	           searchField:'',
 		    }
 	    }

        componentDidMount(){
		    fetch('http://jsonplaceholder.typicode.com/users')
				    .then(response=>response.json())
				    .then(users=>this.setState({robots:users}));
		 }


 	    onSearchChange=(event)=>{
  	        this.setState({searchField:event.target.value});
         }

    
        render(){
        	const {robots,searchField}=this.state;
		    const filteredrobots=robots.filter(robot=>
		  			      robot.name.toLowerCase().includes(searchField.toLowerCase()));
		 		
		 	return ( 
				    <div className='tc'>
				        <h1 className='f1'>ROBOFRIENDS</h1>
				            <SearchBox searchChange={this.onSearchChange}/>
				     	        <Scroll>
				     	            
				     	         <CardList robots={filteredrobots}/>
				     	             
				     	    </Scroll>
				    </div>
				    );
			
		}
}

export default App;