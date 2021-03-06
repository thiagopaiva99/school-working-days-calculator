import React, { Component } from 'react';
import moment from 'moment';
<<<<<<< HEAD
/*eslint-disable no-unused-vars*/
import weekdayCalc from 'moment-weekday-calc';
/*eslint-enable no-unused-vars*/
import excludedDates from './excluded_dates.json';
import DatePicker from 'react-datepicker';
=======

// eslint-disable-next-line
import weekdayCalc from 'moment-weekday-calc';
// not sure why this is working, look into just importing the weekday-calc
>>>>>>> 4c75c3b58f1a2712db810ac52d1b44492fe3db01

import './App.css';
import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      numberOfDays: 0,
      result: "",
      resultDays: 0,
<<<<<<< HEAD
      startDate: moment(),
      todayDate: moment()
=======
      data: this.decodeToState(),
>>>>>>> 4c75c3b58f1a2712db810ac52d1b44492fe3db01
    }
  }

  handleChange = (date) => {
    this.setState ({
      startDate: date,
    })
  }
  
  isWeekday = (date) => {
    const day = date.day()
    return day !== 0 && day !== 6
  }

  getExcludedDates = () => {
    return this.state.data.map(item => item.date);
  }

  getParams = () => {
    const searchParams = window.location.search.replace('?', '');
    return searchParams;
  };

  decodeToState = () => {
    const params = this.getParams();
    const decodedData = params === ""
      ? []
      : JSON.parse(window.atob(params));

    return decodedData;
  }

  encodeState = (data) => {
    const encoded = window.btoa(JSON.stringify(data));
    return encoded;
  }

  addToUrl = () => {
    const myNewUrlQuery = this.encodeState(this.state.data);

    if (window.history.pushState) {
      const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${myNewUrlQuery}`;
      window.history.pushState({ path:newurl },'',newurl);
    }
  }

  calculateDate = () => {
    const resultDays = moment().isoWeekdayCalc({
      rangeStart: moment().format('DD MMM YYYY'),
      rangeEnd: this.state.startDate.format('DD MMM YYYY'),
      weekdays: [1,2,3,4,5],
      exclusions: this.getExcludedDates()
    });

    const calculatedDate = moment(this.state.startDate).format('MM-DD-YYYY');

    this.setState({
      result: calculatedDate,
      resultDays: this.state.numberOfDays,
    });
  }

  setNumberOfDays = ({target}) => {
    this.setState({ numberOfDays: target.value });
  }

  render() {
    return (
      <div className="App Flex">
        <div className="Sidebar Flex Stack">
          <div className="Flex Split">
            <h3>
              Excluded Dates:
            </h3>
            <button
              onClick={this.addToUrl}
              className="button button--ujarak button--border-medium button--round-s button--text-thick"
            >
              Save
            </button>
          </div>
          <div className="SidebarContent">
            <div className="Flex Split-Around">
              <div>
                Date:
              </div>
              <div>
                Reason:
              </div>
            </div>
            {this.state.data.length === 0
                ? <div>No dates to exclude</div>
                : this.state.data.map(item => (
                  <div key={item.date} className="Flex Card Split">
                    <div>{item.date}</div>
                    <div>{item.reason}</div>
                  </div>
                ))
            }
          </div>
        </div>
        <div className="Main bg">
<<<<<<< HEAD
          <div className="Content Stack">
=======
          <div className="Content Stack" >
>>>>>>> 4c75c3b58f1a2712db810ac52d1b44492fe3db01
            <div className="Control">
              <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              filterDate={this.isWeekday}
              excludeDates={this.getExcludedDates()}
              minDate={this.state.todayDate}
              readOnly
              />
              <button
                onClick={this.calculateDate}
                className="button button--ujarak button--border-medium button--round-s button--text-thick"
              >
                Calculate Date
              </button>
            </div>
            <div className="Result Flex">
              { this.state.result &&
                  <div className="ResultContent Flex Stack">
                    <div>In <b>{this.state.resultDays}</b> working days it will be:</div>
                    <div className="Date">{moment(this.state.result).format('dddd, MMMM Do YYYY')}</div>
                    <div className="Date">{this.state.result}</div>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
