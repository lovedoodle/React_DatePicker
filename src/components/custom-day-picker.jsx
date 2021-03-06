import React from 'react';
import '../styles/components/shortcut-header.scss';
import '../styles/components/custom-day-picker.scss';
import Absolute from './absolute.jsx';
import Relative from './relative.jsx'


class CustomDayPicker extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      customActive: this.props.customActive,
      absolute: true,
    }

  }

  toggleAbsolute(v) {
    this.setState(
      {
        absolute: v
      }
    )
  }

  cancelCustom() {
    this.props.cancelCustom()
    this.forceUpdate()
  }

  


  render() {
    return (
      <div className={'dayPickerContainer'}>
        <div>
          <span className={'button ' + (this.state.absolute? 'btnActive' : '')} onClick={this.toggleAbsolute.bind(this, true)}>Absolute</span>
          <span className={'button ' + (this.state.absolute? '' : 'btnActive')} onClick={this.toggleAbsolute.bind(this, false)}>Relative</span>
        </div>
        <div>
          {this.state.absolute && <Absolute />}
          {!this.state.absolute && <Relative />}
        </div>

        <div className="float-right">
          <span className={'link-btn'} onClick={this.cancelCustom.bind(this)}>Cancel</span>
          <span className={'blue-sqaure-btn'} onClick={this.applyDaysSelected.bind(this)}>Apply</span>
        </div>


      </div>
    )
  }

}

export default CustomDayPicker;
