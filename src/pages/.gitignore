import React from 'react'
import server from './config/config'
import swal from 'sweetalert'

export default class pwd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pwd: '',
            npwd: '',
            cpwd: '',
            msg: false
        }
    }
    _onChangePwdData = stateData => this.setState(stateData)

    _onClearPwdData = () => this.setState({
        pwd: '',
        npwd: '',
        cpwd: ''
    })

    _onChangePwd = (e) => {
        var md5 = require('md5')
        e.preventDefault()
        if(this.state.npwd.trim().length <7){
            swal({
                text: "Password length must be at least 7 characters",
                icon: "warning"
            });
               return false;  
           }
        else  if (this.state.npwd === this.state.cpwd) {
            fetch(server + '/api/getchangepwd/changepwd', {
                headers: {
                    "Authorization": "Basic " + localStorage.getItem('token'),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({ pwd: md5(this.state.pwd), npwd:md5(this.state.npwd) })
            })
                .then(response => {
                    if (response.status !== 200) throw response.json()
                    else return response.json()
                })
                .then(data => {
                    if (data.send === "successfully updated") {
                        swal({
                            title: data.send,
                            icon: "success"
                        });
                    } else if (data.send === "password dismiss") {
                        swal({
                            title: data.send,
                            icon: "warning"
                        });
                    }
                    this.setState({
                        pwd: '',
                        npwd: '',
                        cpwd: ''
                    })
                })
                .catch(err => console.log(err))
        }
        else {
            swal({
                text: "new password and confirm pasword must be same",
                icon: "warning"
            });
            this._onClearPwdData()
        }

    }

    render() {
        return (
            <div className="container">
                <form className="m-5" onSubmit={this._onChangePwd} >
                    <div className="form-group d-flex justify-content-center">
                        <label for="colFormLabelLg" className="col-lg-2" >Password</label>
                        <input type="password" className="form-control col-lg-5"
                            value={this.state.pwd}
                            onChange={(e) => this._onChangePwdData({ pwd: e.target.value })}
                            required />
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <label for="colFormLabelLg" className="col-lg-2" >Set Password</label>
                        <input type="password" className="form-control col-lg-5"
                            value={this.state.npwd}
                            onChange={(e) => this._onChangePwdData({ npwd: e.target.value })}
                            required />
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <label for="colFormLabelLg" className="col-lg-2" >Confirm Password</label>
                        <input type="password" className="form-control col-lg-5"
                            value={this.state.cpwd}
                            onChange={(e) => this._onChangePwdData({ cpwd: e.target.value })}
                            required />
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <label for="colFormLabelLg" className="col-lg-2" ></label>
                        <input className="btn btn-warning form-control bg-warning  col-lg-5" type="submit" value="Change Password" />

                    </div>
                </form>
            </div>
        )
    }
}