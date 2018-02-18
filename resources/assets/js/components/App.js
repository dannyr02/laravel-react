import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
    constructor(props) {
		super(props);
			this.state = {
				filter:{},
				data: {},
				categories: [],
			};
		this.setField = this.setField.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		axios.get('/api/categories').then(res => {
			this.setState({
				categories: res.records,
			});
		})
		.catch(error => {
			console.log(error);
		});
	}

	setField(key, value) {
		let data = this.state.data;
		data[key] = value;
		this.setState({
			data:data,
		});
	}

	handleChange(e) {
		this.setField(e.target.name, e.target.value);
	}
	
	render() {
		console.log(this.state.categories);
        return (
            <div className="container">
				<input type="text" name="category" value={this.state.data.category} onChange={this.handleChange} />
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
