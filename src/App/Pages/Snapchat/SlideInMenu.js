import React, { Component } from 'react';
require('./menu.scss');
class SlideInMenu extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let menuState = this.props.show ? 0 : '-50%';
        return (

            <form className="menu" style={{ 'left': menuState }}>
                <div className="filter">
                    <h3>Gender</h3>
                    <div className="box-area">
                        <label>
                            Male
                    <input name="male" type="checkbox" />
                        </label>
                    </div>
                    <div className="box-area">
                        <label>
                            Female
                    <input name="female" type="checkbox" />
                        </label>
                    </div>
                </div>
                <div className="filter">
                    <h3>Verified</h3>
                    <div className="box-area">
                        <label>
                            Yes
                    <input name="yes" type="checkbox" />
                        </label>
                    </div>
                    <div className="box-area">
                        <label>
                            No
                    <input name="no" type="checkbox" />
                        </label>
                    </div>
                </div>
                <div className="filter">
                    <h3>Picture</h3>
                    <div className="box-area">
                        <label>
                            Yes
                    <input name="yes" type="checkbox" />
                        </label>
                    </div>
                    <div className="box-area">
                        <label>
                            No
                    <input name="no" type="checkbox" />
                        </label>
                    </div>
                </div>
            </form>
        )
    }
}

export default SlideInMenu;