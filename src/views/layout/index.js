import React from 'react'
import { Route, Link, Redirect, Switch, BrowserRouter } from 'react-router-dom'

// 导入子组件
import Home from '../home'
import HouseList from '../houseList'
import Info from '../info'
import User from '../user'

// layout 样式
import './main.css'


// 底部TabBar模块
class TabBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { pathName } = this.props
        return (
            <div>
                <Switch>
                    <Route path="/layout/home" component={Home} />
                    <Route path="/layout/houselist" component={HouseList} />
                    <Route path="/layout/info" component={Info} />
                    <Route path="/layout/user" component={User} />
                    <Redirect exact from="/layout" to="/layout/home" />
                </Switch>
                <footer>
                    <ul>
                        <li className={pathName === '/layout/home' ? 'active' : ''}>
                            <Link to="/layout/home" className="iconfont icon-home1"></Link>
                            <h4>首页</h4>
                        </li>
                        <li className={pathName === '/layout/houselist'?'active':''}>
                            <Link to="/layout/houselist" className="iconfont icon-ziyuan"></Link>
                            <h4>找房</h4>
                        </li>
                        <li className={pathName === '/layout/info' ? 'active' : ''}>
                            <Link to="/layout/info" className="iconfont icon-zixun"></Link>
                            <h4>资讯</h4>
                        </li>
                        <li className={pathName === '/layout/user' ? 'active' : ''}>
                            <Link to="/layout/user" className="iconfont icon-wode"></Link>
                            <h4>我的</h4>
                        </li>
                    </ul>
                </footer>
            </div>
        )
    }
}

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <TabBar pathName={this.props.location.pathname} />
            </div>
        )
    }
}

export default Layout